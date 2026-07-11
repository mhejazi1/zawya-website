import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/7545a845b_generated_image.png";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1.12, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, -80]);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      </motion.div>

      <motion.div
        style={{ opacity, y }}
        className="relative h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-16 md:pb-24"
      >
        <div className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="technical text-white/50 block mb-6"
          >
            Real Estate Development & Advisory — KSA · UAE · East Africa
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight text-white leading-[0.95] text-balance"
          >
            Harmonizing Development Success with Design Excellence
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-3 bg-white text-charcoal px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage hover:text-white transition-colors duration-300"
            >
              Explore Our Projects
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors duration-300"
            >
              About Zawya
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 right-6 md:right-10 lg:right-16 flex flex-col items-center gap-3"
      >
        <span className="technical text-white/40 [writing-mode:vertical-rl] rotate-180">Scroll</span>
        <div className="w-px h-12 bg-white/30" />
      </motion.div>
    </section>
  );
}