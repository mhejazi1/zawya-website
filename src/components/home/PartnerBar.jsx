import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function PartnerBar() {
  const { lang } = useLanguage();
  const t = content[lang];
  const partners = t.partners;

  const rowSize = Math.ceil(partners.length / 3);
  const rows = [
    partners.slice(0, rowSize),
    partners.slice(rowSize, rowSize * 2),
    partners.slice(rowSize * 2),
  ];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 mb-10 md:mb-14">
        <span className="technical text-muted-foreground block text-center">
          {t.ui.partners.label}
        </span>
      </div>
      <div className="space-y-4 md:space-y-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <div className={`flex items-center ${rowIndex % 2 === 0 ? "marquee-track" : "marquee-track-reverse"}`}>
              {[...Array(4)].flatMap((_, dup) =>
                row.map((partner, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="text-lg md:text-2xl font-bold tracking-tight text-foreground/40 whitespace-nowrap flex-shrink-0 px-8 md:px-12"
                  >
                    {partner}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}