import { motion } from "framer-motion";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function AnimatedPanel() {
  const { lang } = useLanguage();
  const tagline = content[lang].company.tagline;

  return (
    <div className="relative bg-charcoal h-full min-h-[420px] overflow-hidden flex items-center justify-center p-10 md:p-16">
      {/* Floating circles */}
      <motion.div
        className="absolute w-72 h-72 rounded-full border border-sage/15"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: "-5%", left: "-5%" }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full border border-sage/10"
        animate={{ scale: [1.1, 1, 1.1], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "5%", right: "5%" }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-sage/5 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "25%", right: "15%" }}
      />

      {/* Animated line */}
      <motion.div
        className="absolute h-px bg-sage/30 origin-left"
        style={{ width: "50%", top: "18%", left: "25%" }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-sage/50"
          animate={{ y: [0, -50, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
          style={{ left: `${15 + i * 14}%`, bottom: "8%" }}
        />
      ))}

      {/* Tagline */}
      <div className="relative z-10 text-center max-w-lg w-full">
        <motion.div
          className="h-px w-12 bg-sage mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl font-light text-white/90 whitespace-pre-line leading-snug tracking-tight"
        >
          {tagline}
        </motion.p>
        <motion.div
          className="h-px w-12 bg-sage mx-auto mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </div>
  );
}