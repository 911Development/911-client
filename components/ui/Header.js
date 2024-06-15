import { Poppins_400 } from "@/pages/_app";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Header = () => {
  return (
    <header className={`sticky top-0 py-6 z-50 bg-white dark:bg-black`}>
      <Navbar />
    </header>
  );
};

export default Header;
