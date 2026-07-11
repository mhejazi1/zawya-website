import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <SectionHeader
          number="01"
          label="Portfolio"
          title="Ten flagship developments. Over 1.3 million square meters."
          description="From five-star hotels to large-scale infrastructure, our portfolio represents the breadth and depth of our development expertise across the GCC and East Africa."
        />
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
        <AnimatedLine className="mb-12 md:mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 gap-y-10">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}