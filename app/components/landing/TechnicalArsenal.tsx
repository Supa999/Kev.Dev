import { ComponentType, SVGProps } from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { Code, Coffee, Database } from "lucide-react";

type TechnicalArsenalType = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const arsenal: TechnicalArsenalType[] = [
  { name: "Python", icon: Code },
  { name: "Java", icon: Coffee },
  { name: "Databases", icon: Database },
];

function renderArsenal() {
  return arsenal.map((arsenalItem) => {
    const IconComponent = arsenalItem.icon;
    return (
      <div
        key={arsenalItem.name}
        className="bg-neutral-800 p-12 w-46 h-46 flex flex-col items-center justify-center"
      >
        <IconComponent className="size-12 text-secondary-color" />
        <p className="text-secondary-color text-2xl">{arsenalItem.name}</p>
      </div>
    );
  });
}

export default function TechnicalArsenal() {
  return (
    <section className="bg-neutral-900 min-h-screen px-8 py-12">
      <div className="space-y-20">
        <div className="space-y-2">
          <TextAnimate
            animation="slideRight"
            as="p"
            className="text-secondary-color text-sm tracking-[0.3em]"
            duration={0.7}
          >
            Infrastructure
          </TextAnimate>
          <TextAnimate
            animation="slideRight"
            as="h2"
            className="text-white text-5xl font-bold tracking-tighter"
            duration={0.7}
          >
            Technical Arsenal
          </TextAnimate>
        </div>
        <div className="flex flex-col items-center justify-center gap-22">{renderArsenal()}</div>
      </div>
    </section>
  );
}
