export default function AuthorBio() {
  return (
    <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 my-8'>
      <div className='flex items-start gap-4'>
        <div className='w-12 h-12 bg-[#1D9E75] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0'>HGN</div>
        <div>
          <p className='text-slate-800 font-semibold text-sm mb-1'>The Home Guide Network Editorial Team</p>
          <p className='text-slate-600 text-xs leading-relaxed'>Our guides are researched and written by the editorial team at The Home Guide Network, an independent publisher covering home systems for homeowners. We cover garages, basements, septic systems, and wells across four dedicated guide sites. Learn more at <a href='https://thehome.guide' className='text-[#1D9E75] underline'>thehome.guide</a>.</p>
        </div>
      </div>
    </div>
  )
}
