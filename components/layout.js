import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Shadow from "./ui/Shadow";

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
      <Header />
      <main className={`relative ${Poppins_400.className}`}>
        <Shadow
          variant={"primary-lighter"}
          position={{ top: "5%", left: "10%" }}
          opacity={0.02}
        />
        <Shadow
          variant={"secondary-lighter"}
          position={{ top: "20%", right: "5%" }}
          opacity={0.02}
        />
        <Shadow
          variant={"secondary-lighter"}
          position={{ top: "50%", left: "10%" }}
          opacity={0.02}
        />
        <Shadow
          variant={"primary-lighter"}
          position={{ top: "90%", right: "0%" }}
          opacity={0.02}
        />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
