import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import PartnerBar from "@/components/home/PartnerBar";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function Home() {
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
