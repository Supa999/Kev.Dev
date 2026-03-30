import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-5 w-full flex flex-col items-center justify-between gap-5">
      <h1 className="text-primary-color text-6xl font-extrabold tracking-tighter">Kev.Dev</h1>
      <p className="text-stone-500 w-3/4 text-center">&copy;{new Date().getFullYear()} Kev.Dev. Fulfilling your technical needs. High-performance software through intentional design</p>
      <div>
        
      </div>
    </footer>
  )
}
