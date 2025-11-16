import React from 'react'

const skills = [
  'UI Design',
  'UX Research',
  'Wireframing & Prototyping',
  'Design System',
  'Usability Testing',
  'Product Thinking',
]

function SkillCard({ label }) {
  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-rose-500/40 via-orange-500/30 to-sky-500/40">
      <div className="rounded-2xl h-full w-full bg-neutral-950/70 border border-white/10 p-6 flex items-center justify-center">
        <span className="text-white/90 text-lg font-medium tracking-wide">{label}</span>
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 40px rgba(255,120,80,0.25)' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="relative w-full min-h-screen" style={{ minHeight: '1080px' }}>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,120,80,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(80,180,255,0.18),transparent_50%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24">
        <h2 className="text-5xl font-semibold tracking-tight text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <SkillCard key={s} label={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
