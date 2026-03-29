import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

export default function CTASection() {
  return (
    <section className="bg-black border-y-2 border-black min-h-screen px-8 py-12">
      <div className="space-y-20">
        <div className="space-y-2">
          <TextAnimate
            animation="slideRight"
            as="p"
            className="text-primary-color text-sm tracking-[0.3em]"
            duration={0.7}
          >
            Lets Collaborate
          </TextAnimate>
          <TextAnimate
            animation="slideRight"
            as="h2"
            className="text-white text-5xl font-bold tracking-tighter"
            duration={0.7}
          >
            Ready to start your next technical project?
          </TextAnimate>
          <TextAnimate animation="slideRight" as='p' className='text-white/70 text-lg tracking-wide leading-8 mt-10'>
            Whether you need a full-scale web application or custom automation logic, I&apos;m here to build it. Reach out for a consultation.
          </TextAnimate>
        </div>
      </div>
    </section>
  );
}
