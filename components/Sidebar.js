import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faGears,
  faHome,
  faInfoCircle,
  faProjectDiagram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { intersectingSliceActions } from "@/store/intersecting-slice/intersecting-slice";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "./ui/Button";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Card from "./ui/Card";
import Image from "next/image";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";

const SidebarHeader = ({ handleSidebar }) => {
  return (
    <section className="offcanvas-header flex items-center sticky top-0 py-6 p-4 bg-black shadow-sm">
      <Link
        href={"/"}
        // className="text-primary text-2xl font-semibold"
        onClick={handleSidebar}
      >
        <Image
          src={"/logo.png"}
          width={350}
          height={234}
          className="w-16"
          alt="Logo"
        />
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="28"
        height="28"
        viewBox="0 0 50 50"
        style={{ fill: "#4285f4" }}
        className="ms-auto"
        onClick={handleSidebar}
      >
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
      </svg>
    </section>
  );
};

const SidebarBody = ({ handleSidebar }) => {
  const router = useRouter();

  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [themeIcon, setThemeICon] = useState("/icons/themes/dark.png");
  const [currentSidebarBodyPage, setCurrentSidebarBodyPage] = useState(0);

  const handleNextSidebarBodyPage = () => {
    if (currentSidebarBodyPage < 1)
      setCurrentSidebarBodyPage(currentSidebarBodyPage + 1);
  };

  const handlePreviousSidebarBodyPage = () => {
    if (currentSidebarBodyPage > 0)
      setCurrentSidebarBodyPage(currentSidebarBodyPage - 1);
  };

  const handleSwitchTheme = () =>
    dispatch(themeSliceActions.setTheme(theme === "dark" ? "light" : "dark"));

  const { pathname } = router;
  const { theme } = themeState;

  useEffect(() => {
    if (theme === "dark") setThemeICon("/icons/themes/light.png");
    if (theme === "light") setThemeICon("/icons/themes/dark_white.png");
  }, [theme]);

  return (
    <div className="offcanvas-body flex overflow-x-hidden">
      <motion.section
        animate={{
          translateX: `${currentSidebarBodyPage * -100}%`,
        }}
        className="min-w-full y-6 px-4"
      >
        <section className="grid grid-cols-12 gap-3">
          <Link
            href={"https://www.instagram.com/911development/"}
            target="_blank"
            className="col-span-6 bg-dark shadow-sm rounded py-2 px-4"
          >
            <section className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent rounded mb-1">
              <FontAwesomeIcon icon={faInstagram} className="text-purple-500" />
              <span className="font-semibold">Instagram</span>
            </section>
            <p className="text-sm text-muted">See our posts on Instagram</p>
          </Link>
          <Link
            href={"https://www.linkedin.com/company/911development/"}
            target="_blank"
            className="col-span-6 bg-dark shadow-sm rounded py-2 px-4"
          >
            <section className="flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-100 bg-clip-text text-transparent rounded mb-1">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" />
              <span className="font-semibold">LinkedIn</span>
            </section>
            <p className="text-sm text-muted">
              Visit our business page on LinkedIn
            </p>
          </Link>
        </section>
        <hr className="border-gray-500 my-8" />
        <ul className="space-y-2">
          <li>
            <Link
              href={"/"}
              className={`flex items-center gap-2 rounded py-3 px-4 ${
                pathname === "/" && "bg-dark text-primary"
              }`}
              onClick={() => handleSidebar()}
            >
              <FontAwesomeIcon icon={faHome} />
              <span className="text-lg">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={`flex items-center gap-2 rounded py-3 px-4 ${
                pathname === "/about" && "bg-dark text-primary"
              }`}
              onClick={() => handleSidebar()}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="text-lg">About</span>
            </Link>
          </li>
          <li
            className="flex items-center gap-2 rounded active:text-primary active:bg-dark py-3 px-4"
            onClick={handleNextSidebarBodyPage}
          >
            <FontAwesomeIcon icon={faGears} />
            <span className="text-lg">Services</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <Link
              href={"/teams"}
              className={`flex items-center gap-2 rounded py-3 px-4 ${
                pathname === "/teams" && "bg-dark text-primary"
              }`}
              onClick={() => {
                dispatch(intersectingSliceActions.setIntersectingOnDark(false));
                handleSidebar();
              }}
            >
              <FontAwesomeIcon icon={faUsers} />
              <span className="text-lg">Teams</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className={`flex items-center gap-2 rounded py-3 px-4 ${
                pathname === "/projects" && "bg-dark text-primary"
              }`}
              onClick={() => {
                dispatch(intersectingSliceActions.setIntersectingOnDark(false));
                handleSidebar();
              }}
            >
              <FontAwesomeIcon icon={faProjectDiagram} />
              <span className="text-lg">Projects</span>
            </Link>
          </li>
        </ul>
        <hr className="border-gray-500 mt-8 mb-4" />
        <ul>
          <li
            className="flex items-center gap-2 rounded bg-dark py-3 px-4"
            onClick={() => {
              handleSwitchTheme();
              handleSidebar();
            }}
          >
            <Image
              src={themeIcon}
              width={96}
              height={96}
              className="w-9 cursor-pointer rounded transition-all p-1"
              alt="Theme Icon"
            />
            <span className="text-lg">Switch Theme</span>
          </li>
        </ul>
        <hr className="border-gray-500 mt-4 mb-8" />
        <section>
          <h1 className="font-semibold mb-2">Contact us</h1>
          <p className="mb-4">
            If you cannot find the service you are looking for, you can contact
            us.
          </p>
          <Link href={"/contact"}>
            <Button
              type={"button"}
              variant="primary-outline"
              className="flex items-center gap-2"
              onClick={handleSidebar}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Contact</span>
            </Button>
          </Link>
        </section>
        <section style={{ height: "120px" }} />
      </motion.section>
      <motion.section
        animate={{
          translateX: `${currentSidebarBodyPage * -100}%`,
        }}
        className="min-w-full py-6 px-4"
      >
        <section
          className="flex items-center gap-1 mb-8"
          onClick={handlePreviousSidebarBodyPage}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
          <span className="text-lg">Back</span>
        </section>
        <section>
          <Link href={"/#services"} scroll={false} onClick={handleSidebar}>
            <Card className="rounded shadow !py-4 mb-8 bg-dark">
              <Card.Header clasName={"mb-4"}>
                <h1 className="text-primary text-xl">Design</h1>
              </Card.Header>
              <Card.Body clasName={"grid grid-cols-12"}>
                <section className="col-span-6">
                  <ul className="text-muted space-y-2">
                    <li className="inline-block bg-primary-darkest text-light rounded-md">
                      <span className="block px-1 text-nowrap">Web Design</span>
                    </li>
                    <li className="text-nowrap">Mobile Design</li>
                    <li className="inline-block bg-primary-darkest text-light rounded-md">
                      <span className="block px-1 text-nowrap">UI / UX</span>
                    </li>
                  </ul>
                </section>
                <section className="col-span-6">
                  <ul className="text-muted space-y-2">
                    <li>Logo Design</li>
                    <li>Photoshop</li>
                  </ul>
                </section>
              </Card.Body>
            </Card>
          </Link>
          <Link href={"/#services"} scroll={false} onClick={handleSidebar}>
            <Card className="rounded shadow !py-4 mb-8 bg-dark">
              <Card.Header clasName={"mb-4"}>
                <h1 className="text-primary text-xl">Development</h1>
              </Card.Header>
              <Card.Body clasName={"grid grid-cols-12"}>
                <section className="col-span-6">
                  <ul className="text-muted space-y-2">
                    <li>Website</li>
                    <li>Frontend</li>
                    <li>Backend</li>
                  </ul>
                </section>
                <section className="col-span-6">
                  <ul className="text-muted space-y-2">
                    <li>Mobile Apps</li>
                    <li className="inline-block bg-primary-darkest text-light rounded-md">
                      <span className="block px-1 text-nowrap">Web Apps</span>
                    </li>
                    <li>Wordpress</li>
                  </ul>
                </section>
              </Card.Body>
            </Card>
          </Link>
          <Link href={"/#services"} scroll={false} onClick={handleSidebar}>
            <Card className="rounded shadow !py-4 bg-dark">
              <Card.Header clasName={"mb-4"}>
                <h1 className="text-primary text-xl">Other</h1>
              </Card.Header>
              <Card.Body clasName={"grid grid-cols-12"}>
                <ul className="text-muted space-y-4 ms-auto">
                  <li className="text-nowrap">Social Media</li>
                  <li className="inline-block bg-primary-darkest text-light rounded-md">
                    <span className="block px-1 text-nowrap">
                      Digital Marketing
                    </span>
                  </li>
                  <li className="text-nowrap">SEO Analysis</li>
                </ul>
              </Card.Body>
            </Card>
          </Link>
        </section>
        <section style={{ height: "120px" }} />
      </motion.section>
    </div>
  );
};

const SidebarFooter = () => (
  <div className="offcanvas-footer mt-auto p-4">
    <p className="text-sm lg:hidden">
      © 911 CAD {new Date().getFullYear()}, All rights reserved.
    </p>
  </div>
);

const Sidebar = ({ show, handleSidebar }) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (show) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [show]);

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{
        translateX: show ? "0%" : "100%",
      }}
      className="offcanvas bg-black text-white fixed w-screen h-screen flex flex-col top-0 overflow-y-scroll z-50"
    >
      <SidebarHeader handleSidebar={handleSidebar} />
      <SidebarBody handleSidebar={handleSidebar} />
      <SidebarFooter />
    </motion.div>
  );
};

export default Sidebar;
