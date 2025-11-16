import React from 'react'
import { Circle } from 'lucide-react'

const items = [
  {
    org: 'Badan Sistem Informasi Universitas Islam Indonesia',
    role: 'UX Designer',
    period: 'Januari 2025 – Sekarang',
  },
  {
    org: 'BIT (Belajar Informasi dan Teknologi), Universitas Islam Indonesia',
    role: 'Assistant Speaker',
    period: 'Maret 2025 – Oktober 2025',
  },
  {
    org: 'Multi-Factor Authentication (MFA) Campus Initiative, Universitas Islam Indonesia',
    role: 'Kontributor UI/UX',
    period: 'April 2025',
  },
]

export default function Experience() {
  return (
    <section className="relative w-full min-h-screen" style={{ minHeight: '1080px' }}>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,120,80,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-8 py-24">
        <h2 className="text-5xl font-semibold tracking-tight text-white mb-16">Experience</h2>
        <div className="relative pl-10 border-l border-white/10">
          {items.map((item, idx) => (
            <div key={idx} className="relative pb-12">
              <div className="absolute -left-[11px] top-1">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 shadow-[0_0_24px_rgba(255,120,80,0.5)] border border-white/20" />
              </div>
              <div className="bg-neutral-950/70 rounded-xl border border-white/10 p-6">
                <p className="text-white text-xl font-medium">{item.org}</p>
                <p className="text-white/80">Peran: {item.role}</p>
                <p className="text-white/60 text-sm">Periode: {item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
