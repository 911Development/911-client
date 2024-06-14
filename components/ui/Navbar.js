import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Container from "../Container";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import HeaderDropdown from "../HeaderDropdown";
import MenuIcon from "./MenuIcon";
import Sidebar from "../Sidebar";
// import Offcanvas from "../Offcanvas";

const Navbar = ({ isInterSectingOnDark }) => {
  const router = useRouter();
  const { pathname } = router;

  const [headerDropdown, setHeaderDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleHeaderDropdown = () => setHeaderDropdown(!headerDropdown);
  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="relative">
      <Container className={"flex lg:grid lg:grid-cols-12 items-center"}>
        <section className="lg:col-span-3">
          <Link href={"/"} className="text-primary text-2xl font-semibold">
            {/* <Image
              src={"/logo.png"}
              className="w-20 drop-shadow-2xl"
              width={765}
              height={506}
              alt="Logo"
              priority
            /> */}
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
            className="hover:bg-blue-100 hover:text-primary-darker hover:rounded hover:py-1.5 hover:px-3 transition-all"
            onMouseEnter={handleHeaderDropdown}
            onMouseLeave={handleHeaderDropdown}
          >
            <Link href={"/#services"} scroll={false}>
              <span className="flex items-center gap-2 relative">
                <span className="cursor-pointer">Services</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <HeaderDropdown show={headerDropdown} />
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
        <section className="hidden lg:block col-span-3 ms-auto">
          <Button
            type={"button"}
            variant={"primary"}
            className={"flex items-center gap-2"}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Contact</span>
          </Button>
        </section>
        <section className="block lg:hidden ms-auto">
          <MenuIcon onClick={handleSidebar} />
        </section>
      </Container>
      <Sidebar
        show={sidebar}
        handleSidebar={handleSidebar}
        isInterSectingOnDark={true}
      />
    </nav>
  );
};

export default Navbar;
