import React from 'react'
import GradientOrbs from './GradientOrbs'

export default function About() {
  return (
    <section className="relative w-full min-h-screen" style={{ minHeight: '1080px' }}>
      <div className="absolute inset-0 bg-black" />
      <GradientOrbs />
      <div className="relative z-10 grid grid-cols-12 gap-12 max-w-[1200px] mx-auto px-8 py-24">
        <div className="col-span-12 lg:col-span-6 text-white space-y-6">
          <h2 className="text-5xl font-semibold tracking-tight">About Me</h2>
          <div className="space-y-2 text-lg text-white/80">
            <p className="text-3xl font-medium">Alexsandrea Greska</p>
            <p>Lulusan: Universitas Islam Indonesia, Juli 2025</p>
            <p>Bidang: UI/UX Designer</p>
          </div>
          <p className="text-white/80 text-lg leading-relaxed max-w-prose">
            Saya adalah seorang UI/UX Designer yang fokus pada desain sistem digital, pengalaman pengguna, aksesibilitas, dan konsistensi visual. Saya terbiasa bekerja dalam tim pengembangan dan lingkungan institusi pendidikan.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
          <div className="relative">
            <div className="h-[360px] w-[360px] rounded-3xl bg-gradient-to-br from-orange-500/40 to-rose-500/40 p-1 shadow-[0_0_60px_rgba(255,100,60,0.25)]">
              <div className="h-full w-full rounded-2xl bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center text-white/40">
                  Foto
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 rounded-3xl border border-white/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
