import Link from "next/link";

export default function FooterSection() {
  const sections = ["Who We Are", "Businesses", "Contact Us", "Newsletter"];

  return (
    <footer id="footer" className="bg-primary text-black text-sm w-full">
      <div className="container mx-auto py-8 px-4">
        <div className="grid  py-16 gap-8 grid-cols-2 md:grid-cols-4">
          {sections.map((section, i) => (
            <section key={i} className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">{section}</h2>
              {[1, 2, 3, 4].map((link, j) => (
                <a key={j} href="#" className="hover:underline">
                  Lorem ipsum dolor {j}
                </a>
              ))}
            </section>
          ))}
        </div>

        <section className="border-black flex flex-col border-t-2 w-full py-12 gap-8 justify-center items-center md:flex-row md:justify-between">
          <Link href="/">
            <a>
              <img src="/logo-light.svg" className="h-8 w-auto" />
            </a>
          </Link>
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
