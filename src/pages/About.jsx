import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { company } from "@/data/siteContent";

const ABOUT_HERO = "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/26e164f3d_generated_image.png";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] md:h-[70vh] min-h-[400px] overflow-hidden bg-charcoal">
        <motion.img
          src={ABOUT_HERO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-end px-6 md:px-10 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="technical text-white/50 block mb-5"
            >
              About Zawya
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95] text-balance"
            >
              Building the future of the GCC, one landmark at a time.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <span className="technical text-sage">01 / Our Story</span>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              {company.aboutText.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`text-lg md:text-xl leading-relaxed text-foreground/80 mb-6 last:mb-0 ${
                    i === 0 ? "text-foreground font-medium" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-muted/30">
        <AnimatedLine className="mb-16 md:mb-20" />
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="technical text-sage block mb-12 md:mb-16 text-center">02 / Philosophy</span>
          </Reveal>
          {company.philosophy.map((quote, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12 md:mb-16 last:mb-0 text-balance display-serif leading-[1.15]">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Partnership Structure */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16">
        <AnimatedLine className="mb-16 md:mb-20" />
        <SectionHeader
          number="03"
          label="Structure"
          title="A dual-entity partnership across KSA and UAE"
          description="Two entities, one vision—combining development expertise with investment and fund management capabilities."
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sage/20 -translate-x-1/2" />
          {company.entities.map((entity, i) => (
            <Reveal key={entity.name} delay={i * 0.1}>
              <div className={`md:px-12 ${i === 0 ? "md:text-right" : ""}`}>
                <span className="technical text-sage block mb-4">{entity.role}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{entity.name}</h3>
                <p className="technical text-muted-foreground mb-6">{entity.location}</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md inline-block">
                  {entity.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Hospitality Experience */}
      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-charcoal text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="technical text-white/40">04 / Hospitality</span>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-balance">
                Hospitality expertise built on world-class partnerships.
              </h2>
              {company.hospitalityExperience.split("\n\n").map((para, i) => (
                <p key={i} className="text-base md:text-lg text-white/50 leading-relaxed mb-6 last:mb-0">
                  {para}
                </p>
              ))}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 mt-4 text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Partner With Us
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}