import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const PARTNERS_IMG = "https://media.base44.com/images/public/6a529e10d961dab7e40fd05d/660961de7_logos.png";

export default function PartnerBar() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <span className="technical text-muted-foreground block text-center mb-10 md:mb-14">
          {t.ui.partners.label}
        </span>
        <div className="flex justify-center">
          <img
            src={PARTNERS_IMG}
            alt="Industry Partners"
            className="w-full h-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>
    </section>
  );
}