import React from 'react'
import CTAButtons from '../CTAButtons'
import { TextAnimate } from '@/components/ui/text-animate'

export default function Hero() {
  return (
    <section className="flex flex-col items-start justify-center gap-8 min-h-screen bg-black px-8 border-b-2 border-black">
      <div className="flex items-center gap-2 bg-neutral-700 px-3 py-0.5 rounded-2xl">
        <div className="w-2 h-2 rounded-2xl bg-secondary-color" />
      <p className="text-sm text-secondary-color">Open for freelance collaborations</p>
      </div>
      <h2 className="text-white text-5xl font-bold tracking-tight leading-14">
        Custom <span className="italic text-primary-color">Web Experiences</span> Built with <span className="italic text-white text-shadow-[2px_2px_20px_#6366f1]">Modern Engineering</span> 
      </h2>
      <TextAnimate animation='slideRight' as='p' duration={0.8} className='text-lg text-white/70 leading-relaxed'>Computer Science student blending academic rigor with freelance agility. Building high-performance, SEO-optimized websites designed to help your business scale while mastering the intersection of code and commerce.</TextAnimate>
      <CTAButtons />
    </section>
  )
}
