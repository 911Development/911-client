import Button from "./ui/Button";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeaderDropdown = ({ show }) => {
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (show) setDisplay("block");

    const identifier = setTimeout(() => {
      if (!show) setDisplay("none");
    }, 500);

    return () => clearTimeout(identifier);
  }, [show]);

  return (
    <div style={{ display: display }}>
      <motion.div
        animate={{
          opacity: show ? 1 : 0,
        }}
        transition={{ delay: 0.25 }}
        className="bg-white absolute lg:w-3/4 xl:w-1/2 w-full top-full left-1/2 -translate-x-1/2 rounded shadow-2xl overflow-hidden select-none transition-all z-50"
      >
        <section className="grid grid-cols-12 py-12 px-8 mb-4">
          <section className="col-span-4 text-primary">
            <h1 className="text-lg mb-4">Design</h1>
            <section className="grid grid-cols-12 gap-3">
              <section className="col-span-6">
                <ul className="text-muted space-y-4">
                  <li className="inline-block bg-blue-100 text-primary-darker rounded-md">
                    <span className="block px-1 text-nowrap">Web Design</span>
                  </li>
                  <li className="text-nowrap">Mobile Design</li>
                  <li className="inline-block bg-blue-100 text-primary-darker rounded-md">
                    <span className="block px-1 text-nowrap">UI / UX</span>
                  </li>
                </ul>
              </section>
              <section className="col-span-6">
                <ul className="text-muted space-y-4">
                  <li>Logo Design</li>
                  <li>Photoshop</li>
                </ul>
              </section>
            </section>
          </section>
          <section className="col-span-4 text-center">
            <h1 className="text-lg mb-4 text-primary">Development</h1>
            <section className="grid grid-cols-12">
              <section className="col-span-6">
                <ul className="text-muted space-y-4">
                  <li>Website</li>
                  <li>Frontend</li>
                  <li>Backend</li>
                </ul>
              </section>
              <section className="col-span-6">
                <ul className="text-muted space-y-4">
                  <li>Mobile Apps</li>
                  <li className="inline-block bg-blue-100 text-primary-darker rounded-md">
                    <span className="block px-1 text-nowrap">Web Apps</span>
                  </li>
                  <li>Wordpress</li>
                </ul>
              </section>
            </section>
          </section>
          <section className="col-span-4 text-end">
            <h1 className="text-lg text-primary text-end mb-4">Other</h1>
            <ul className="text-muted space-y-4 ms-auto">
              <li className="text-nowrap">Social Media</li>
              <li className="inline-block bg-blue-100 text-primary-darker rounded-md">
                <span className="block px-1 text-nowrap">
                  Digital Marketing
                </span>
              </li>
              <li className="text-nowrap">SEO Analysis</li>
            </ul>
          </section>
        </section>
        <div className="flex items-center justify-between px-8 bg-gradient-to-r from-primary-darker to-primary-lighter text-white py-4">
          <p>
            If you cannot find the service you are looking for, you can contact
            us.
          </p>
          <Button
            type={"button"}
            variant={"primary-inverse"}
            className={
              "flex items-center gap-2 rounded-full hover:bg-primary-darker"
            }
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Contact</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderDropdown;
