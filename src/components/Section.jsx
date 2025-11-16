import React from 'react'

export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      style={{ minHeight: '1080px' }}
    >
      <div className="absolute inset-0 bg-black" />
      {children}
    </section>
  )
}
