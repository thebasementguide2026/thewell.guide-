import { NextResponse } from 'next/server'

// Server-side validation helpers
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const NAME_RE = /[a-zA-Z]/

function validate(body: Record<string, unknown>) {
  const errors: Record<string, string> = {}

  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''
  const emailRaw = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const phoneRaw = typeof body.phone === 'string' ? body.phone : ''
  const zipCode = typeof body.zipCode === 'string' ? body.zipCode.trim() : ''
  const taskIds = Array.isArray(body.taskIds) ? body.taskIds : []

  if (firstName.length < 2 || !NAME_RE.test(firstName)) {
    errors.firstName = 'Please enter your first name.'
  }
  if (lastName.length < 2 || !NAME_RE.test(lastName)) {
    errors.lastName = 'Please enter your last name.'
  }
  if (!emailRaw || emailRaw.length > 254 || !EMAIL_RE.test(emailRaw)) {
    errors.email = 'Please enter a valid email address.'
  }

  let phoneDigits = phoneRaw.replace(/\D/g, '')
  if (phoneDigits.length === 11 && phoneDigits.startsWith('1')) {
    phoneDigits = phoneDigits.slice(1)
  }
  if (phoneDigits.length !== 10) {
    errors.phone = 'Please enter a valid 10-digit US phone number.'
  } else if (phoneDigits[0] === '0' || phoneDigits[0] === '1') {
    errors.phone = 'Please enter a valid US phone number.'
  }

  if (!/^\d{5}$/.test(zipCode)) {
    errors.zipCode = 'Please enter a valid 5-digit ZIP code.'
  }

  if (!taskIds || taskIds.length === 0) {
    errors.taskIds = 'Please select a project type.'
  }

  const tfRaw = typeof body.trustedFormCertUrl === 'string' ? body.trustedFormCertUrl.trim() : ''
  if (!tfRaw || !/^https?:\/\/cert\.trustedform\.com\//i.test(tfRaw)) {
    errors.trustedFormCertUrl = 'We could not verify your form. Please refresh the page and try again.'
  }

  const tcpaRaw = typeof body.tcpaComplianceText === 'string' ? body.tcpaComplianceText.trim() : ''
  if (!tcpaRaw || tcpaRaw.length < 20) {
    errors.tcpaComplianceText = 'Consent text missing. Please refresh the page and try again.'
  }

  return {
    errors,
    cleaned: {
      firstName,
      lastName,
      email: emailRaw,
      phone: phoneDigits,
      zipCode,
      taskIds,
      description: typeof body.description === 'string' ? body.description : '',
      trustedFormCertUrl: typeof body.trustedFormCertUrl === 'string' ? body.trustedFormCertUrl : '',
      tcpaComplianceText: typeof body.tcpaComplianceText === 'string' ? body.tcpaComplianceText.trim() : '',
    },
  }
}

// Extract a tag's text content from a Networx XML response.
function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'i')
  const m = xml.match(re)
  return m ? m[1].trim() : ''
}

// Redact sensitive query params from a URL for logging.
function redactUrl(url: string): string {
  return url
    .replace(/(nx_access_key=)[^&]+/i, '$1***')
    .replace(/(nx_userId=)[^&]+/i, '$1***')
}

export async function POST(request: Request) {
  const reqId = Math.random().toString(36).slice(2, 10)
  try {
    const body = await request.json()

    const { errors, cleaned } = validate(body)
    if (Object.keys(errors).length > 0) {
      console.log(`[lead ${reqId}] validation_failed`, JSON.stringify({ errors }))
      return NextResponse.json(
        { error: 'Validation failed', fields: errors },
        { status: 400 }
      )
    }

    const NX_ACCESS_KEY = process.env.NX_ACCESS_KEY || 'b8d8200d3b'
    const NX_USER_ID = process.env.NX_USER_ID || '11550'
    const SOURCE_ID = 'thewell.guide'

    console.log(`[lead ${reqId}] submit_start`, JSON.stringify({
      source_id: SOURCE_ID,
      email_hash: cleaned.email.slice(0, 3) + '***',
      zip: cleaned.zipCode,
      task_count: cleaned.taskIds.length,
      task_ids: cleaned.taskIds,
      cert_url_present: !!cleaned.trustedFormCertUrl,
      cert_url_host: cleaned.trustedFormCertUrl.slice(0, 32),
      tcpa_len: cleaned.tcpaComplianceText.length,
    }))

    const results: Array<{
      taskId: number | string
      ok: boolean
      statusCode: string
      statusDesc: string
      leadId: string
      httpStatus: number
      durationMs: number
      rawSnippet: string
    }> = []

    for (const taskId of cleaned.taskIds) {
      const customId = `sg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
      const srcCreatedAt = new Date().toISOString()
      const params = new URLSearchParams({
        nx_access_key: NX_ACCESS_KEY,
        nx_userId: NX_USER_ID,
        f_name: cleaned.firstName,
        l_name: cleaned.lastName,
        email: cleaned.email,
        phone: cleaned.phone,
        zipcode: cleaned.zipCode,
        task_id: String(taskId),
        comments: cleaned.description || '',
        source_id: SOURCE_ID,
        tcpa_compliance_text: cleaned.tcpaComplianceText,
        cert_url: cleaned.trustedFormCertUrl,
        src_created_at: srcCreatedAt,
        custom_id: customId,
      })
      const url = 'https://api.networx.com/?' + params.toString()
      const started = Date.now()

      try {
        const response = await fetch(url, { method: 'GET' })
        const text = await response.text()
        const durationMs = Date.now() - started
        const statusCode = extractTag(text, 'statusCode') || extractTag(text, 'status_code')
        const statusDesc = extractTag(text, 'statusDesc') || extractTag(text, 'status_desc') || extractTag(text, 'message')
        const leadId = extractTag(text, 'leadId') || extractTag(text, 'lead_id') || extractTag(text, 'id')
        const ok = response.ok && /success/i.test(statusCode)

        console.log(`[lead ${reqId}] networx_response`, JSON.stringify({
          task_id: taskId,
          http: response.status,
          duration_ms: durationMs,
          statusCode,
          statusDesc,
          leadId,
          custom_id: customId,
          url: redactUrl(url),
          raw: text.slice(0, 800),
        }))

        results.push({
          taskId,
          ok,
          statusCode,
          statusDesc,
          leadId,
          httpStatus: response.status,
          durationMs,
          rawSnippet: text.slice(0, 400),
        })
      } catch (err) {
        const durationMs = Date.now() - started
        const message = err instanceof Error ? err.message : 'fetch_failed'
        console.log(`[lead ${reqId}] networx_error`, JSON.stringify({
          task_id: taskId,
          duration_ms: durationMs,
          error: message,
          url: redactUrl(url),
        }))
        results.push({
          taskId,
          ok: false,
          statusCode: 'NETWORK_ERROR',
          statusDesc: message,
          leadId: '',
          httpStatus: 0,
          durationMs,
          rawSnippet: '',
        })
      }
    }

    const successCount = results.filter((r) => r.ok).length
    const failCount = results.length - successCount

    console.log(`[lead ${reqId}] submit_done`, JSON.stringify({
      total: results.length,
      success: successCount,
      fail: failCount,
    }))

    // Treat the submission as "successful from the user's perspective" if at least one task posted.
    // The user should never see a server error if Networx accepted at least one lead.
    if (successCount > 0) {
      return NextResponse.json({ success: true, total: results.length, posted: successCount, failed: failCount, results })
    }

    // All Networx attempts failed — surface a 502 so the client knows it didn't go through.
    // Front-end will keep its existing "Something went wrong" copy.
    return NextResponse.json(
      { success: false, error: 'Lead could not be submitted to partner', total: results.length, posted: 0, failed: failCount, results },
      { status: 502 }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown'
    console.log(`[lead ${reqId}] internal_error`, JSON.stringify({ error: message }))
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
