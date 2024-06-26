import Image from "next/image";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Container from "../Container";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative bg-primary dark:bg-primary-darkest mt-56 py-12">
    <Container className={"text-white"}>
      <section className="lg:grid lg:grid-cols-12 mb-8 lg:mb-0">
        <section className="lg:col-span-6 mb-48 lg:mb-0">
          <motion.section
            initial={{ y: "50%" }}
            whileInView={{ y: ["50%", "-20%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-0 -translate-y-1/2 lg:-translate-y-1/4 w-3/4 lg:w-1/3"
          >
            <Image
              src={"/icons/mockups/911_cad_mockup.png"}
              width={350}
              height={234}
              alt="911 CAD Mockup"
            />
          </motion.section>
          <section className="absolute hidden lg:block bottom-10 left-10">
            <Image
              src={"/logo.png"}
              className="opacity-30 w-32"
              width={120}
              height={120}
              alt="Watermark"
            />
          </section>
        </section>
        <section className="lg:col-span-6">
          <section className="text-center lg:text-start mb-12">
            <h1 className="text-2xl font-semibold mb-2">
              Follow us on social media
            </h1>
            <section className="flex items-center justify-center lg:justify-start gap-3">
              <section className="bg-white rounded">
                <Link
                  href={"https://www.linkedin.com/company/911development/"}
                  target="_blank"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent font-semibold text-sm py-2 px-4"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-900"
                  />
                  <span>LinkedIn</span>
                </Link>
              </section>
              <section className="bg-white rounded">
                <Link
                  href={"https://www.instagram.com/911development/"}
                  target="_blank"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm py-2 px-4"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-purple-500"
                  />
                  <span>Instagram</span>
                </Link>
              </section>
            </section>
          </section>
          <section className="text-center lg:text-start mb-12">
            <h1 className="text-2xl font-semibold mb-2">
              Subscribe to our email list
            </h1>
            <p className="lg:w-3/4">
              By subscribing to our mailing list, you can be informed about
              updates and stay up to date.
            </p>
          </section>
          <section className="relative lg:w-3/4 mb-12">
            <input
              type="email"
              placeholder="send your email"
              className="border rounded-full outline-none focus:border-primary-darker text-dark w-full text-sm p-4 transition-all"
            />
            <Button
              type={"button"}
              variant={"primary"}
              className={
                "flex items-center gap-2 absolute top-1/2 -translate-y-1/2 right-2 rounded-full"
              }
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Send</span>
            </Button>
          </section>
          <section className="grid grid-cols-12">
            <section className="col-span-4 lg:col-span-2 mb-8 lg:mb-0">
              <h1 className="text-lg font-semibold mb-1">Menu</h1>
              <ul>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-300 hover:text-white hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-300 hover:text-white hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-300 hover:text-white hover:underline"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-300 hover:text-white hover:underline"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-300 hover:text-white hover:underline"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </section>
            <section className="col-span-8 lg:col-span-10">
              <h1 className="text-lg font-semibold mb-1">Contact Us</h1>
              <ul className="text-sm">
                <li>Email: 911developmentcomp@gmail.com</li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <p className="text-sm lg:hidden">
        © 911 CAD {new Date().getFullYear()}, All rights reserved.
      </p>
    </Container>
  </footer>
);

export default Footer;
