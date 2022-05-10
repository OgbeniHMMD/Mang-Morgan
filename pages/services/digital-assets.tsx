import DefaultLayout from "../../layouts/DefaultLayout";
import MeetTheTeamSection from "../../components/about/MeetTheTeamSection";
import MissionAndVisionSection from "../../components/about/MissionAndVisionSection";

export default function DigitalAssetsPage() {
  return (
    <DefaultLayout title="Digital Assets">
      <main className="snap-start">
        <header
          style={{ backgroundImage: "url(/images/business-hero.webp)" }}
          className="bg-no-repeat bg-top bg-cover bg-fixed"
        >
          <div className="bg-black/30 text-white w-full">
            <div className="container mx-auto py-20 px-4">
              <h1 className="flex font-black font-display pt-20 text-4xl gap-4 md:text-6xl lg:text-7xl ">
                <div>Digital</div>
                <div className="text-primary">Assets</div>
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
          <div className="container mx-auto px-4">
            <div className="max-w-screen-md py-12">
              <h1 className="pb-4 text-2xl md:text-4xl">
                Morbi ipsum maecenas
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              massa felis nisi magna ut. Mi tortor malesuada proin enim placerat
              eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id lectus
              tellus malesuada elit sollicitudin. A dignissim enim, venenatis
              vitae, a. Odio quisque ac sed pellentesque nibh. Commodo accumsan
              blandit ut pharetra, vitae lobortis eget non. Velit viverra at
              nisl felis id dolor in malesuada.
            </div>
            <div className="max-w-screen-md py-12 md:ml-auto md:text-right">
              <h1 className="pb-4 text-2xl md:text-4xl">Vitae lobortis eget</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              massa felis nisi magna ut. Mi tortor malesuada proin enim placerat
              eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id lectus
              tellus malesuada elit sollicitudin. A dignissim enim, venenatis
              vitae, a. Odio quisque ac sed pellentesque nibh. Commodo accumsan
              blandit ut pharetra, vitae lobortis eget non. Velit viverra at
              nisl felis id dolor in malesuada.
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-screen-md py-12">
              <h1 className="pb-4 text-2xl md:text-4xl">
                Morbi ipsum maecenas
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              massa felis nisi magna ut. Mi tortor malesuada proin enim placerat
              eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id lectus
              tellus malesuada elit sollicitudin. A dignissim enim, venenatis
              vitae, a. Odio quisque ac sed pellentesque nibh. Commodo accumsan
              blandit ut pharetra, vitae lobortis eget non. Velit viverra at
              nisl felis id dolor in malesuada.
            </div>
            <div className="max-w-screen-md py-12 md:ml-auto md:text-right">
              <h1 className="pb-4 text-2xl md:text-4xl">Vitae lobortis eget</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              massa felis nisi magna ut. Mi tortor malesuada proin enim placerat
              eu. Proin tellus, quis ac leo. Morbi ipsum maecenas id lectus
              tellus malesuada elit sollicitudin. A dignissim enim, venenatis
              vitae, a. Odio quisque ac sed pellentesque nibh. Commodo accumsan
              blandit ut pharetra, vitae lobortis eget non. Velit viverra at
              nisl felis id dolor in malesuada.
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto max-w-screen-md text-center px-4">
            <h1 className="pb-4 text-2xl md:text-4xl">Morbi ipsum maecenas</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa
            felis nisi magna ut. Mi tortor malesuada proin enim placerat eu.
            Proin tellus, quis ac leo. Morbi ipsum maecenas id lectus tellus
            malesuada elit sollicitudin. A dignissim enim, venenatis vitae, a.
            Odio quisque ac sed pellentesque nibh. Commodo accumsan blandit ut
            pharetra, vitae lobortis eget non. Velit viverra at nisl felis id
            dolor in malesuada.
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
