import HomeNavigator from "../_partials/Navigator";

export default function HomeBusinessesSection() {
  return (
    <main
      id="business"
      style={{ backgroundImage: "url(/images/business-bg.webp)" }}
      className="bg-no-repeat bg-fixed min-h-screen snap-start snap-always"
    >
      <div className="bg-black/20">
        <div className="container flex mx-auto min-h-screen text-white w-full px-4 justify-between">
          <section className="container flex-grow w-full py-20 md:pt-48">
            <h1 className="font-black font-display text-4xl md:text-6xl lg:text-7xl">
              Our
              <span className="text-primary"> Businesses</span>
            </h1>
            <div className="text-lg py-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tellus ornare magna id nisl, et.
            </div>

            <div className="flex w-full gap-8 overflow-x-auto">
              {[
                "Digital Assets",
                "Real Estate",
                "Distribution",
                "Medical Consultancy",
              ].map((service) => (
                <div
                  key={service}
                  className="bg-no-repeat flex pl-12 items-center"
                >
                  <div
                    key={service}
                    style={{
                      backgroundImage: "url(/images/services-001.webp)",
                    }}
                    className="bg-no-repeat bg-center flex h-64 w-92 items-center"
                  >
                    <h1 className="font-black font-display -ml-12 text-2xl z-20 whitespace-nowrap md:text-3xl lg:text-4xl">
                      {service}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <HomeNavigator id="business" />
        </div>
      </div>
    </main>
  );
}
