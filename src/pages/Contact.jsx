import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedLine from "@/components/AnimatedLine";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";
import AnimatedPanel from "@/components/contact/AnimatedPanel";

const CONTACT_HERO = "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/10490ecb2_Riyadh_Skyline.jpg";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang];
  const ui = t.ui.contact;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[340px] overflow-hidden bg-charcoal">
        <motion.img
          src={CONTACT_HERO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-px w-16 bg-sage mb-6 origin-left"
            />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="technical text-sage block mb-5"
            >
              {ui.label}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95] text-balance"
            >
              {ui.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 text-base md:text-lg text-white/50 max-w-xl leading-relaxed"
            >
              {ui.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <AnimatedLine className="mb-12 md:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Office info */}
          <div>
            <Reveal>
              <div className="bg-[#93A89C] p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin size={18} strokeWidth={1.5} className="text-foreground/70" />
                  <span className="technical text-foreground/60">{ui.offices}</span>
                </div>
                <div className="space-y-8">
                  {t.contactInfo.entities.map((entity) => (
                    <div key={entity.name} className="border-l-2 border-foreground/20 pl-5">
                      <p className="font-bold text-sm mb-2 text-foreground">{entity.name}</p>
                      <p className="text-foreground/60 text-sm mt-1 whitespace-pre-line leading-relaxed">{entity.address}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-foreground/15">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={16} strokeWidth={1.5} className="text-foreground/70" />
                    <span className="technical text-foreground/60">{ui.emailLabel}</span>
                  </div>
                  <a
                    href={`mailto:${t.contactInfo.email}`}
                    className="text-sm font-medium text-foreground hover:text-sage transition-colors border-b border-foreground/30 pb-1"
                  >
                    {t.contactInfo.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Animated visual */}
          <div>
            <AnimatedPanel />
          </div>
        </div>


      </section>
    </div>
  );
}