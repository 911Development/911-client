import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faCheck,
  faEarth,
  faGear,
  faGears,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import HeaderDropdown from "../HeaderDropdown";
import MenuIcon from "./MenuIcon";
import Sidebar from "../Sidebar";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const router = useRouter();

  const { t, i18n } = useTranslation();

  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [currentLanguage, setCurrentLanguage] = useState("");
  const [currentTheme, setCurrentTheme] = useState("");
  const [headerDropdown, setHeaderDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [themeIcon, setThemeICon] = useState("/icons/themes/dark.png");
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const [settingsDropdownDisplay, setSettingsDropdownDisplay] =
    useState("none");
  const [themeSettingsDisplay, setThemeSettingsDisplay] = useState("block");
  const [languageSettingsDisplay, setLanguageSettingsDisplay] =
    useState("none");
  const [currentSettingsPage, setCurrentSettingsPage] = useState(0);
  const dropdownRef = useRef();

  const { pathname } = router;
  const { language } = i18n;
  const { theme } = themeState;

  const handleSettingsDropdown = () => setSettingsDropdown(!settingsDropdown);

  const handleHeaderDropdown = () => setHeaderDropdown(!headerDropdown);
  const handleSidebar = () => setSidebar(!sidebar);

  const handleSwitchTheme = (value) =>
    dispatch(themeSliceActions.setTheme(value));

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.asPath, router.asPath, { locale: lng });
  };

  useEffect(() => {
    if (currentTheme === "dark") setThemeICon("/icons/themes/light.png");
    if (currentTheme === "light") setThemeICon("/icons/themes/dark.png");
  }, [theme]);

  useEffect(
    function () {
      const identifier = setTimeout(function () {
        if (!settingsDropdown) setSettingsDropdownDisplay("none");
      }, 100);

      if (settingsDropdown) setSettingsDropdownDisplay("block");

      return () => clearTimeout(identifier);
    },
    [settingsDropdown]
  );

  useEffect(
    function () {
      setCurrentLanguage(language);
    },
    [language]
  );

  useEffect(
    function () {
      function handleClickOutside(e) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target) &&
          !e.target.classList.contains("dropdown")
        ) {
          setSettingsDropdown(false);
          setTimeout(function () {
            setCurrentSettingsPage(0);
          }, 150);
        }
      }

      document.addEventListener("click", handleClickOutside, true);

      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    },
    [dropdownRef, setSettingsDropdown]
  );

  useEffect(
    function () {
      setCurrentTheme(theme);
    },
    [theme]
  );

  return (
    <nav className="relative">
      <Container className={"flex lg:grid lg:grid-cols-12 items-center"}>
        <section className="lg:col-span-3">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={350}
              height={234}
              className="w-16"
              alt="Logo"
            />
          </Link>
        </section>
        <ul
          className={`hidden lg:flex lg:col-span-6 lg:items-center mx-auto gap-12 text-sm`}
        >
          <li className="transition-all">
            <Link
              href={"/"}
              className={`hover:text-primary transition-all ${
                pathname === "/" && "text-primary"
              }`}
            >
              {t("Home")}
            </Link>
          </li>
          <li className="transition-all">
            <Link
              href={"/about"}
              className={`hover:text-primary transition-all ${
                pathname === "/about" && "text-primary"
              }`}
            >
              {t("About_Us")}
            </Link>
          </li>
          <li
            className="hover:bg-blue-100 hover:dark:bg-primary-darkest hover:text-primary-darker hover:dark:text-blue-100 hover:rounded hover:py-1.5 hover:px-3 transition-all"
            onMouseEnter={handleHeaderDropdown}
            onMouseLeave={handleHeaderDropdown}
          >
            <Link href={"/#services"} scroll={false}>
              <span className="flex items-center gap-2 relative">
                <span className="cursor-pointer">{t("Services")}</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <HeaderDropdown show={headerDropdown} theme={currentTheme} />
            </Link>
          </li>
          <li className="transition-all">
            <Link
              href={"/teams"}
              className={`hover:text-primary transition-all ${
                pathname === "/teams" && "text-primary"
              }`}
            >
              {t("Teams")}
            </Link>
          </li>
          <li className="transition-all">
            <Link
              href={"/projects"}
              className={`hover:text-primary transition-all ${
                pathname === "/projects" && "text-primary"
              }`}
            >
              {t("Projects")}
            </Link>
          </li>
        </ul>
        <section className="relative hidden lg:flex items-center gap-4 col-span-3 ms-auto">
          <FontAwesomeIcon
            icon={faGear}
            size="lg"
            className="cursor-pointer"
            ref={dropdownRef}
            onClick={handleSettingsDropdown}
          />
          <div
            style={{ display: settingsDropdownDisplay }}
            className="dropdown absolute top-full right-full select-none transition-all"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: settingsDropdown ? [0.9, 1] : [1, 0.9],
                opacity: settingsDropdown ? [0, 1] : [1, 0],
              }}
              className="dropdown w-[200px] bg-white dark:bg-dark rounded-lg shadow-lg dark:shadow-xl border dark:border-none flex overflow-x-hidden py-4 "
            >
              <motion.div
                animate={{ translateX: `-${currentSettingsPage * 100}%` }}
                className="dropdown min-w-full"
              >
                <section className="dropdown px-6">
                  <h6 className="dropdown flex text-sm items-center gap-2">
                    <FontAwesomeIcon
                      icon={faGears}
                      size="sm"
                      className="dropdown"
                    />
                    <span className="dropdown dark:font-semibold">
                      Settings
                    </span>
                  </h6>
                </section>
                <hr className="dropdown bg-muted dark:bg-muted-dark opacity-30 border-none h-[1px] my-2 mx-4" />
                <ul className="dropdown space-y-1">
                  <li
                    className="dropdown flex items-center justify-between gap-2 text-sm hover:bg-gray-300 hover:dark:bg-black cursor-pointer px-6 py-2"
                    onClick={function () {
                      setThemeSettingsDisplay("block");
                      setLanguageSettingsDisplay("none");
                      setCurrentSettingsPage(1);
                    }}
                  >
                    <section className="dropdown flex items-center gap-2">
                      <FontAwesomeIcon icon={faMoon} className="dropdown" />
                      <span className="dropdown dark:font-semibold">Theme</span>
                    </section>
                    <FontAwesomeIcon icon={faAngleRight} className="dropdown" />
                  </li>
                  <li
                    className="dropdown flex items-center justify-between gap-2 text-sm hover:bg-gray-300 hover:dark:bg-black cursor-pointer px-6 py-2"
                    onClick={function () {
                      setThemeSettingsDisplay("none");
                      setLanguageSettingsDisplay("block");
                      setCurrentSettingsPage(1);
                    }}
                  >
                    <section className="dropdown flex items-center gap-2">
                      <FontAwesomeIcon icon={faEarth} />
                      <span className="dropdown dark:font-semibold">
                        Language
                      </span>
                    </section>
                    <FontAwesomeIcon icon={faAngleRight} className="dropdown" />
                  </li>
                </ul>
              </motion.div>
              <motion.div
                animate={{ translateX: `-${currentSettingsPage * 100}%` }}
                className="dropdown min-w-full"
              >
                <section
                  style={{ display: themeSettingsDisplay }}
                  className="dropdown"
                >
                  <section className="dropdown px-6">
                    <h6
                      className="dropdown flex text-sm items-center gap-2 hover:text-primary cursor-pointer"
                      onClick={function () {
                        setCurrentSettingsPage(0);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faAngleLeft}
                        size="sm"
                        className="dropdown"
                      />
                      <span className="dropdown dark:font-semibold">Back</span>
                    </h6>
                  </section>
                  <hr className="dropdown bg-muted dark:bg-muted-dark opacity-30 border-none h-[1px] my-2 mx-4" />
                  <ul className="dropdown space-y-1">
                    <li
                      className={`dropdown flex items-center justify-between gap-2 text-sm ${
                        currentTheme === "light" &&
                        "!bg-primary-darker hover:!bg-primary-darker text-white"
                      } hover:bg-gray-300 hover:dark:bg-black cursor-pointer px-6 py-2`}
                      onClick={function () {
                        handleSwitchTheme("light");
                      }}
                    >
                      <section className="dropdown flex items-center justify-between w-full">
                        <section className="dropdown flex items-center gap-2">
                          <FontAwesomeIcon icon={faSun} />
                          <span className="dropdown dark:font-semibold">
                            Light
                          </span>
                        </section>
                        {currentTheme === "light" && (
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="dropdown text-white dark:text-primary-darker"
                          />
                        )}
                      </section>
                    </li>
                    <li
                      className={`dropdown flex items-center justify-between gap-2 text-sm ${
                        currentTheme === "dark" &&
                        "!bg-primary-darkest hover:!bg-primary-darkest text-white"
                      } hover:bg-gray-300 hover:dark:bg-black cursor-pointer px-6 py-2`}
                      onClick={function () {
                        handleSwitchTheme("dark");
                      }}
                    >
                      <section className="dropdown flex items-center justify-between w-full">
                        <section className="dropdown flex items-center gap-2">
                          <FontAwesomeIcon icon={faMoon} />
                          <span className="dropdown dark:font-semibold">
                            Dark
                          </span>
                        </section>
                        {currentTheme === "dark" && (
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="dropdown text-white dark:text-primary-darker"
                          />
                        )}
                      </section>
                    </li>
                  </ul>
                </section>
                <section
                  style={{ display: languageSettingsDisplay }}
                  className="dropdown"
                >
                  <section className="dropdown px-6">
                    <h6
                      className="dropdown flex text-sm items-center gap-2 hover:text-primary cursor-pointer"
                      onClick={function () {
                        setCurrentSettingsPage(0);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faAngleLeft}
                        size="sm"
                        className="dropdown"
                      />
                      <span className="dropdown dark:font-semibold">Back</span>
                    </h6>
                  </section>
                  <hr className="dropdown bg-muted dark:bg-muted-dark opacity-30 border-none h-[1px] my-2 mx-4" />
                  <ul className="dropdown space-y-1">
                    <li
                      className={`dropdown flex items-center justify-between gap-2 text-sm hover:bg-gray-300 hover:dark:bg-black ${
                        currentLanguage === "en" &&
                        "!bg-primary-darker dark:!bg-primary-darkest hover:!bg-primary-darker text-white"
                      } cursor-pointer px-6 py-2`}
                      onClick={function () {
                        handleLanguageChange("en");
                      }}
                    >
                      <section className="dropdown flex items-center justify-between w-full">
                        <span className="dropdown dark:font-semibold">
                          English
                        </span>
                        {currentLanguage === "en" && (
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="dropdown text-white dark:text-primary"
                          />
                        )}
                      </section>
                    </li>
                    <li
                      className={`dropdown flex items-center justify-between gap-2 text-sm hover:bg-gray-300 hover:dark:bg-black ${
                        currentLanguage === "tr" &&
                        "!bg-primary-darker dark:!bg-primary-darkest hover:!bg-primary-darker text-white"
                      } cursor-pointer px-6 py-2`}
                      onClick={function () {
                        handleLanguageChange("tr");
                      }}
                    >
                      <section className="dropdown flex items-center justify-between w-full">
                        <span className="dropdown dark:font-semibold">
                          Turkish
                        </span>
                        {currentLanguage === "tr" && (
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="dropdown text-white dark:text-primary"
                          />
                        )}
                      </section>
                    </li>
                  </ul>
                </section>
              </motion.div>
            </motion.div>
          </div>
          <Link href={"/contact"}>
            <Button
              type={"button"}
              variant={"primary"}
              className={"flex items-center gap-2"}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>{t("Contact")}</span>
            </Button>
          </Link>
        </section>
        <section className="block lg:hidden ms-auto">
          <MenuIcon onClick={handleSidebar} />
        </section>
      </Container>
      <Sidebar show={sidebar} handleSidebar={handleSidebar} />
    </nav>
  );
};

export default Navbar;
