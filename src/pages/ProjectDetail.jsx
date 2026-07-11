import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getProjectById, getNextProject } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="pt-32 px-6 md:px-10 lg:px-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="technical text-muted-foreground mb-4">404 — Project Not Found</p>
          <Link
            to="/projects"
            className="text-lg font-bold border-b border-foreground pb-1 hover:border-sage hover:text-sage transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const nextProject = getNextProject(id);

  return (
    <div className="pt-20">
      {/* Back link */}
      <div className="px-6 md:px-10 lg:px-16 py-6">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 technical text-muted-foreground hover:text-sage transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[55vh] md:h-[75vh] min-h-[400px] overflow-hidden bg-charcoal">
        <motion.img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-end px-6 md:px-10 lg:px-16 pb-12 md:pb-20">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="technical text-white/60">{project.countryCode}</span>
              <div className="w-8 h-px bg-white/30" />
              <span className="technical text-white/60">{project.assetType}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95] text-balance"
            >
              {project.name}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content with sticky sidebar */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Sticky sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div>
                <span className="technical text-sage block mb-4">Project DNA</span>
                <div className="space-y-0">
                  <div className="flex justify-between border-b border-border py-3">
                    <span className="technical text-muted-foreground">Asset Type</span>
                    <span className="text-sm font-medium text-right">{project.assetType}</span>
                  </div>
                  <div className="flex justify-between border-b border-border py-3">
                    <span className="technical text-muted-foreground">Location</span>
                    <span className="text-sm font-medium text-right">{project.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-border py-3">
                    <span className="technical text-muted-foreground">Area</span>
                    <span className="text-sm font-medium text-right">
                      {project.area} {project.areaUnit}
                    </span>
                  </div>
                  {project.units && (
                    <div className="flex justify-between border-b border-border py-3">
                      <span className="technical text-muted-foreground">{project.unitsLabel}</span>
                      <span className="text-sm font-medium text-right">{project.units}</span>
                    </div>
                  )}
                  {project.partner && (
                    <div className="flex justify-between border-b border-border py-3">
                      <span className="technical text-muted-foreground">Partner</span>
                      <span className="text-sm font-medium text-right">{project.partner}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-border py-3">
                    <span className="technical text-muted-foreground">Coordinates</span>
                    <span className="text-xs font-mono text-right">{project.coordinates}</span>
                  </div>
                </div>
              </div>

              {project.scopeOfWork && (
                <div>
                  <span className="technical text-sage block mb-4">Scope of Work</span>
                  <ul className="space-y-2.5">
                    {project.scopeOfWork.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2.5"
                      >
                        <span className="text-sage mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-12 md:mb-16">
                {project.description}
              </p>
            </Reveal>

            {/* Gallery */}
            {project.gallery && (
              <div className="space-y-6 md:space-y-10">
                {project.gallery.map((img, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="overflow-hidden bg-muted">
                      <img
                        src={img}
                        alt={`${project.name} — ${i + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Quote */}
            <Reveal>
              <div className="my-16 md:my-24 py-8 border-y border-border">
                <blockquote className="text-xl md:text-3xl font-bold tracking-tight display-serif text-balance leading-[1.2]">
                  &ldquo;We do not build for today. We build for the generations who will inherit our
                  work.&rdquo;
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-border">
        <Link
          to={`/projects/${nextProject.id}`}
          className="group block px-6 md:px-10 lg:px-16 py-16 md:py-24 hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-center justify-between gap-8">
            <div>
              <span className="technical text-muted-foreground block mb-3">Next Project</span>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-sage transition-colors">
                {nextProject.name}
              </h3>
            </div>
            <ArrowRight
              size={32}
              strokeWidth={1.5}
              className="text-muted-foreground group-hover:text-sage group-hover:translate-x-4 transition-all duration-500 flex-shrink-0"
            />
          </div>
        </Link>
      </section>
    </div>
  );
}