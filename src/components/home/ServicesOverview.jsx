import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { services } from "@/data/siteContent";

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <AnimatedLine className="mb-16 md:mb-24" />
      <SectionHeader
        number="02"
        label="What We Do"
        title="Six pillars of integrated real estate expertise"
        description="From land identification to facility management, we cover the full lifecycle of real estate development."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((service, i) => (
          <Reveal key={service.name} delay={i * 0.05}>
            <div className="bg-background p-8 md:p-10 h-full group hover:bg-muted/40 transition-colors duration-500">
              <div className="flex items-start justify-between mb-6">
                <span className="technical text-sage">{service.number}</span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-muted-foreground group-hover:text-sage group-hover:rotate-45 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{service.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12">
        <Link
          to="/services"
          className="group inline-flex items-center gap-3 text-sm font-medium border-b border-foreground pb-1 hover:border-sage hover:text-sage transition-colors"
        >
          View All Services
          <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform" />
        </Link>
      </div>
    </section>
  );
}