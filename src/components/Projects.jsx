import React from 'react'

const projects = [
  { name: 'Project One', year: '2024', role: 'UI/UX Designer' },
  { name: 'Project Two', year: '2024', role: 'UI/UX Designer' },
  { name: 'Project Three', year: '2025', role: 'UI/UX Designer' },
  { name: 'Project Four', year: '2025', role: 'UI/UX Designer' },
  { name: 'Project Five', year: '2025', role: 'UI/UX Designer' },
]

function ProjectCard({ item }) {
  return (
    <div className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-rose-500/30 to-orange-400/30">
      <div className="rounded-2xl h-full w-full bg-neutral-950/70 border border-white/10 p-5 flex flex-col gap-4">
        <div className="h-40 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center text-white/30">
          Thumbnail
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white text-lg font-medium">{item.name}</p>
            <p className="text-white/70 text-sm">{item.role}</p>
          </div>
          <span className="text-white/80 text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">
            {item.year}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen" style={{ minHeight: '1080px' }}>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,120,80,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24">
        <h2 className="text-5xl font-semibold tracking-tight text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} item={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
