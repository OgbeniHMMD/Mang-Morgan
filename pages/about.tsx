import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
import DefaultLayout from "../layouts/DefaultLayout";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div>
        <section
          style={{ backgroundImage: "url(/images/home-hero/001.webp)" }}
          className="bg-no-repeat bg-fixed min-h-screen"
        >
          <main className="container mx-auto min-h-screen bg-black/20 text-white w-full px-4">
            <section className="py-20">
              <h1 className="font-black font-display pt-20 text-4xl md:text-6xl lg:text-7xl">
                About
                <span className="text-primary">Us</span>
              </h1>
              <div className="max-w-screen-sm text-lg py-12 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                massa felis nisi magna ut. Mi tortor malesuada proin enim
                placerat eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id
                lectus tellus malesuada elit sollicitudin. A dignissim enim,
                venenatis vitae, a. Odio quisque ac sed pellentesque nibh.
                Commodo accumsan blandit ut pharetra, vitae lobortis eget non.
                Velit viverra at nisl felis id dolor in malesuada.
              </div>
              <div className="max-w-screen-sm text-lg py-12 md:ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                massa felis nisi magna ut. Mi tortor malesuada proin enim
                placerat eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id
                lectus tellus malesuada elit sollicitudin. A dignissim enim,
                venenatis vitae, a. Odio quisque ac sed pellentesque nibh.
                Commodo accumsan blandit ut pharetra, vitae lobortis eget non.
                Velit viverra at nisl felis id dolor in malesuada.
              </div>
            </section>
          </main>
        </section>

        <MissionAndVisonSection />
        <MeetTheTeamSection />
      </div>
    </DefaultLayout>
  );
}

function MissionAndVisonSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 gap-8 md:flex">
        <div
          className="bg-no-repeat bg-cover hidden md:-mt-32 md:-mb-8 md:w-3/12 md:block lg:min-w-4/12"
          style={{ backgroundImage: "url(https://fakeimg.pl/600/)" }}
        />
        <div className="flex flex-col py-12 gap-10">
          <div className="flex-grow pb-20">
            <h2 className="font-black font-display pb-12 text-3xl md:text-5xl">
              Our
              <span className="bg-primary py-3 px-4">Mission</span>
            </h2>
            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              massa felis nisi magna ut. Mi tortor malesuada proin enim placerat
              eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id lectus
              tellus malesuada elit sollicitudin. A dignissim enim, venenatis
              vitae, a. Odio quisque ac sed pellentesque nibh. Commodo accumsan
              blandit ut pharetra, vitae lobortis eget non. Velit viverra at
              nisl felis id dolor in malesuada.
            </div>
          </div>

          <div className="">
            <h2 className="font-black font-display pb-12 text-3xl md:text-right md:text-5xl">
              Our
              <span className="bg-primary py-3 px-4">Vision</span>
            </h2>
            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              massa felis nisi magna ut. Mi tortor malesuada proin enim placerat
              eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id lectus
              tellus malesuada elit sollicitudin. A dignissim enim, venenatis
              vitae, a. Odio quisque ac sed pellentesque nibh. Commodo accumsan
              blandit ut pharetra, vitae lobortis eget non. Velit viverra at
              nisl felis id dolor in malesuada.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetTheTeamSection() {
  return (
    <section className="bg-black">
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
              style={{ backgroundImage: "url(https://fakeimg.pl/600/)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
