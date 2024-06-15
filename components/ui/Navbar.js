import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Container from "../Container";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faSun } from "@fortawesome/free-solid-svg-icons";
import HeaderDropdown from "../HeaderDropdown";
import MenuIcon from "./MenuIcon";
import Sidebar from "../Sidebar";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [headerDropdown, setHeaderDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [themeIcon, setThemeICon] = useState("");

  const { pathname } = router;
  const { theme } = themeState;

  const handleHeaderDropdown = () => setHeaderDropdown(!headerDropdown);
  const handleSidebar = () => setSidebar(!sidebar);

  const handleSwitchTheme = () =>
    dispatch(themeSliceActions.setTheme(theme === "dark" ? "light" : "dark"));

  useEffect(() => {
    if (theme === "dark") setThemeICon("/icons/themes/light.png");
    if (theme === "light") setThemeICon("/icons/themes/dark.png");
  }, [theme]);

  return (
    <nav className="relative">
      <Container className={"flex lg:grid lg:grid-cols-12 items-center"}>
        <section className="lg:col-span-3">
          <Link href={"/"} className="text-primary text-2xl font-semibold">
            911 CAD
          </Link>
        </section>
        <ul
          className={`hidden lg:flex lg:col-span-6 lg:items-center mx-auto gap-12 text-sm`}
        >
          <li className="transition-all">
            <Link
              href={"/"}
              className={`hover:text-primary ${
                pathname === "/" && "text-primary transition-all"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="transition-all">
            <Link
              href={"/about"}
              className={`hover:text-primary ${
                pathname === "/about" && "text-primary transition-all"
              }`}
            >
              About Us
            </Link>
          </li>
          <li
            className="hover:bg-blue-100 hover:dark:bg-primary-darkest hover:text-primary-darker hover:dark:text-blue-100 hover:rounded hover:py-1.5 hover:px-3 transition-all"
            onMouseEnter={handleHeaderDropdown}
            onMouseLeave={handleHeaderDropdown}
          >
            <Link href={"/#services"} scroll={false}>
              <span className="flex items-center gap-2 relative">
                <span className="cursor-pointer">Services</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <HeaderDropdown show={headerDropdown} theme={theme} />
            </Link>
          </li>
          <li className="transition-all">
            <Link
              href={"/teams"}
              className={`hover:text-primary ${
                pathname === "/teams" && "text-primary"
              }`}
            >
              Teams
            </Link>
          </li>
          <li className="transition-all">
            <Link
              href={"/projects"}
              className={`hover:text-primary ${
                pathname === "/projects" && "text-primary"
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>
        <section className="hidden lg:flex items-center gap-4 col-span-3 ms-auto">
          <Image
            src={themeIcon}
            width={96}
            height={96}
            className="w-9 cursor-pointer rounded hover:bg-light hover:dark:bg-dark transition-all p-1"
            onClick={handleSwitchTheme}
            alt="Theme Icon"
          />
          <Link href={"/contact"}>
            <Button
              type={"button"}
              variant={"primary"}
              className={"flex items-center gap-2"}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Contact</span>
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
