export default function HomeNavigator({ current, setCurrent }: any) {
  const sections = ["home", "philosophy", "business"];

  return (
    <aside className="flex flex-col h-screen min-w-20 p-1 top-0 right-0 gap-4 fixed justify-around items-center">
      <button
        className="animate-bounce"
        onClick={() => setCurrent(current - 1)}
      >
        {current > 0 && (
          <img
            alt="arrow"
            src="/images/arrow.svg"
            className="transform w-12 rotate-180"
          />
        )}
      </button>

      <nav className="flex flex-col gap-4 justify-center">
        {sections.map((section, i) => (
          <button
            key={section}
            onClick={() => setCurrent(i)}
            className={`rounded-full border-4 h-6 w-6 ${
              current == i ? "border-primary" : "border-white"
            }`}
          />
        ))}
      </nav>

      <button
        className="animate-bounce"
        onClick={() => setCurrent(current + 1)}
      >
        {current < sections.length && (
          <img alt="arrow" src="/images/arrow.svg" className="w-12" />
        )}
      </button>
    </aside>
  );
}
