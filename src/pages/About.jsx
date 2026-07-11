import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const ABOUT_HERO = "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/417e040fe_generated_image.png";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];
  const ui = t.ui.about;

  return (
    <div className="pt-20">
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
              {ui.heroLabel}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95] text-balance"
            >
              {ui.heroTitle}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <span className="technical text-sage">{ui.storyLabel}</span>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              {t.company.aboutText.split("\n\n").map((para, i) => (
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

      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-muted/30">
        <AnimatedLine className="mb-16 md:mb-20" />
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="technical text-sage block mb-12 md:mb-16 text-center">{ui.philosophyLabel}</span>
          </Reveal>
          {t.company.philosophy.map((quote, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12 md:mb-16 last:mb-0 text-balance display-serif leading-[1.15]">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16">
        <AnimatedLine className="mb-16 md:mb-20" />
        <SectionHeader
          number={ui.structureNumber}
          label={ui.structureLabel}
          title={ui.structureTitle}
          description={ui.structureDescription}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sage/20 -translate-x-1/2" />
          {t.company.entities.map((entity, i) => (
            <Reveal key={entity.name} delay={i * 0.1}>
              <div className={`md:px-12 ${i === 0 ? "md:text-right rtl:md:text-left" : ""}`}>
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

      <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-charcoal text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="technical text-white/40">{ui.hospitalityLabel}</span>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-balance">
                {ui.hospitalityTitle}
              </h2>
              {t.company.hospitalityExperience.split("\n\n").map((para, i) => (
                <p key={i} className="text-base md:text-lg text-white/50 leading-relaxed mb-6 last:mb-0">
                  {para}
                </p>
              ))}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 mt-4 text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                {ui.partnerLink}
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}