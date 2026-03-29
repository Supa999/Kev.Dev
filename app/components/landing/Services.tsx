import React, { SVGProps } from "react";
import { Globe, Database, Code, ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from 'next/link'
import ClawSVG from "../svg/ClawSVG";
import DatabaseSVG from "../svg/DatabaseSVG";
import GlobeSVG from "../svg/GlobeSVG";

type ServicesType = {
  title: string;
  desc: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
};

const services: ServicesType[] = [
  {
    title: "Website Builder",
    desc: "End-to-end development of high-performance, responsive web interfaces using modern frameworks. Focused on conversion and accessibility",
    icon: Globe,
    href: "",
  },
  {
    title: "Python Automation",
    desc: "Streamlining complex operations through custom scripting, data scraping, and API integrations. Turning manual toil into automated efficiency",
    icon: Code,
    href: "",
  },
  {
    title: "Java Backend",
    desc: "Enterprise-grade server-side architecture using Spring Boot. Sca;able, secure, and resilient systems for mission-critical applications.",
    icon: Database,
    href: "",
  },
];

function renderServices() {
  return services.map((service) => {
    const IconComponent = service.icon;
    return (
      <div key={service.title} className="space-y-3">
        <div className="bg-neutral-800 w-fit p-3">
          <IconComponent className="size-6 text-secondary-color" />
        </div>
        <h3 className="text-white text-2xl font-bold tracking-tight">{service.title}</h3>
        <p className="text-white/70 text-lg tracking-wide leading-8">{service.desc}</p>
        <div className="flex gap-2 items-center">
          <Link href={service.href} className="uppercase text-secondary-color tracking-widest font-extrabold">Inquire Now</Link>
          <ArrowRight className='size-6 text-secondary-color' strokeWidth={2.5}/>
        </div>
      </div>
    );
  });
}

export default function Services() {
  return (
    <section className="min-h-screen bg-neutral-900 px-8 py-12">
      <div className="space-y-20">
        <div className="space-y-2">
          <TextAnimate
            animation="slideRight"
            as="p"
            className="text-secondary-color text-sm tracking-[0.3em]"
            duration={0.7}
          >
            Core Competencies
          </TextAnimate>
          <TextAnimate
            animation="slideRight"
            as="h2"
            className="text-white text-5xl font-bold tracking-tighter"
            duration={0.7}
          >
            Specialized Services
          </TextAnimate>
        </div>
        {renderServices()}
      </div>
    </section>
  );
}
