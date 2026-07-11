import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang];
  const s = t.ui.servicesPage;

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <SectionHeader
          number={s.number}
          label={s.label}
          title={s.title}
          description={s.description}
        />
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
        <AnimatedLine className="mb-12 md:mb-16" />
        <div className="space-y-px bg-border">
          {t.services.map((service, i) => (
            <Reveal key={service.name}>
              <div className="bg-background p-8 md:p-12 group hover:bg-muted/30 transition-colors duration-500">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  <div className="md:col-span-1">
                    <span className="technical text-sage">{service.number}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {service.subServices.map((sub, j) => (
                        <li
                          key={j}
                          className="text-sm text-foreground/70 flex items-start gap-2 py-1"
                        >
                          <span className="text-sage mt-0.5 flex-shrink-0">—</span>
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage transition-colors duration-300"
          >
            {s.cta}
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}