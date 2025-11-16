import React from 'react'

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen" style={{ minHeight: '1080px' }}>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,120,80,0.14),transparent_60%)]" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8 py-24 text-center">
        <h2 className="text-6xl font-semibold tracking-tight text-white mb-6">Let’s Collaborate!</h2>
        <p className="text-white/70 text-lg mb-12">Terbuka untuk kolaborasi, freelance, atau kesempatan full-time. Mari wujudkan produk digital yang bermakna dan inklusif.</p>

        <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[760px]">
          {[
            { label: 'Email', value: 'email@placeholder.com' },
            { label: 'LinkedIn', value: '/placeholder' },
            { label: 'Instagram', value: '@placeholder' },
            { label: 'Behance', value: '/placeholder' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-left">
              <p className="text-white/60 text-xs uppercase tracking-wider">{item.label}</p>
              <p className="text-white/90 text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
