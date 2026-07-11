import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import AnimatedLine from "@/components/AnimatedLine";
import { stats } from "@/data/siteContent";

export default function StatsSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <AnimatedLine className="mb-16 md:mb-24" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <StatCounter value={stat.value} label={stat.label} delay={i * 0.1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}