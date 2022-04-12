import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <TopNavigationBar />

      <section
        style={{ backgroundImage: "url(/images/home-hero/001.jpeg)" }}
        className="bg- bg-no-repeat min-h-screen"
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

function TopNavigationBar() {
  return (
    <nav className="bg-black/50 text-primary w-full fixed">
      <div className="container flex mx-auto p-4 gap-8 justify-between items-center">
        <a>
          <img src="/logo-dark.svg" className="h-8 w-auto" />
        </a>

        <button className="bg-primary rounded font-medium text-black text-sm py-2 px-4">
          MENU
        </button>
      </div>
    </nav>
  );
}

function FooterSection() {
  return (
    <footer id="footer" className="bg-primary text-black text-sm w-full">
      <div className="container mx-auto py-8 px-4">
        <div className="grid py-16 gap-8 grid-cols-2 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <section key={item} className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Consectetur</h2>
              <a href="#" className="hover:underline">
                Lorem ipsum dolor
              </a>
              <a href="#" className="hover:underline">
                Lorem ipsum dolor
              </a>
            </section>
          ))}
        </div>

        <section className="border-black flex flex-col border-t-2 w-full py-12 gap-8 justify-center items-center md:flex-row md:justify-between">
          <a>
            <img src="/logo-light.svg" className="h-8 w-auto" />
          </a>
          <div className="text-center md:text-right">
            <div className="pb-4">Mang Morgan © 2022 All Rights Reserved.</div>
            <div className="text-xs">
              Designed by{" "}
              <a href="#gemiini.com.ng" className="underline">
                Gemiini
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
