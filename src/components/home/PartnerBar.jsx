import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const PARTNER_LOGOS = [
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/db982fd9a_Picture18.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/d8260d9de_Picture19.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/00abd5014_Picture20.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/c7dca067e_Picture21.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/d6a751cad_Picture22.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/ecdd66448_Picture23.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/ee06f129b_Picture24.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/851a2a2c1_Picture25.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/67dcc6b5d_Picture26.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/a368399da_Picture27.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/8259a4371_Picture28.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/5fd208da5_Picture29.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/308a1469d_Picture30.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/70547dcec_Picture31.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/3cbe61f47_Picture32.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/8e1a6288a_Picture33.png",
];

export default function PartnerBar() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <span className="technical text-muted-foreground block text-center mb-10 md:mb-14">
          {t.ui.partners.label}
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-10 items-center justify-items-center">
          {PARTNER_LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-10 md:h-20 w-full">
              <img
                src={logo}
                alt="Industry Partner"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}