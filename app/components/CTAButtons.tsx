'use client'
import React from 'react'
import { motion, Variants, scroll, animate} from 'motion/react'


function handleScroll() {
  const element = document.getElementById('cta-section')
  const header = document.getElementById('header')
  if(element && header) {
    animate(window.scrollY, element.offsetTop - header.offsetHeight, {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
      onUpdate: (v) => window.scrollTo(0, v)
    })
  }
}

const btnVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70
    }
  }
}

export default function CTAButtons() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-5">
      <motion.button variants={btnVariants} initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.8}} className="w-full bg-linear-to-r from-violet-300 to-violet-600 to-50% font-bold text-2xl rounded-xl py-4 shadow-[0_-5px_40px_5px_#6366f1]" onClick={() => handleScroll()}>Start a Project</motion.button>
      <motion.button variants={btnVariants} initial='hidden' whileInView='visible' viewport={{once: false, amount: 0.8}} className="w-full rounded-xl py-4 bg-neutral-900 text-white text-2xl font-bold">View Case Studies</motion.button>
    </section>
  )
}
