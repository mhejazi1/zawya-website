import { Link } from "react-router-dom";
import { content, logoUrl } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="bg-charcoal text-white">
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img src={logoUrl} alt="Zawya" className="h-8 w-8 object-contain" />
              
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              {t.company.tagline}
            </p>
            <div className="mt-8 flex gap-3">
              {t.contactInfo.entities.map((entity) =>
              <span key={entity.name} className="technical text-white/30 border border-white/10 px-3 py-1">
                  {entity.address.split(",")[0]}
                </span>
              )}
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="technical text-white/30 block mb-5">{t.ui.footer.navigate}</span>
            <ul className="space-y-3">
              {t.navLinks.map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="technical text-white/30 block mb-5">{t.ui.footer.offices}</span>
            {t.contactInfo.entities.map((entity) =>
            <div key={entity.name} className="mb-4">
                <p className="text-white/70 text-sm">{entity.name}</p>
                <p className="text-white/30 text-xs mt-0.5">{entity.address}</p>
              </div>
            )}
            <a href={`mailto:${t.contactInfo.email}`} className="text-white/60 hover:text-white transition-colors text-sm block mt-4">
              {t.contactInfo.email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <span className="technical text-white/20">
            {t.ui.footer.copyright}
          </span>
          <span className="technical text-white/20">
            {t.ui.footer.regions}
          </span>
        </div>
      </div>
    </footer>);

}