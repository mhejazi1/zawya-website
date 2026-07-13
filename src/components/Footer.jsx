import { Link } from "react-router-dom";
import { content, logoUrl } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

const DARK_GREEN = "#1a3d2e";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer style={{ backgroundColor: "#f8f8f6" }}>
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img src={logoUrl} alt="Zawya" className="h-24 w-24 object-contain" />
            </Link>
            <p style={{ color: DARK_GREEN }} className="text-sm leading-relaxed max-w-sm opacity-70">
              {t.company.tagline}
            </p>
            <div className="mt-8 flex gap-3">
              {t.contactInfo.entities.map((entity) => (
                <span key={entity.name} style={{ color: DARK_GREEN, borderColor: DARK_GREEN + "33" }}
                  className="technical border px-3 py-1 text-xs opacity-60">
                  {entity.address.split(",")[0]}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <span style={{ color: DARK_GREEN }} className="technical block mb-5 opacity-50">{t.ui.footer.navigate}</span>
            <ul className="space-y-3">
              {t.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} style={{ color: DARK_GREEN }}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span style={{ color: DARK_GREEN }} className="technical block mb-5 opacity-50">{t.ui.footer.offices}</span>
            {t.contactInfo.entities.map((entity) => (
              <div key={entity.name} className="mb-4">
                <p style={{ color: DARK_GREEN }} className="text-sm font-medium opacity-80">{entity.name}</p>
                <p style={{ color: DARK_GREEN }} className="text-xs mt-0.5 opacity-50">{entity.address}</p>
              </div>
            ))}
            <a href={`mailto:${t.contactInfo.email}`} style={{ color: DARK_GREEN }}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity block mt-4">
              {t.contactInfo.email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4"
          style={{ borderTopColor: DARK_GREEN + "22", borderTopWidth: 1, borderTopStyle: "solid" }}>
          <span style={{ color: DARK_GREEN }} className="technical opacity-40 text-xs">
            {t.ui.footer.copyright}
          </span>
          <span style={{ color: DARK_GREEN }} className="technical opacity-40 text-xs">
            {t.ui.footer.regions}
          </span>
        </div>
      </div>
    </footer>
  );
}