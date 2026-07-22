import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import PartnerBar from "@/components/home/PartnerBar";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("no-scrollbar");
    return () => document.documentElement.classList.remove("no-scrollbar");
  }, []);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <FeaturedProjects />
      <PartnerBar />
      <ClosingCTA />
    </>
  );
}
