import DefaultLayout from "../layouts/DefaultLayout";
import MeetTheTeamSection from "../components/about/MeetTheTeamSection";
import MissionAndVisionSection from "../components/about/MissionAndVisionSection";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div id="top" className="snap-start">
        <section
          style={{ backgroundImage: "url(/images/about/about-001.webp)" }}
          className="bg-no-repeat bg-bottom bg-fixed min-h-screen"
        >
          <main className="min-h-screen bg-black/30 text-white w-full">
            <section className="container mx-auto py-20 px-4">
              <h1 className="flex font-black font-display pt-20 text-4xl gap-4 md:text-6xl lg:text-7xl ">
                <div>About</div>
                <div className="text-primary">Us</div>
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

        <MissionAndVisionSection />
        <MeetTheTeamSection />
      </div>
    </DefaultLayout>
  );
}
