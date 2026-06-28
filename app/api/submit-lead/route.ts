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

  // First name
  if (firstName.length < 2 || !NAME_RE.test(firstName)) {
    errors.firstName = 'Please enter your first name.'
  }

  // Last name
  if (lastName.length < 2 || !NAME_RE.test(lastName)) {
    errors.lastName = 'Please enter your last name.'
  }

  // Email — shape + length cap + obvious-malformed check
  if (!emailRaw || emailRaw.length > 254 || !EMAIL_RE.test(emailRaw)) {
    errors.email = 'Please enter a valid email address.'
  }

  // Phone — digits only, must be 10 (US) or 11 starting with 1
  let phoneDigits = phoneRaw.replace(/\D/g, '')
  if (phoneDigits.length === 11 && phoneDigits.startsWith('1')) {
    phoneDigits = phoneDigits.slice(1)
  }
  if (phoneDigits.length !== 10) {
    errors.phone = 'Please enter a valid 10-digit US phone number.'
  }
  // Block obvious invalid US area codes (cannot start with 0 or 1)
  else if (phoneDigits[0] === '0' || phoneDigits[0] === '1') {
    errors.phone = 'Please enter a valid US phone number.'
  }

  // ZIP — must be exactly 5 digits
  if (!/^\d{5}$/.test(zipCode)) {
    errors.zipCode = 'Please enter a valid 5-digit ZIP code.'
  }

  // Task IDs
  if (!taskIds || taskIds.length === 0) {
    errors.taskIds = 'Please select a project type.'
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
    },
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate + normalize
    const { errors, cleaned } = validate(body)
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', fields: errors },
        { status: 400 }
      )
    }

    const NX_ACCESS_KEY = process.env.NX_ACCESS_KEY || 'b8d8200d3b'
    const NX_USER_ID = process.env.NX_USER_ID || '11550'

    // Submit a lead for each task ID
    const results = []
    for (const taskId of cleaned.taskIds) {
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
        source_id: 'thewell.guide',
      })

      if (cleaned.trustedFormCertUrl) {
        params.append('cert_url', cleaned.trustedFormCertUrl)
      }

      try {
        const response = await fetch('https://api.networx.com/?' + params.toString(), {
          method: 'GET',
        })
        const result = await response.text()
        results.push({ taskId, result })
      } catch (err) {
        results.push({ taskId, error: 'Failed to submit' })
      }
    }

    return NextResponse.json({ success: true, results })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
