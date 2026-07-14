import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const PARTNER_LOGOS = [
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/9d3ee1822_Picture1.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/4e1135ccf_Picture2.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/8245d1819_Picture3.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/13d90fb54_Picture4.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/5ae7c6a5d_Picture5.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/034541903_Picture6.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/7bd59c442_Picture7.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/c1262880b_Picture8.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/80f6cf22e_Picture9.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/6d8a9f2a2_Picture10.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/2166dc9c8_Picture11.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/bbf2bfbb1_Picture12.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/92c4a7c5c_Picture13.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/a9dfbd2fc_Picture15.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/dc1318500_Picture16.png",
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 md:gap-y-10 items-center justify-items-center">
          {PARTNER_LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-16 md:h-20 w-full">
              <img
                src={logo}
                alt="Industry Partner"
                className="max-h-full max-w-full object-contain grayscale"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}