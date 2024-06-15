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
        className="absolute bg-white dark:bg-dark lg:w-3/4 xl:w-1/2 w-full top-full left-1/2 -translate-x-1/2 rounded shadow-2xl overflow-hidden select-none transition-all z-50"
      >
        <section className="grid grid-cols-12 p-8 mb-4">
          <section className="col-span-4 text-primary">
            <h1 className="text-lg mb-4">Design</h1>
            <section className="grid grid-cols-12 gap-3">
              <section className="col-span-6">
                <ul className="text-muted space-y-4">
                  <li className="inline-block bg-blue-100 dark:bg-primary-darkest text-primary-darker dark:text-light rounded-md">
                    <span className="block px-1 text-nowrap">Web Design</span>
                  </li>
                  <li className="text-nowrap">Mobile Design</li>
                  <li className="inline-block bg-blue-100 dark:bg-primary-darkest text-primary-darker dark:text-light rounded-md">
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
          <section className="col-span-5 text-center">
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
                  <li className="inline-block bg-blue-100 dark:bg-primary-darkest text-primary-darker dark:text-light rounded-md">
                    <span className="block px-1 text-nowrap">Web Apps</span>
                  </li>
                  <li>Wordpress</li>
                </ul>
              </section>
            </section>
          </section>
          <section className="col-span-3 text-end">
            <h1 className="text-lg text-primary text-end mb-4">Other</h1>
            <ul className="text-muted space-y-4 ms-auto">
              <li className="text-nowrap">Social Media</li>
              <li className="inline-block bg-blue-100 dark:bg-primary-darkest text-primary-darker dark:text-light rounded-md">
                <span className="block px-1 text-nowrap">
                  Digital Marketing
                </span>
              </li>
              <li className="text-nowrap">SEO Analysis</li>
            </ul>
          </section>
        </section>
        <div className="flex items-center justify-center px-8 bg-gradient-to-r from-primary-darkest to-primary text-white py-6">
          <p>
            All our services are prepared professionally with the most
            up-to-date technologies.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderDropdown;
