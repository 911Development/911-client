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
import Shadow from "./ui/Shadow";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { intersectingSliceActions } from "@/store/intersecting-slice/intersecting-slice";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "./ui/Button";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Card from "./ui/Card";

const SidebarHeader = ({ handleSidebar, isInterSectingOnDark }) => {
  return (
    <section
      className={`offcanvas-header flex items-center sticky top-0 py-6 p-4 ${
        isInterSectingOnDark ? "bg-black" : "bg-white shadow-sm"
      }`}
    >
      <Link
        href={"/"}
        className="text-primary text-2xl font-semibold"
        onClick={handleSidebar}
      >
        911 CAD
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

const SidebarBody = ({ handleSidebar, isInterSectingOnDark }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentSidebarBodyPage, setCurrentSidebarBodyPage] = useState(0);

  const handleNextSidebarBodyPage = () => {
    if (currentSidebarBodyPage < 1)
      setCurrentSidebarBodyPage(currentSidebarBodyPage + 1);
  };

  const handlePreviousSidebarBodyPage = () => {
    if (currentSidebarBodyPage > 0)
      setCurrentSidebarBodyPage(currentSidebarBodyPage - 1);
  };

  const { pathname } = router;

  return (
    <div className="offcanvas-body flex overflow-x-hidden">
      <motion.section
        animate={{
          translateX: `${currentSidebarBodyPage * -100}%`,
        }}
        className="min-w-full py-6 px-4"
      >
        <section className="grid grid-cols-12 gap-3">
          <Link
            href={"https://www.instagram.com/greenbirddevelopment/"}
            target="_blank"
            className={`col-span-6 ${
              isInterSectingOnDark ? "bg-dark" : "bg-white"
            } shadow-sm rounded py-2 px-4`}
          >
            <section className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent rounded mb-1">
              <FontAwesomeIcon icon={faInstagram} className="text-purple-500" />
              <span className="font-semibold">Instagram</span>
            </section>
            <p className="text-sm text-muted">See our posts on Instagram</p>
          </Link>
          <Link
            href={"https://www.linkedin.com/company/greenbird-development/"}
            target="_blank"
            className={`col-span-6 ${
              isInterSectingOnDark ? "bg-dark" : "bg-white"
            } shadow-sm rounded py-2 px-4`}
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
        <hr
          className={`my-10 ${
            isInterSectingOnDark ? "border-gray-500" : "border-gray-400"
          }`}
        />
        <ul className={`${isInterSectingOnDark ? "space-y-6" : "space-y-10"}`}>
          <li>
            <Link
              href={"/"}
              className={`flex items-center gap-2 rounded ${
                isInterSectingOnDark && "py-3 px-4"
              } ${
                !isInterSectingOnDark && pathname === "/" && "text-primary"
              } ${
                isInterSectingOnDark &&
                pathname === "/" &&
                "bg-dark text-primary"
              }`}
              onClick={() => {
                dispatch(intersectingSliceActions.setIntersectingOnDark(false));
                handleSidebar();
              }}
            >
              <FontAwesomeIcon icon={faHome} size="lg" />
              <span className="text-lg">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={`flex items-center gap-2 rounded ${
                isInterSectingOnDark && "py-3 px-4"
              } ${
                !isInterSectingOnDark && pathname === "/about" && "text-primary"
              } ${
                isInterSectingOnDark &&
                pathname === "/about" &&
                "bg-dark text-primary"
              }`}
              onClick={() => {
                dispatch(intersectingSliceActions.setIntersectingOnDark(false));
                handleSidebar();
              }}
            >
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
              <span className="text-lg">About</span>
            </Link>
          </li>
          <li
            className={`flex items-center gap-2 rounded ${
              isInterSectingOnDark && "py-3 px-4"
            } active:text-primary ${isInterSectingOnDark && "active:bg-dark"}`}
            onClick={handleNextSidebarBodyPage}
          >
            <FontAwesomeIcon icon={faGears} />
            <span className="text-lg">Services</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li>
            <Link
              href={"/teams"}
              className={`flex items-center gap-2 rounded ${
                isInterSectingOnDark && "py-3 px-4"
              } ${
                !isInterSectingOnDark && pathname === "/teams" && "text-primary"
              } ${
                isInterSectingOnDark &&
                pathname === "/teams" &&
                "bg-dark text-primary"
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
              className={`flex items-center gap-2 rounded ${
                isInterSectingOnDark && "py-3 px-4"
              } ${
                !isInterSectingOnDark &&
                pathname === "/projects" &&
                "text-primary"
              } ${
                isInterSectingOnDark &&
                pathname === "/projects" &&
                "bg-dark text-primary"
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
        <hr
          className={`my-10 ${
            isInterSectingOnDark ? "border-gray-500" : "border-gray-400"
          }`}
        />
        <section>
          <h1 className="font-semibold mb-2">Contact us</h1>
          <p className="mb-4">
            If you cannot find the service you are looking for, you can contact
            us.
          </p>
          <Button
            type={"button"}
            variant={`${
              isInterSectingOnDark ? "primary-outline" : "primary-inverse"
            }`}
            className={"flex items-center gap-2"}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Contact</span>
          </Button>
        </section>
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
            <Card
              className={`rounded shadow !py-4 mb-8 ${
                isInterSectingOnDark ? "bg-dark" : "bg-white"
              }`}
            >
              <Card.Header clasName={"mb-4"}>
                <h1 className="text-primary text-xl">Design</h1>
              </Card.Header>
              <Card.Body clasName={"grid grid-cols-12"}>
                <section className="col-span-6">
                  <ul className="text-muted space-y-2">
                    <li
                      className={`inline-block ${
                        isInterSectingOnDark ? "bg-dark" : "bg-blue-100"
                      } text-primary-darker rounded-md`}
                    >
                      <span className="block px-1 text-nowrap">Web Design</span>
                    </li>
                    <li className="text-nowrap">Mobile Design</li>
                    <li
                      className={`inline-block ${
                        isInterSectingOnDark ? "bg-dark" : "bg-blue-100"
                      } text-primary-darker rounded-md`}
                    >
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
              <Card.Footer></Card.Footer>
            </Card>
          </Link>
          <Link href={"/#services"} scroll={false} onClick={handleSidebar}>
            <Card
              className={`rounded shadow !py-4 mb-8 ${
                isInterSectingOnDark ? "bg-dark" : "bg-white"
              }`}
            >
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
                    <li
                      className={`inline-block ${
                        isInterSectingOnDark ? "bg-dark" : "bg-blue-100"
                      } text-primary-darker rounded-md`}
                    >
                      <span className="block px-1 text-nowrap">Web Apps</span>
                    </li>
                    <li>Wordpress</li>
                  </ul>
                </section>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Link>
          <Link href={"/#services"} scroll={false} onClick={handleSidebar}>
            <Card
              className={`rounded shadow !py-4 ${
                isInterSectingOnDark ? "bg-dark" : "bg-white"
              }`}
            >
              <Card.Header clasName={"mb-4"}>
                <h1 className="text-primary text-xl">Other</h1>
              </Card.Header>
              <Card.Body clasName={"grid grid-cols-12"}>
                <ul className="text-muted space-y-4 ms-auto">
                  <li className="text-nowrap">Social Media</li>
                  <li
                    className={`inline-block ${
                      isInterSectingOnDark ? "bg-dark" : "bg-blue-100"
                    } text-primary-darker rounded-md`}
                  >
                    <span className="block px-1 text-nowrap">
                      Digital Marketing
                    </span>
                  </li>
                  <li className="text-nowrap">SEO Analysis</li>
                </ul>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Link>
        </section>
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

const Sidebar = ({ show, handleSidebar, isInterSectingOnDark }) => {
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
      className={`offcanvas ${
        isInterSectingOnDark ? "bg-black text-white" : "backdrop-blur-lg"
      } fixed w-screen h-screen flex flex-col top-0 overflow-y-scroll z-50`}
    >
      <Shadow
        position={{ top: "0%", left: "0%" }}
        opacity={isInterSectingOnDark ? 0 : 0.2}
        variant={"primary-lighter"}
      />
      <Shadow
        position={{ bottom: "0%", right: "0%" }}
        opacity={isInterSectingOnDark ? 0 : 0.2}
        variant={"secondary-lighter"}
      />
      <SidebarHeader
        handleSidebar={handleSidebar}
        isInterSectingOnDark={isInterSectingOnDark}
      />
      <SidebarBody
        handleSidebar={handleSidebar}
        isInterSectingOnDark={isInterSectingOnDark}
      />
      <SidebarFooter />
    </motion.div>
  );
};

export default Sidebar;
