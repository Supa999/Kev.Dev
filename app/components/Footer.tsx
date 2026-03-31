import {ComponentType, SVGProps} from 'react'
import GithubSVG from './svg/GithubSVG'
import InstagramSVG from './svg/InstagramSVG'
import LinkedInSVG from './svg/LinkedInSVG'
import Link from 'next/link'

type SocialsType = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  href: string
}

const socials: SocialsType[] = [
  {icon: GithubSVG, href: 'https://github.com/Supa999'},
  {icon: InstagramSVG, href: 'https://www.instagram.com/_manofsteele_/'},
  {icon: LinkedInSVG, href: 'http://linkedin.com/in/kevin-steele-7837112a1/'}
]

function renderSocials() {
  return socials.map((socialItem) => {
    const IconComponent = socialItem.icon
    return (
      <a href={socialItem.href} key={socialItem.href} target='_blank' rel='noopener noreferrer'>
        <IconComponent fill='currentColor' className="size-12 text-primary-color" />
      </a>
    )
  })
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-5 w-full flex flex-col items-center justify-between gap-10">
      <h1 className="text-primary-color text-6xl font-extrabold tracking-tighter">Kev.Dev</h1>
      <p className="text-stone-500 w-3/4 text-center">&copy;{new Date().getFullYear()} Kev.Dev. Fulfilling your technical needs. High-performance software through intentional design</p>
      <div className="flex gap-10">
        {renderSocials()}
      </div>
    </footer>
  )
}
