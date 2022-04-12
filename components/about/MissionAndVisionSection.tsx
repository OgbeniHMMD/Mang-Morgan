export default function MissionAndVisionSection() {
  return (
    <section id="mission-vision" className="bg-white">
      <div className="container mx-auto px-4 gap-8 md:flex">
        <div
          className="bg-no-repeat bg-cover hidden md:-mt-32 md:-mb-8 md:w-3/12 md:block lg:min-w-4/12"
          style={{ backgroundImage: "url(/images/about-page/001.webp)" }}
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
