import Script from 'next/script'

export default function BeehiivEmailCapture() {
  return (
    <section className='my-8'>
      <div className='bg-slate-50 rounded-xl pt-10 pb-6 px-6'>
        <div className='text-center max-w-xl mx-auto mb-6'>
          <p className='text-lg font-bold text-slate-900 mb-2'>Get Homeowner Tips in Your Inbox</p>
          <p className='text-slate-600 text-sm leading-relaxed'>
            Well maintenance tips, water quality guides, and seasonal reminders from The Well Guide. Free to your inbox.
          </p>
        </div>
        <iframe
          src='https://subscribe-forms.beehiiv.com/d7389f65-77c3-4b1f-bbff-c04470ac4ae4'
          className='beehiiv-embed'
          data-test-id='beehiiv-embed'
          frameBorder='0'
          scrolling='no'
          style={{ width: '100%', maxWidth: '600px', height: '520px', margin: '0 auto', display: 'block', borderRadius: '0px', backgroundColor: 'transparent', boxShadow: '0 0 #0000' }}
        />
        <p className='text-xs text-slate-400 text-center mt-2 leading-relaxed'>
          By subscribing you agree to receive emails from The Home Guide Network. We respect your privacy. Unsubscribe anytime.{' '}
          <a href='https://thehome.guide/privacy' target='_blank' rel='noopener noreferrer' className='underline hover:text-slate-500'>Privacy Policy</a>
        </p>
      </div>
      <Script async src='https://subscribe-forms.beehiiv.com/embed.js' strategy='afterInteractive' />
      <Script async src='https://subscribe-forms.beehiiv.com/attribution.js' strategy='afterInteractive' />
    </section>
  )
}
