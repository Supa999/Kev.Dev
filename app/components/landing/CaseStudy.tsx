import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { div } from "motion/react-client";

type CaseStudyType = {
  title: string;
  desc: string;
  techStack: string[];
  img: StaticImageData | null;
  href: string;
};

const caseStudies: CaseStudyType[] = [
  {
    title: "Website Lead Generator",
    desc: "Python script which searches google maps for local businesses with no website.",
    techStack: ["Python", "Selenium"],
    img: null,
    href: "",
  },
  {
    title: "Business Landing Pages",
    desc: "Multiple landing pages and websites built for businesses to improve their online presence and take some of the manual work off of their hands",
    techStack: ["Next.js", "FastAPI"],
    img: null,
    href: "",
  },
];

function renderCaseStudies() {
  return caseStudies.map((caseStudy) => {
    return (
      <div key={caseStudy.title} className="bg-neutral-900 p-4">
        {
          //<Image src={caseStudy.img} alt=""/>
        }
        <div className="flex flex-col items-start justify-center gap-5">
          <div className="flex items-center gap-2">
            {caseStudy.techStack.map((tech) => {
              return (
                <div
                  key={tech}
                  className="text-primary-color bg-neutral-800 rounded-2xl py-1.5 px-3 font-bold tracking-wide text-lg"
                >
                  {tech}
                </div>
              );
            })}
          </div>
          <h3 className="text-white text-4xl font-bold tracking-tight">
            {caseStudy.title}
          </h3>
          <p className="text-white/70 text-lg tracking-wide leading-8">
            {caseStudy.desc}
          </p>
          <Link
            href={caseStudy.href}
            className="w-full bg-neutral-800 text-white font-bold tracking-wide text-center text-lg py-1.5"
          >
            View Project Details
          </Link>
        </div>
      </div>
    );
  });
}

export default function CaseStudy() {
  return (
    <section className="bg-black min-h-screen px-8 py-12 border-y-2 border-black">
      <div className="space-y-20">
        <div className="space-y-2">
          <TextAnimate
            animation="slideRight"
            as="p"
            className="text-primary-color text-sm tracking-[0.3em]"
            duration={0.7}
          >
            Selected Works
          </TextAnimate>
          <TextAnimate
            animation="slideRight"
            as="h2"
            className="text-white text-5xl font-bold tracking-tighter"
            duration={0.7}
          >
            Case Studies
          </TextAnimate>
        </div>
        {renderCaseStudies()}
      </div>
    </section>
  );
}
