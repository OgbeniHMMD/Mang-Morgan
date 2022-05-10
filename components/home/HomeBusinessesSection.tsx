import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function HomeBusinessesSection() {
  return (
    <main
      id="business"
      style={{ backgroundImage: "url(/images/business-bg.webp)" }}
      className="bg-no-repeat bg-fixed min-h-screen text-left"
    >
      <div className="container flex flex-col mx-auto min-h-screen text-white w-full py-20 px-4 gap-8 justify-between md:pt-48">
        <div className="w-full">
          <h1 className="font-black font-display text-4xl md:text-6xl lg:text-7xl">
            Our
            <span className="text-primary"> Businesses</span>
          </h1>
          <div className="text-lg py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit tellus
            ornare magna id nisl, et.
          </div>
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
              className="bg-no-repeat flex transform pl-12 duration-1000 items-center group hover:scale-95"
            >
              <div
                key={service}
                style={{
                  backgroundImage: "url(/images/services-001.webp)",
                }}
                className="bg-no-repeat bg-cover bg-center flex h-48 items-center aspect-video md:h-64 md:w-auto lg:h-92"
              >
                <Link href="#">
                  <a className="flex h-full -ml-12 w-full transform duration-1000 items-center group-hover:(justify-center bg-black/80 mx-0) ">
                    <div>
                      <h1 className="font-black font-display text-2xl z-20 whitespace-nowrap md:text-3xl lg:text-4xl ">
                        {service}
                      </h1>

                      <div className="text-center pt-4 hidden group-hover:block">
                        <div className="border-primary text-primary pb-1 gap-2 inline-flex items-center">
                          <div>Learn more</div>
                          <ChevronRightIcon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
