import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import DefaultLayout from "../layouts/DefaultLayout";

import HomeHeroSection from "../components/home/HomeHeroSection";
import HomePhilosophySection from "../components/home/HomePhilosophySection";
import HomeBusinessesSection from "../components/home/HomeBusinessesSection";
import HomeNavigator from "../components/_partials/Navigator";
import { useState } from "react";

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  return (
    <DefaultLayout>
      <>
        <div className="flex min-h-screen w-screen justify-between items-center">
          <div className="h--screen bg-black/20 w-screen">
            <Carousel
              autoPlay
              swipeable
              dynamicHeight
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              selectedItem={current}
              onChange={(e) => console.log(e)}
            >
              <HomeHeroSection />
              <HomePhilosophySection />
              <HomeBusinessesSection />
            </Carousel>
          </div>

          <HomeNavigator id="home" current={current} setCurrent={setCurrent} />
        </div>
      </>
    </DefaultLayout>
  );
}
