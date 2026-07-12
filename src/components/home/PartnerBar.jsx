import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const PARTNER_LOGOS = [
  { name: "Dusit Hotels & Resorts", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/c45d7b9e2_image42.png" },
  { name: "Mulkia Investment", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/ff8a7847c_image36.png" },
  { name: "Royal Commission for Makkah", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/acd30d101_image34.png" },
  { name: "ALL — Accor Live Limitless", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/6cb9ae93c_image41.png" },
  { name: "Value Capital", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/7ed540d9a_image43.png" },
  { name: "BSF Capital", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/0cd48e64a_image44.png" },
  { name: "Blominvest", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/b360f7e5d_image45.png" },
  { name: "FAAD Partners", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/f442ee0c5_image46.png" },
  { name: "IHG — InterContinental Hotels Group", logo: "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/bc736b0e0_image40.png" },
];

export default function PartnerBar() {
  const { lang } = useLanguage();
  const t = content[lang];
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10 px-6 md:px-10 lg:px-16">
        <span className="technical text-muted-foreground block text-center">
          {t.ui.partners.label}
        </span>
      </div>
      <div className="relative">
        <div className="flex marquee-track" dir="ltr">
          {logos.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12 min-w-[200px] md:min-w-[240px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}