import React from "react";
import FooterSection from "../components/_partials/FooterSection";
import TopNavigationBar from "../components/_partials/TopNavigationBar";

export default function DefaultLayout({ children }: Children) {
  return (
    <main className="font-body h-screen snap-y snap-mandatory snap-always overflow-y-auto snap-start snap">
      <TopNavigationBar />
      {children}
      <FooterSection />
    </main>
  );
}

interface Children {
  children: JSX.Element;
}
