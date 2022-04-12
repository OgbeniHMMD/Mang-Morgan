import Link from "next/link";
import FooterSection from "../components/_partials/FooterSection";
import TopNavigationBar from "../components/_partials/TopNavigationBar";

export default function HomePage() {
  return (
    <main>
      <TopNavigationBar />

      <section
        style={{ backgroundImage: "url(/images/home-hero/001.jpeg)" }}
        className="bg-no-repeat bg-fixed min-h-screen"
      >
        <main className="container flex mx-auto min-h-screen bg-black/20 text-white w-full px-4 items-center justify-between">
          <section className="max-w-screen-md py-20">
            <h1 className="font-bold text-4xl md:text-6xl">
              Lorem ipsum dolor sit amet{" "}
              <span className="text-primary">ipsum dolor</span>
            </h1>
            <div className="py-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tellus ornare magna id nisl, et.
            </div>
            <div>
              <a className="text-primary underline">
                <Link href="/#about">Discover Mang Morgan</Link>
              </a>
            </div>
          </section>

          <aside>x</aside>
        </main>
      </section>

      <FooterSection />
    </main>
  );
}
