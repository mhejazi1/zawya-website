import Reveal from "@/components/Reveal";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function PartnerBar() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="technical text-white/30 block mb-10 text-center">
            {t.ui.partners.label}
          </span>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-px bg-white/10">
          {t.partners.map((partner, i) => (
            <Reveal key={partner} delay={i * 0.05}>
              <div className="bg-charcoal flex items-center justify-center py-8 px-8 md:px-12 min-w-[180px] md:min-w-[220px]">
                <span className="text-white/40 text-sm md:text-base font-medium tracking-wide text-center">
                  {partner}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}