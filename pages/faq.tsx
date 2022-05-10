import { ChevronRightIcon } from "@heroicons/react/solid";
import DefaultLayout from "../layouts/DefaultLayout";
import MeetTheTeamSection from "../components/about/MeetTheTeamSection";
import MissionAndVisionSection from "../components/about/MissionAndVisionSection";

export default function FaqPage() {
  return (
    <DefaultLayout title="Frequent Questions">
      <main className="snap-start">
        <header
          style={{ backgroundImage: "url(/images/about/about-001.webp)" }}
          className="bg-no-repeat bg-bottom bg-fixed"
        >
          <div className="bg-black/30 text-white w-full">
            <div className="container mx-auto py-20 px-4">
              <h1 className="flex font-black font-display pt-20 text-4xl gap-4 md:text-6xl lg:text-7xl ">
                <div>Frequent</div>
                <div className="text-primary"> Questions</div>
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
            </div>
          </div>
        </header>

        <section className="bg-white py-20">
          <div className="container mx-auto max-w-screen-lg">
            <header className="text-xl text-center pb-8 text-2xl lg:text-4xl">
              Questions
            </header>

            <div className="border rounded-lg border-b-0 overflow-hidden">
              {[1, 2, 3, 4, 5].map((question, i) => (
                <article key={i} className="border-b group">
                  <header className="flex text-xl p-4 pb-4 gap-8 justify-between items-center md:text-2xl group-hover:(text-primary cursor-pointer) ">
                    <h2>Morbi ipsum maecenas 00{i}</h2>
                    <ChevronRightIcon className="h-4 transform w-4 group-hover:rotate-90" />
                  </header>

                  <div className="p-4 animate-slide-out-down duration-[3000s] hidden group-hover:block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Enim massa felis nisi magna ut. Mi tortor malesuada proin
                    enim placerat eu. Proin tellus, quis ac leo. Morbi ipsum
                    maecenas id lectus tellus malesuada elit sollicitudin. A
                    dignissim enim, venenatis vitae, a. Odio quisque ac sed
                    pellentesque nibh. Commodo accumsan blandit ut pharetra,
                    vitae lobortis eget non. Velit viverra at nisl felis id
                    dolor in malesuada.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Enim massa felis nisi magna ut. Mi tortor malesuada proin
                    enim placerat eu. Proin tellus, quis ac leo. Morbi ipsum
                    maecenas id lectus tellus malesuada elit sollicitudin. A
                    dignissim enim, venenatis vitae, a. Odio quisque ac sed
                    pellentesque nibh. Commodo accumsan blandit ut pharetra,
                    vitae lobortis eget non. Velit viverra at nisl felis id
                    dolor in malesuada.
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
