export default function NavigationDrawer({ toggle }: any) {
  const sections = [
    {
      title: "Who we/are",
      links: [
        { title: "About Us", slug: "/about#top" },
        { title: "Mission & Vision", slug: "/about#mission-vision" },
        { title: "Meet The Team", slug: "/about#team" },
      ],
    },
    {
      title: "Our/Businesses",
      links: [
        { title: "Real Estate", slug: "#/services#/real-estate" },
        { title: "Digital Assets", slug: "#/services#digital-assets" },
        {
          title: "Medical Consultancy",
          slug: "#/services#medical-consultancy",
        },
        { title: "Distribution", slug: "#/services#distribution" },
      ],
    },
    {
      title: "Contact/Us",
      links: [
        { title: "Send Us A Mail", slug: "#/contact" },
        { title: "Make an Enquiry", slug: "#/contact" },
        { title: "FAQ", slug: "#/faq" },
      ],
    },
    {
      title: "Buy/Now",
      links: [
        { title: "Real Estate", slug: "#" },
        { title: "Digital Assets", slug: "#" },
        { title: "Distribution", slug: "#" },
      ],
    },
  ];

  return (
    <div className="bg-black flex min-h-screen w-full py-20 px-8 transition transition-all top-0 animate-roll-in z-30 animate-duration-1000 overflow-y-auto justify-center fixed md:px-20 md:items-center">
      <div className="container mx-auto max-w-screen-lg text-white grid pt-8 gap-12 grid-cols-2 md:grid-cols-2">
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col gap-8">
            <h1 className="font-black font-display text-2xl md:text-4xl">
              {section.title.split("/")[0]}{" "}
              <span className="text-primary">
                {section.title.split("/")[1]}
              </span>
            </h1>
            {section.links.map((link, i) => (
              <a key={i} href={link.slug} onClick={() => toggle(false)}>
                {link.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
