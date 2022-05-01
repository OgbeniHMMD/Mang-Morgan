import Link from "next/link";
import HomeNavigator from "../_partials/Navigator";

export default function HomeServicesSection() {
  return (
    <main
      id="services"
      style={{ backgroundImage: "url(/images/business-bg.webp)" }}
      className="bg-no-repeat bg-fixed min-h-screen snap-start snap-always"
    >
      <div className="bg-black/20 ">
        <div className="container flex mx-auto min-h-screen text-white w-full px-4 justify-between">
          <section className="max-w-screen-md py-20 md:pt-48">
            <h1 className="font-black font-display text-4xl md:text-6xl lg:text-7xl">
              Our
              <span className="text-primary"> Services</span>
            </h1>
            <div className="text-lg py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tellus ornare magna id nisl, et. Auctor mauris sit libero
              tincidunt elit at praesent.
            </div>
          </section>

          <HomeNavigator id="services" />
        </div>
      </div>
    </main>
  );
}
