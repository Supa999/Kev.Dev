import React from 'react'

export default function CTAButtons() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-5">
      <button className="w-full bg-linear-to-r from-violet-300 to-violet-600 to-50% font-bold text-2xl rounded-xl py-4 shadow-[0_-5px_40px_5px_#6366f1]">Start a Project</button>
      <button className="w-full rounded-xl py-4 bg-neutral-900 text-white text-2xl font-bold">View Case Studies</button>
    </section>
  )
}
