import Head from "next/head";
import Navbar from "./ui/Navbar";
import { useSelector } from "react-redux";
import Footer from "./ui/Footer";
import { useRouter } from "next/router";

const Layout = ({ Poppins_400, children }) => {
  const router = useRouter();
  const interSectingState = useSelector((state) => state.intersectingSlice);

  const { pathname } = router;
  const { isInterSectingOnDark } = interSectingState;

  console.log("isInterSectingOnDark", isInterSectingOnDark);

  return (
    <>
      <Head>
        <meta name="description" content="911 Creativity and Development" />
      </Head>
      <header
        className={`sticky top-0 bg-white shadow-sm ${
          isInterSectingOnDark &&
          (pathname === "/" || pathname === "/projects") &&
          "!bg-black text-white"
        } py-6 z-50 ${Poppins_400.className}`}
      >
        <Navbar isInterSectingOnDark={isInterSectingOnDark} />
      </header>
      <main className={Poppins_400.className}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
