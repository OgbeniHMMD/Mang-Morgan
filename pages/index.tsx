import type { NextPage } from "next";
import Head from "next/head";

const ComingSoonPage: NextPage = () => {
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
          crossOrigin={true}
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Cabin&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="container bg-none bg-no-repeat bg-right flex flex-col mx-auto min-h-screen text-white py-12 gap-y-8 justify-between"
        style={{
          backgroundImage: "url('/images/construction-illustration.png')",
        }}
      >
        <main className="flex h-full p-4 gap-x-4 justify-between items-center">
          <div className="md:w-md">
            <h1 className="font-black font-display text-white pb-8 text-3xl">
              Mang Morgan
            </h1>

            <div className="font-black font-display text-white py-8 text-6xl">
              WE ARE <br />
              COMING SOON
            </div>

            <div className="leading-normal tracking-wide">
              Our website is under construction, but we are ready to go! Our
              team is working on something amazing for you. You can subscribe to
              our mailing list to get notified.
            </div>

            <div className="py-8">
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

            <div className="font-black font-display text-white py-8 text-3xl">
              Arriving in...
            </div>
            <div className="flex text-primary text-center gap-x-4">
              <div className="rounded-md bg-light-800 p-6">
                <div className="border-b border-primary font-medium text-xl mb-1 pb-2">
                  20
                </div>
                <div className="text-lg">Days</div>
              </div>
              <div className="rounded-md bg-light-800 p-6">
                <div className="border-b border-primary font-medium text-xl mb-1 pb-2">
                  20
                </div>
                <div className="text-lg">Hrs</div>
              </div>
              <div className="rounded-md bg-light-800 p-6">
                <div className="border-b border-primary font-medium text-xl mb-1 pb-2">
                  20
                </div>
                <div className="text-lg">Mins</div>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex gap-x-4 justify-end">
          <a href="#facebook">Facebook</a>
          <a href="#Twitter">Twitter</a>
          <a href="#Instagram">Instagram</a>
        </footer>
      </div>
    </div>
  );
};

export default ComingSoonPage;
