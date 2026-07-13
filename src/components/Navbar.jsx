import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { content, logoUrl } from "@/data/content";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${transparent ? "bg-transparent" : "bg-background/95 backdrop-blur-md border-b border-border"}`}>
        <div className="px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <img src={logoUrl} alt="Zawya" className="h-24 w-24 object-contain" />
          </Link>

          <div className="flex items-center gap-6">
            <button onClick={toggleLang}
              className={`flex items-center gap-2 transition-colors duration-500 ${transparent ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Toggle language">
              <Globe size={16} strokeWidth={1.5} />
              <span className="technical">{lang === "en" ? "العربية" : "English"}</span>
            </button>

            <button onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-3 transition-colors duration-500 ${transparent ? "text-white" : "text-foreground"}`}
              aria-label="Open menu">
              <span className="technical hidden sm:block">{t.ui.navbar.menu}</span>
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar menu — light background + dark green text */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ backgroundColor: "#f8f8f6" }}
            className="fixed inset-0 z-[300]">

            <AnimatePresence>
              {hoveredLink === t.ui.projectsSection?.label && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.08 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${projects[0].image})` }} />
              )}
            </AnimatePresence>

            <div className="relative h-full flex flex-col">
              <div className="px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logoUrl} alt="Zawya" className="h-24 w-24 object-contain" />
                </div>
                <button onClick={() => setMenuOpen(false)} className="flex items-center gap-3" style={{ color: "#1a3d2e" }} aria-label="Close menu">
                  <span className="technical">{t.ui.navbar.close}</span>
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16">
                {t.navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}>
                    <Link to={link.path}
                      className="group flex items-baseline gap-4 md:gap-6 py-2 md:py-3"
                      style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "#1a3d2e22" }}>
                      <span className="technical opacity-30" style={{ color: "#1a3d2e" }}>0{i + 1}</span>
                      <span className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight transition-colors duration-300"
                        style={{ color: "#1a3d2e" }}>
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row justify-between gap-4">
                <span className="technical max-w-md opacity-40" style={{ color: "#1a3d2e" }}>{t.company.tagline}</span>
                <span className="technical opacity-40" style={{ color: "#1a3d2e" }}>{t.ui.navbar.locations}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}