import { motion } from "framer-motion";

export default function AnimatedLine({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`h-px bg-sage/20 origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}