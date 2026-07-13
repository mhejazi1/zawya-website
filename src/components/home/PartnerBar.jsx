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
  { name: "DP World", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logotype_de_DP_World.png" },
  { name: "Crowne Plaza", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Crowne_Plaza_logo.svg" },
  { name: "Holiday Inn", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Holiday_Inn_Logo.svg" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-10 md:gap-y-14 items-center justify-items-center">
          {PARTNER_LOGOS.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center h-16 md:h-20 w-full px-2">
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                className="h-full w-auto max-w-full object-contain transition-opacity duration-300"
                style={{ filter: "brightness(0)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}