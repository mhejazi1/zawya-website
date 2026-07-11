import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedLine from "@/components/AnimatedLine";

export default function ClosingCTA() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 lg:px-16 bg-background">
      <AnimatedLine className="mb-16 md:mb-24" />
      <Reveal>
        <div className="text-center max-w-4xl mx-auto">
          <span className="technical text-sage block mb-6">Let's Build Together</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-8">
            Partner with a team that delivers predictable, long-term results.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're an investor, landowner, or operator, we bring the expertise to transform
            your vision into a landmark.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage transition-colors duration-300"
          >
            Get in Touch
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}