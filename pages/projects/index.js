import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Exo2_700 } from "../_app";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { intersectingSliceActions } from "@/store/intersecting-slice/intersecting-slice";

const ProjectsPage = () => {
  const dispatch = useDispatch();

  const [ref, isIntersecting] = useIntersectionObserver({
    // root: typeof document !== "undefined" && document.getElementById("project"),
    root: null,
    rootMargin: "0%",
    threshold: 0.1,
  });

  useEffect(() => {
    dispatch(intersectingSliceActions.setIntersectingOnDark(isIntersecting));
  }, [isIntersecting]);

  return (
    <section className="py-32 lg:py-48 overflow-hidden !min-w-full">
      <Container>
        <section id="kibrisevim" className="lg:grid lg:grid-cols-12 mb-48">
          <section className="lg:col-span-4 mb-16 lg:mb-0">
            <motion.section
              initial={{ y: -25 }}
              whileInView={{
                y: [-25, 0],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              className="block lg:hidden mb-16"
            >
              <Image
                src={"/icons/apps/kibrisevim_dark.png"}
                width={350}
                height={125}
                className="w-2/3 mx-auto"
                alt="Kibrisevim Logo"
              />
            </motion.section>
            <motion.section
              initial={{ x: "-100%" }}
              whileInView={{
                x: ["-100%", "0%"],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/icons/mockups/kibrisevim_mockup.png"}
                width={2207}
                height={3160}
                className="w-1/2 lg:w-auto mx-auto"
                alt="Kibrisevim Mockup"
              />
            </motion.section>
          </section>
          <section className="col-span-8 lg:text-end">
            <motion.section
              initial={{ y: -25 }}
              whileInView={{
                y: [-25, 0],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden lg:block mb-12"
            >
              <Image
                src={"/icons/apps/kibrisevim_dark.png"}
                width={350}
                height={125}
                className="w-1/3 ms-auto"
                alt="Kibrisevim Logo"
              />
            </motion.section>
            <section className="mb-6">
              <h1 className="text-2xl text-center lg:text-end mb-6 lg:mb-2">
                <strong className="text-dark">Kıbrıs</strong>
                <strong>evim |</strong> Real Estate Application
              </h1>
              <p className="text-lg text-muted text-center mx-auto block lg:hidden">
                Find the real estate you are looking for among thousands of
                listings now! Filter them and find the cheapest prices!
              </p>
              <p className="text-lg text-muted w-2/3 ms-auto hidden lg:block">
                Find the real estate you are looking for among thousands of
                listings now! Filter them and find the cheapest prices!
              </p>
            </section>
            <section>
              <Link href={"https://kibrisevim.com/"} target="_blank">
                <Button
                  type={"button"}
                  variant={"primary"}
                  className={"hidden lg:flex items-center gap-2 ms-auto"}
                >
                  <span>Go to the proejct</span>
                </Button>
                <Button
                  type={"button"}
                  variant={"primary"}
                  className={"flex lg:hidden items-center gap-2 mx-auto"}
                >
                  <span>Go to the proejct</span>
                </Button>
              </Link>
            </section>
          </section>
        </section>
      </Container>
      <section ref={ref} id="ellie" className="bg-black text-white py-48 mb-48">
        <Container className={"lg:grid lg:grid-cols-12"}>
          <section className="lg:col-span-4 mb-16 lg:mb-0">
            <motion.section
              initial={{ y: -25 }}
              whileInView={{
                y: [-25, 0],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              className="block lg:hidden mb-16"
            >
              <h1 className={`text-6xl text-center ${Exo2_700.className}`}>
                ELLIE
              </h1>
            </motion.section>
            <motion.section
              initial={{ x: "-100%" }}
              whileInView={{
                x: ["-100%", "0%"],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/icons/apps/ellie.png"}
                width={960}
                height={843}
                className="w-9/12 mx-auto lg:w-auto"
                alt="Ellie"
              />
            </motion.section>
          </section>
          <section className="lg:col-span-8 text-end">
            <motion.section
              initial={{ y: -25 }}
              whileInView={{
                y: [-25, 0],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden lg:block mb-12"
            >
              <h1 className={`text-6xl ${Exo2_700.className}`}>ELLIE</h1>
            </motion.section>
            <section className="text-center lg:text-end mb-6">
              <h1 className="text-2xl mb-6 lg:mb-2">
                <strong>ELLIE |</strong> Smart Home Assistant
              </h1>
              <p className="block lg:hidden text-lg text-muted text-center mx-auto">
                Build your perfect smart home with Ellie Smart Home Assistant.
                Your home, smarter than ever before!
              </p>
              <p className="hidden lg:block text-lg text-muted w-2/3 ms-auto">
                Build your perfect smart home with Ellie Smart Home Assistant.
                Your home, smarter than ever before!
              </p>
            </section>
            <section>
              <Link href={"https://www.elliesmarthome.com/"} target="_blank">
                <Button
                  type={"button"}
                  variant={"primary"}
                  className={"flex lg:hidden items-center gap-2 mx-auto"}
                >
                  <span>Go to the proejct</span>
                </Button>
                <Button
                  type={"button"}
                  variant={"primary"}
                  className={"hidden lg:flex items-center gap-2 ms-auto"}
                >
                  <span>Go to the proejct</span>
                </Button>
              </Link>
            </section>
          </section>
        </Container>
      </section>
      <Container className={"hidden lg:block"}>
        <section
          id="aristocratgolf"
          className="lg:grid lg:grid-cols-12 items-center"
        >
          <section className="lg:col-span-6">
            <motion.section
              initial={{ y: -25 }}
              whileInView={{
                y: [-25, 0],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Image
                src={"/icons/apps/aristocratgolf.png"}
                width={350}
                height={125}
                className="w-1/3"
                alt="Kibrisevim Logo"
              />
            </motion.section>
            <section className="mb-6">
              <h1 className="text-2xl mb-2">
                <strong>Aristocrat |</strong> Golf Club
              </h1>
              <p className="text-lg text-muted w-2/3">
                Stay Updated with Aristocrat Tourism!
              </p>
              <p className="text-lg text-muted w-2/3">
                Aristocrat Tourism served as a gathering spot for local golfers,
                but it quickly began to attract interest from surrounding
                regions.
              </p>
            </section>
            <section>
              <Link href={"https://upgolf.onrender.com/"} target="_blank">
                <Button
                  type={"button"}
                  variant={"primary"}
                  className={"flex items-center gap-2"}
                >
                  <span>Go to the proejct</span>
                </Button>
              </Link>
            </section>
          </section>
          <section className="col-span-6">
            <motion.section
              initial={{ x: "100%" }}
              whileInView={{
                x: ["100%", "0%"],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/icons/mockups/aristocratgolf_mockup.png"}
                width={2591}
                height={2506}
                className="w-full ms-auto"
                alt="Aristocratgolf Mockup"
              />
            </motion.section>
          </section>
        </section>
      </Container>
      <Container className={"block lg:hidden"}>
        <section id="aristocratgolf">
          <section className="mb-16">
            <motion.section
              initial={{ x: "100%" }}
              whileInView={{
                x: ["100%", "0%"],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/icons/mockups/aristocratgolf_mockup.png"}
                width={2591}
                height={2506}
                className="w-full mx-auto"
                alt="Aristocratgolf Mockup"
              />
            </motion.section>
          </section>
          <section>
            <motion.section
              initial={{ y: -25 }}
              whileInView={{
                y: [-25, 0],
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Image
                src={"/icons/apps/aristocratgolf.png"}
                width={350}
                height={125}
                className="w-1/3 mx-auto"
                alt="Aristocrat Golf Logo"
              />
            </motion.section>
            <section className="text-center mb-6">
              <h1 className="text-2xl mb-2">
                <strong>Aristocrat |</strong> Golf Club
              </h1>
              <p className="text-lg text-muted">
                Stay Updated with Aristocrat Tourism!
              </p>
              <p className="text-lg text-muted">
                Aristocrat Tourism served as a gathering spot for local golfers,
                but it quickly began to attract interest from surrounding
                regions.
              </p>
            </section>
            <section>
              <Link href={"https://upgolf.onrender.com/"} target="_blank">
                <Button
                  type={"button"}
                  variant={"primary"}
                  className={"flex items-center gap-2 mx-auto"}
                >
                  <span>Go to the proejct</span>
                </Button>
              </Link>
            </section>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default ProjectsPage;
