export default function MeetTheTeamSection() {
  const photos = [
    "https://www.gravatar.com/avatar/?d=mp&s=320",
    "https://www.gravatar.com/avatar/?d=mp&s=320",
    "https://www.gravatar.com/avatar/?d=mp&s=320",
    "https://www.gravatar.com/avatar/?d=mp&s=320",
    "https://www.gravatar.com/avatar/?d=mp&s=320",
    "https://www.gravatar.com/avatar/?d=mp&s=320",
    "https://www.gravatar.com/avatar/?d=mp&s=320",
    "https://www.gravatar.com/avatar/?d=mp&s=320",
  ];

  return (
    <section
      id="team"
      className="bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url(/images/backgrounds/about-002.webp)" }}
    >
      <div className="bg-black/80">
        <div className="container mx-auto py-20 px-4">
          <h2 className="font-black font-display text-primary text-center pb-12 text-3xl md:text-5xl">
            MEET THE TEAM
          </h2>

          <div className="max-w-screen-sm text-white pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa
            felis nisi magna ut. Mi tortor malesuada proin enim placerat eu.
            Proin tellus, quis ac leo.
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-8 lg:grid-cols-4 ">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="bg-no-repeat bg-cover bg-center h-48 sm:52 md:h-64 xl:h-96"
                style={{
                  backgroundImage: `url(${photo}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
