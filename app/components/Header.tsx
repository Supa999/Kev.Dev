import React from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import Hamburger from './nav/Hamburger'

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-neutral-900 fixed top-0 w-full z-50">
      <TextAnimate animate="slideRight" as="h1" className='text-primary-color text-5xl font-extrabold tracking-tighter [-webkit-text-stroke:2px_#000000]'>
        Kev.Dev
      </TextAnimate>
      <Hamburger />
    </header>
  )
}
