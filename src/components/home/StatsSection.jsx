import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import WaveRibbon from "@/components/home/WaveRibbon";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function StatsSection() {
  const { lang } = useLanguage();
  const stats = content[lang].stats;

  return (
    <section className="bg-[#52665B]">
      <WaveRibbon />
      <div className="py-20 md:py-32 px-6 md:px-10 lg:px-16">
        <div className="h-px w-full bg-white/20 mb-16 md:mb-24" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <StatCounter value={stat.value} label={stat.label} delay={i * 0.1} light />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}