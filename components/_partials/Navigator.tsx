export default function HomeNavigator({ id }: any) {
  const sections = ["home", "philosophy", "business"];
  const index = sections.indexOf(id);

  return (
    <aside className="flex flex-col h-screen gap-4 justify-around items-center">
      <a href={`#${sections[index - 1]}`} className="">
        {index > 0 && (
          <img
            alt="arrow"
            src="/images/arrow.svg"
            className="transform w-12 rotate-180"
          />
        )}
      </a>

      <nav className="flex flex-col gap-4 justify-center">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`rounded-full border-4 h-6 w-6 ${
              section == id ? "border-primary" : "border-white"
            }`}
          />
        ))}
      </nav>

      <a
        href={`#${
          index + 1 < sections.length ? sections[index + 1] : "footer"
        }`}
        className="animate-bounce"
      >
        <img alt="arrow" src="/images/arrow.svg" className="w-12" />
      </a>
    </aside>
  );
}
