import Link from "next/link";
import HomeNavigator from "../_partials/Navigator";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function HomeHeroSection() {
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
