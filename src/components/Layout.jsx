import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function Layout() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
