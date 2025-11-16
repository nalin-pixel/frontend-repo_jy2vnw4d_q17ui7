import React from 'react'

const tools = [
  'Figma',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Notion',
  'Miro',
  'Whimsical',
]

function ToolItem({ name }) {
  return (
    <div className="group relative flex items-center justify-center h-28 rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/40 via-rose-500/30 to-orange-400/40">
      <div className="h-full w-full rounded-2xl bg-neutral-950/70 border border-white/10 flex items-center justify-center">
        <span className="text-white/90 text-lg font-medium tracking-wide">{name}</span>
      </div>
    </div>
  )
}

export default function Tools() {
  return (
    <section className="relative w-full min-h-screen" style={{ minHeight: '1080px' }}>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(80,180,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,120,80,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24">
        <h2 className="text-5xl font-semibold tracking-tight text-white mb-12">Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((t) => (
            <ToolItem key={t} name={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
