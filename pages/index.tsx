import DefaultLayout from "../layouts/DefaultLayout";
import TopNavigationBar from "../components/_partials/TopNavigationBar";

import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeServicesSection from "../components/home/HomeServicesSection";
import HomePhilosophySection from "../components/home/HomePhilosophySection";
import HomeBusinessesSection from "../components/home/HomeBusinessesSection";

export default function HomePage() {
  return (
    <DefaultLayout>
      <>
        <TopNavigationBar />
        <HomeHeroSection />
        <HomePhilosophySection />
        <HomeBusinessesSection />
        <HomeServicesSection />
      </>
    </DefaultLayout>
  );
}
