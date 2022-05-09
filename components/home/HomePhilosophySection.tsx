import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function HomePhilosophySection() {
  return (
    <section
      id="philosophy"
      style={{ backgroundImage: "url(/images/philosophy-bg.webp)" }}
      className="bg-no-repeat bg-fixed min-h-screen text-left"
    >
      <div className="container mx-auto min-h-screen text-white w-full px-4">
        <div className="max-w-screen-md py-20 md:pt-48">
          <h1 className="font-black font-display text-4xl md:text-6xl lg:text-7xl">
            Our
            <span className="text-primary">Philosophy</span>
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
        </div>
      </div>
    </section>
  );
}
