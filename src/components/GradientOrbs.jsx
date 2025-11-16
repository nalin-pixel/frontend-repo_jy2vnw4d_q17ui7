import React from 'react'

export default function GradientOrbs({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,88,88,0.45),rgba(0,0,0,0))] blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(88,166,255,0.45),rgba(0,0,0,0))] blur-3xl opacity-70" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,140,66,0.35),rgba(0,0,0,0))] blur-3xl opacity-60" />
    </div>
  )
}
