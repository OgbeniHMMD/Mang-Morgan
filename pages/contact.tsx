import DefaultLayout from "../layouts/DefaultLayout";
import MeetTheTeamSection from "../components/about/MeetTheTeamSection";
import MissionAndVisionSection from "../components/about/MissionAndVisionSection";

export default function ContactUsPage() {
  return (
    <DefaultLayout title="Contact Us">
      <main className="snap-start">
        <header
          style={{ backgroundImage: "url(/images/about/about-001.webp)" }}
          className="bg-no-repeat bg-bottom bg-fixed"
        >
          <div className="bg-black/30 text-white w-full">
            <div className="container mx-auto py-20 px-4">
              <h1 className="flex font-black font-display pt-20 text-4xl gap-4 md:text-6xl lg:text-7xl ">
                <div>Contact</div>
                <div className="text-primary"> Us</div>
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

        <section className="bg-gray-100 py-20">
          <form className="container mx-auto max-w-screen-md py-12 px-4">
            <h1 className="pb-4 text-2xl md:text-4xl">Make Enquiries</h1>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <label className="mb-4 block">
                <input
                  required
                  type="name"
                  placeholder="Name"
                  className="border rounded outline-primary w-full p-2 md:p-4"
                />
              </label>

              <label className="mb-4 block">
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  className="border rounded outline-primary w-full p-2 md:p-4"
                />
              </label>
            </div>

            <label className="mb-4 block">
              <textarea
                required
                className="border rounded outline-primary h-32 w-full p-2 md:p-4"
              />
            </label>

            <footer className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <button
                type="reset"
                className="border-black border rounded p-3 md:p-4 hover:(text-primary border-primary) "
              >
                RESET
              </button>

              <button
                type="submit"
                className="bg-primary rounded text-white p-3 md:p-4 hover:(bg-primary/80)"
              >
                SEND
              </button>
            </footer>
          </form>
        </section>
      </main>
    </DefaultLayout>
  );
}
