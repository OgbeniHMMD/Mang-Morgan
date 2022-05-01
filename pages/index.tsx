import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
import DefaultLayout from "../layouts/DefaultLayout";
import AboutPage from "./about";
import FooterSection from "../components/_partials/FooterSection";
import TopNavigationBar from "../components/_partials/TopNavigationBar";
import HomeNavigator from "../components/_partials/Navigator";

export default function HomePage() {
  return (
    <DefaultLayout>
      <>
        <TopNavigationBar />
        <HomeHeroSection />
        <HomePhilosophySection />
        <HomeBusinessesSection />
      </>
    </DefaultLayout>
  );
}

export function HomeHeroSection() {
  return (
    <section
      id="home"
      style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
      className="bg-no-repeat bg-fixed min-h-screen snap-start snap-always"
    >
      <main className="container flex mx-auto min-h-screen bg-black/20 text-white w-full px-4 items-center justify-between">
        <section className="max-w-screen-md py-20">
          <h1 className="font-black font-display text-4xl md:text-6xl lg:text-7xl">
            Lorem ipsum dolor sit amet{" "}
            <span className="text-primary">ipsum dolor</span>
          </h1>
          <div className="text-lg py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit tellus
            ornare magna id nisl, et.
          </div>
          <div>
            <Link href="/about">
              <a className="border-primary border-b text-primary pb-1 gap-2 inline-flex items-center">
                <div> Discover Mang Morgan</div>
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </section>

        <HomeNavigator id="home" />
      </main>
    </section>
  );
}

export function HomePhilosophySection() {
  return (
    <main
      id="philosophy"
      style={{ backgroundImage: "url(/images/philosophy-bg.webp)" }}
      className="bg-no-repeat bg-fixed min-h-screen snap-start snap-always"
    >
      <div className="bg-black/20 ">
        <div className="container flex mx-auto min-h-screen text-white w-full px-4 justify-between">
          <section className="max-w-screen-md py-20 md:pt-48">
            <h1 className="font-black font-display text-4xl md:text-6xl lg:text-7xl">
              Our
              <span className="text-primary">Philosophy</span>
            </h1>
            <div className="text-lg py-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tellus ornare magna id nisl, et.
            </div>
            <div>
              <Link href="/about">
                <a className="border-primary border-b text-primary pb-1 gap-2 inline-flex items-center">
                  <div> Discover Mang Morgan</div>
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </section>

          <HomeNavigator id="philosophy" />
        </div>
      </div>
    </main>
  );
}

export function HomeBusinessesSection() {
  return (
    <main
      id="business"
      style={{ backgroundImage: "url(/images/business-bg.webp)" }}
      className="bg-no-repeat bg-fixed min-h-screen snap-start snap-always"
    >
      <div className="bg-black/20 ">
        <div className="container flex mx-auto min-h-screen text-white w-full px-4 justify-between">
          <section className="max-w-screen-md py-20 md:pt-48">
            <h1 className="font-black font-display text-4xl md:text-6xl lg:text-7xl">
              Our
              <span className="text-primary"> Businesses</span>
            </h1>
            <div className="text-lg py-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tellus ornare magna id nisl, et.
            </div>
            <div>
              <Link href="/about">
                <a className="border-primary border-b text-primary pb-1 gap-2 inline-flex items-center">
                  <div> Discover Mang Morgan</div>
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </section>

          <HomeNavigator id="business" />
        </div>
      </div>
    </main>
  );
}
