import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { getFeaturedProjects, tr } from "@/data/projects";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function FeaturedProjects() {
  const { lang } = useLanguage();
  const t = content[lang].ui.projectsSection;
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <AnimatedLine className="mb-16 md:mb-24" />
      <SectionHeader
        number={t.number}
        label={t.label}
        title={t.title}
        description={t.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.08}>
            <Link to={`/projects/${project.id}`} className="group block">
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src={project.image}
                  alt={tr(project, "name", lang)}
                  className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-3 left-3 right-3 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="technical text-white bg-black/50 backdrop-blur-sm px-2.5 py-1">
                    {tr(project, "assetType", lang)}
                  </span>
                  <span className="technical text-white bg-black/50 backdrop-blur-sm px-2.5 py-1">
                    {project.area} {tr(project, "areaUnit", lang)}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="technical text-sage">{project.countryCode}</span>
                    <span className="technical text-muted-foreground">
                      — {tr(project, "location", lang).split(",")[0]}
                    </span>
                  </div>
                  <h3 className="font-bold tracking-tight text-base md:text-lg leading-tight">
                    {tr(project, "name", lang)}
                  </h3>
                  {project.units && (
                    <p className="technical text-muted-foreground mt-2">
                      {project.units} {tr(project, "unitsLabel", lang)}
                    </p>
                  )}
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-muted-foreground group-hover:text-sage group-hover:rotate-45 transition-all duration-500 flex-shrink-0 mt-1"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-12">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 text-sm font-medium border-b border-foreground pb-1 hover:border-sage hover:text-sage transition-colors"
        >
          {t.viewAll}
          <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}