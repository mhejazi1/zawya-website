import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesOverview() {
  const { lang } = useLanguage();
  const t = content[lang];
  const s = t.ui.servicesSection;

  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <AnimatedLine className="mb-16 md:mb-24" />
      <SectionHeader
        number={s.number}
        label={s.label}
        title={s.title}
        description={s.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-3 gap-px bg-border">
        {t.services.map((service, i) => {
          const isGreen = i % 2 !== 0;
          return (
            <Reveal key={service.name} delay={i * 0.05}>
              <div className={`${isGreen ? "bg-sage text-white" : "bg-background"} p-8 md:p-10 h-full group transition-colors duration-500`}>
                <div className="flex items-start justify-between mb-6">
                  <span className={`technical ${isGreen ? "text-white/50" : "text-sage"}`}>{service.number}</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className={`${isGreen ? "text-white/50" : "text-muted-foreground"} group-hover:rotate-45 transition-all duration-500`}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{service.name}</h3>
                <p className={`text-sm leading-relaxed ${isGreen ? "text-white/60" : "text-muted-foreground"}`}>{service.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-12">
        <Link
          to="/services"
          className="group inline-flex items-center gap-3 text-sm font-medium border-b border-foreground pb-1 hover:border-sage hover:text-sage transition-colors"
        >
          {s.viewAll}
          <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}