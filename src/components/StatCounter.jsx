import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatCounter({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isNumeric = /^\d+$/.test(value);
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    let raf;
    const duration = 1500;
    const start = Date.now();
    const animate = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        {isNumeric ? count : value}
      </div>
      <div className="technical text-muted-foreground mt-3">{label}</div>
    </motion.div>
  );
}