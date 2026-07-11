import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function Layout() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}