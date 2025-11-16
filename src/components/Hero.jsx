import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <div className="relative w-full h-screen" style={{ height: '1080px' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[8rem] leading-none font-semibold tracking-tight text-white select-none">
          Portofolio
        </h1>
        <div className="absolute bottom-10 right-10 text-white/80 font-medium tracking-widest text-3xl">
          2025
        </div>
      </div>
    </div>
  )
}
