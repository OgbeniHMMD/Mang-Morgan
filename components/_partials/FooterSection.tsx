import Link from "next/link";

export default function FooterSection() {
  // const sections = ["Who We Are", "Businesses", "Contact Us", "Newsletter"];
  const sections = [
    {
      title: "Who We Are",
      links: [
        { title: "About Us", slug: "#/about" },
        { title: "Our Services", slug: "#/services" },
        { title: "Mission & Vision", slug: "#/mission-vision" },
      ],
    },
    {
      title: "Businesses",
      links: [
        { title: "Real Estate", slug: "#/real-estate" },
        { title: "Digital Assets", slug: "#/digital-assets" },
        { title: "Medical Consultancy", slug: "#/medical-consultancy" },
        { title: "Distribution", slug: "#/distribution" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { title: "0810 000 0000", slug: "tel://08100000000" },
        { title: "mail@example.com", slug: "mailto:mail@example.com" },
        { title: "Office Address", slug: "#maps" },
      ],
    },
  ];

  return (
    <footer id="footer" className="bg-primary text-black text-sm w-full">
      <div className="container mx-auto py-8 px-4">
        <div className="grid py-16 gap-8 grid-cols-2 md:grid-cols-4">
          {sections.map((section, i) => (
            <section key={i} className="flex flex-col gap-4">
              <h2 className="font-bold text-xl">{section.title}</h2>
              {section.links.map((link, j) => (
                <a key={j} href={link.slug} className="block hover:underline">
                  {link.title}
                </a>
              ))}
            </section>
          ))}

          <section className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">Subscribe to Our Newsletter</h2>

            <form
              id="newsletter"
              className="bg-white rounded flex justify-between overflow-hidden"
            >
              <input
                className="flex-grow py-3 px-4 focus:outline-none"
                placeholder="email@example.com"
              />
              <button className="bg-black rounded text-white py-3 px-4 focus:outline-none">
                Subscribe
              </button>
            </form>

            <a href="#terms-use" className="block hover:underline">
              Terms Of Use.
            </a>
            <a href="#privacy-policy" className="block hover:underline">
              Privacy Policy
            </a>
          </section>
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
