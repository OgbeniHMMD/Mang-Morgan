import React from "react";
import FooterSection from "../components/_partials/FooterSection";
import TopNavigationBar from "../components/_partials/TopNavigationBar";

export default function DefaultLayout({ children }: Children) {
  return (
    <main className="font-body scroll-smooth">
      <TopNavigationBar />
      {children}
      <FooterSection />
    </main>
  );
}

interface Children {
  children: JSX.Element;
}
