import React from "react";
import Head from "next/head";
import FooterSection from "../components/_partials/FooterSection";
import TopNavigationBar from "../components/_partials/TopNavigationBar";

export default function DefaultLayout({ children, title }: Children) {
  return (
    <main className="font-body scroll-smooth">
      <Head>{title && <title>{title} | Mang Morgan</title>}</Head>

      <TopNavigationBar />
      {children}
      <FooterSection />
    </main>
  );
}

interface Children {
  title?: string;
  children: JSX.Element;
}
