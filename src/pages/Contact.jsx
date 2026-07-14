import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedLine from "@/components/AnimatedLine";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const CONTACT_HERO = "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/10490ecb2_Riyadh_Skyline.jpg";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang];
  const ui = t.ui.contact;
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    subject: ui.subjects[0],
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] min-h-[300px] overflow-hidden bg-charcoal">
        <motion.img
          src={CONTACT_HERO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-end px-6 md:px-10 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="technical text-white/60 block mb-5"
            >
              {ui.label}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[0.95] text-balance"
            >
              {ui.title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
            {ui.description}
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
        <AnimatedLine className="mb-12 md:mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-8">
            {submitted ?
            <Reveal>
                <div className="border border-sage p-12 md:p-16 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{ui.thankYou}</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">{ui.thankYouMsg}</p>
                </div>
              </Reveal> :

            <form onSubmit={handleSubmit} className="space-y-8 hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="technical text-muted-foreground block mb-2">{ui.name}</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="technical text-muted-foreground block mb-2">{ui.company}</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="technical text-muted-foreground block mb-2">{ui.email}</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange}
                className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="technical text-muted-foreground block mb-2">{ui.subject}</label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors appearance-none cursor-pointer">
                    {ui.subjects.map((subject) =>
                  <option key={subject}>{subject}</option>
                  )}
                  </select>
                </div>
                <div>
                  <label className="technical text-muted-foreground block mb-2">{ui.message}</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                className="w-full bg-transparent border-b border-border py-3 text-base focus:border-sage focus:outline-none transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage transition-colors duration-300 disabled:opacity-50">
                  {loading ? ui.sending : ui.send}
                  {!loading && <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />}
                </button>
              </form>
            }
          </div>

          <div className="lg:col-span-4 space-y-10">
            <Reveal>
              <div>
                <span className="technical text-sage block mb-5">{ui.offices}</span>
                {t.contactInfo.entities.map((entity) =>
                <div key={entity.name} className="mb-5">
                    <p className="font-medium text-sm">{entity.name}</p>
                    <p className="text-muted-foreground text-sm mt-1 whitespace-pre-line">{entity.address}</p>
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="technical text-sage block mb-5">{ui.emailLabel}</span>
                <a href={`mailto:${t.contactInfo.email}`}
                className="text-sm hover:text-sage transition-colors border-b border-border pb-1">
                  {t.contactInfo.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>);

}