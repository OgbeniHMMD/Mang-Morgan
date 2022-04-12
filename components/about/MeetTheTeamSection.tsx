export default function MeetTheTeamSection() {
  return (
    <section id="team" className="bg-black">
      <div className="container mx-auto py-20 px-4">
        <h2 className="font-black font-display text-primary text-center pb-12 text-3xl md:text-5xl">
          MEET THE TEAM
        </h2>

        <div className="max-w-screen-sm text-white pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa
          felis nisi magna ut. Mi tortor malesuada proin enim placerat eu. Proin
          tellus, quis ac leo.
        </div>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <div
              key={i}
              className="bg-no-repeat bg-cover h-96"
              style={{
                backgroundImage:
                  "url(https://www.gravatar.com/avatar/?d=mp&s=320",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
