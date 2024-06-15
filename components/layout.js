import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";
import Navbar from "./ui/Navbar";

const Layout = ({ Poppins_400, children }) => {
  const themeState = useSelector((state) => state.theme);

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("theme", themeState.theme);

    const [html, body] = [
      document.querySelector("html"),
      document.querySelector("body"),
    ];

    if (themeState.theme === "dark") {
      html.classList.add("dark");
      body.className = "bg-black text-white";
    }

    if (themeState.theme === "light") {
      html.classList.remove("dark");
      body.className = "bg-white text-dark";
    }
  }, [themeState]);

  return (
    <>
      <Head>
        <meta name="description" content="911 Creativity and Development" />
      </Head>
      {/* <header className={`sticky top-0 py-4 z-50 ${Poppins_400.className}`}>
        <Navbar theme={themeState.theme} />
      </header> */}
      <Header />
      <main className={Poppins_400.className}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
