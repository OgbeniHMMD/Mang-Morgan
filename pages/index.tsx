import Head from "next/head";
import CountDownWidget from "../components/CountDown";

export default function ComingSoonPage() {
  return (
    <div
      className="bg-primary bg-no-repeat bg-cover font-body text-white justify-between"
      style={{ backgroundImage: 'url("/images/backgrounds/blue-bg.png")' }}
    >
      <Head>
        <title>Mang Morgan - Coming Soon</title>
        <meta
          name="description"
          content="Our website is under construction, but we are ready to go! Our team is working on something amazing for you. You can subscribe to our mailing list to get notified."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Cabin&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="container bg-no-repeat bg-right-bottom flex flex-col mx-auto min-h-screen text-white justify-between md:bg-right"
        style={{
          backgroundImage: "url('/images/construction-illustration.png')",
        }}
      >
        <main className="bg-primary flex-grow h-full bg-opacity-90 p-4 py-12 md:bg-transparent md:w-md md:opacity-100 md:pb-8">
          <h1 className="font-black font-display text-white text-xl pb-4 md:pb-8 md:text-3xl">
            Mang Morgan
          </h1>

          <div className="font-black font-display text-white py-4 text-2xl md:py-8 md:text-3xl lg:text-5xl">
            WE ARE <br />
            COMING SOON
          </div>

          <div className="leading-normal tracking-wide">
            Our website is under construction, but we are ready to go! Our team
            is working on something amazing for you. You can subscribe to our
            mailing list to get notified.
          </div>

          <div className="py-6 md:py-8">
            <div className="border rounded-md flex overflow-hidden justify-between">
              <input
                placeholder="Enter your mail"
                className="bg-transparent flex-grow p-2"
              />
              <button className="bg-light-50 text-primary py-3 px-8 hover:bg-light-100">
                Subscribe
              </button>
            </div>
          </div>

          <CountDownWidget kickOffTime={1640991600000} />
        </main>

        <footer className="bg-primary flex bg-opacity-90 p-4 pb-12 gap-x-4 justify-end md:bg-transparent md:opacity-100">
          <a href="#facebook">Facebook</a>
          <a href="#Twitter">Twitter</a>
          <a href="#Instagram">Instagram</a>
        </footer>
      </div>
    </div>
  );
}
