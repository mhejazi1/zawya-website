import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const PARTNER_LOGOS = [
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/7b82150c8_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/295bb64c7_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/ebe141fd7_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/7546c76cc_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/97340b04e_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/4ca91fc72_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/e4e38ec55_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/be1ca6880_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/039af8a88_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/30a3bf433_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/0b357bc97_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/0b16d4f58_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/bd2570b86_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/45c738780_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/b0b4284b5_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/426ffff84_image.png",
  "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/fdcb6808a_image.png",
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-8 md:gap-y-10 items-center justify-items-center">
          {PARTNER_LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-16 md:h-20 w-full">
              <img
                src={logo}
                alt="Industry Partner"
                className="max-h-full max-w-full object-contain grayscale"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}