import Card from "@/components/ui/Card";
import Image from "next/image";
import { Poppins_300 } from "../_app";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";

const TeamsPage = ({ meta, headings }) => (
  <>
    <Head>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(", ")} />
      <title>{meta.title}</title>
    </Head>
    <section className="py-16 lg:py-24">
      <Container className={"overflow-hidden"}>
        <section className="mb-12 lg:mb-24">
          <p className="text-center lg:w-3/4 lg:mx-auto text-xl">
            {headings.title}
          </p>
          <br />
          <p className="text-center text-xl">{headings.description}</p>
        </section>
        <section id="backend" className="lg:grid lg:grid-cols-12 mb-48">
          <motion.section
            initial={{ x: "-100%" }}
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Card>
              <Card.Header>
                <div
                  className="rounded-3xl shadow-2xl p-1 mb-8"
                  style={{ width: "96px", height: "96px" }}
                >
                  <Image
                    src={"https://img.icons8.com/pulsar-gradient/128/globe.png"}
                    width={128}
                    height={128}
                    alt="Backend"
                  />
                </div>
                <h1 className="text-3xl text-primary mb-3">Backend Team</h1>
                <section className="flex items-center justify-start gap-4">
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={
                        "https://img.icons8.com/fluency/18/graduation-cap.png"
                      }
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Graduation"
                    />
                    <span className="text-muted">Expert</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/color/18/idea.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Idea"
                    />
                    <span className="text-muted">Creative</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/fluency/18/engineering.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Engineering"
                    />
                    <span className="text-muted">Modern</span>
                  </section>
                </section>
              </Card.Header>
              <Card.Body clasName={"my-3"}>
                <p
                  className={`text-muted text-sm lg:w-3/4 ${Poppins_300.className}`}
                >
                  Our team, led by a Senior Software Engineer, is an expert in
                  the field and has years of experience in the most up-to-date
                  technologies.
                </p>
              </Card.Body>
            </Card>
          </motion.section>
          <motion.section
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Image
              src={"/icons/teams/backend.jpeg"}
              width={1224}
              height={720}
              className="rounded-3xl shadow-2xl w-full"
              alt="Backend"
              priority
            />
          </motion.section>
        </section>
        <section
          id="frontend"
          className="flex flex-col lg:grid lg:grid-cols-12 mb-48"
        >
          <motion.section
            initial={{ x: "-100%" }}
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 ${
              typeof window !== "undefined" &&
              window.innerWidth <= 992 &&
              "order-2"
            }`}
          >
            <Image
              src={"/icons/teams/frontend.jpg"}
              width={5000}
              height={3333}
              className="rounded-3xl shadow-2xl w-full"
              alt="Frontend"
              priority
            />
          </motion.section>
          <motion.section
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-end"
          >
            <Card>
              <Card.Header>
                <div
                  className="rounded-3xl shadow-2xl ms-auto p-1 mb-8"
                  style={{ width: "96px", height: "96px" }}
                >
                  <Image
                    src={"https://img.icons8.com/pieces/128/code.png"}
                    width={128}
                    height={128}
                    alt="Frontend"
                  />
                </div>
                <h1 className="text-3xl text-primary mb-3">Frontend Team</h1>
                <section className="flex items-center justify-end gap-4">
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={
                        "https://img.icons8.com/fluency/18/graduation-cap.png"
                      }
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Graduation"
                    />
                    <span className="text-muted">Expert</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/color/18/idea.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Idea"
                    />
                    <span className="text-muted">Creative</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/fluency/18/engineering.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Engineering"
                    />
                    <span className="text-muted">Modern</span>
                  </section>
                </section>
              </Card.Header>
              <Card.Body clasName={"my-3"}>
                <p
                  className={`text-muted text-sm ms-auto lg:w-3/4 ${Poppins_300.className}`}
                >
                  Our expert frontend team works with our design team to develop
                  the most modern interfaces and UI / UX.
                </p>
              </Card.Body>
            </Card>
          </motion.section>
        </section>
        <section id="mobile" className="lg:grid lg:grid-cols-12 mb-48">
          <motion.section
            initial={{ x: "-100%" }}
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Card>
              <Card.Header>
                <div
                  className="rounded-3xl shadow-2xl p-1 mb-8"
                  style={{ width: "96px", height: "96px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/external-prettycons-flat-prettycons/128/external-mobile-development-ui-mobile-prettycons-flat-prettycons.png"
                    }
                    width={128}
                    height={128}
                    alt="Mobile"
                  />
                </div>
                <h1 className="text-3xl text-primary mb-3">Mobile Team</h1>
                <section className="flex items-center justify-start gap-4">
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={
                        "https://img.icons8.com/fluency/18/graduation-cap.png"
                      }
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Graduation"
                    />
                    <span className="text-muted">Expert</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/color/18/idea.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Idea"
                    />
                    <span className="text-muted">Creative</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/fluency/18/engineering.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Engineering"
                    />
                    <span className="text-muted">Modern</span>
                  </section>
                </section>
              </Card.Header>
              <Card.Body clasName={"my-3"}>
                <p
                  className={`text-muted text-sm lg:w-3/4 ${Poppins_300.className}`}
                >
                  Our team uses the most modern and high-performance application
                  development technologies for both cross and native platforms.
                </p>
              </Card.Body>
            </Card>
          </motion.section>
          <motion.section
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Image
              src={"/icons/teams/mobile.png"}
              width={2068}
              height={1213}
              className="rounded-3xl shadow-2xl w-full"
              alt="Frontend"
              priority
            />
          </motion.section>
        </section>
        <section
          id="social"
          className="flex flex-col lg:grid lg:grid-cols-12 mb-48"
        >
          <motion.section
            initial={{ x: "-100%" }}
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 ${
              typeof window !== "undefined" &&
              window.innerWidth <= 992 &&
              "order-2"
            }`}
          >
            <Image
              src={"/icons/teams/social_media.jpg"}
              width={1600}
              height={840}
              className="rounded-3xl shadow-2xl w-full"
              alt="Frontend"
              priority
            />
          </motion.section>
          <motion.section
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-end"
          >
            <Card>
              <Card.Header>
                <div
                  className="rounded-3xl shadow-2xl ms-auto p-1 mb-8"
                  style={{ width: "96px", height: "96px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/external-flaticons-flat-flat-icons/128/external-media-industry-flaticons-flat-flat-icons.png"
                    }
                    width={128}
                    height={128}
                    alt="Frontend"
                  />
                </div>
                <h1 className="text-3xl text-primary mb-3">
                  Social Media Team
                </h1>
                <section className="flex items-center justify-end gap-4">
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={
                        "https://img.icons8.com/fluency/18/graduation-cap.png"
                      }
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Graduation"
                    />
                    <span className="text-muted">Expert</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/color/18/idea.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Idea"
                    />
                    <span className="text-muted">Creative</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/fluency/18/engineering.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Engineering"
                    />
                    <span className="text-muted">Modern</span>
                  </section>
                </section>
              </Card.Header>
              <Card.Body clasName={"my-3"}>
                <p
                  className={`text-muted text-sm ms-auto lg:w-3/4 ${Poppins_300.className}`}
                >
                  With the social media consultancy service we provide, we
                  organize your posts, analyze the statistics specific to your
                  page and offer you the best plan.
                </p>
              </Card.Body>
            </Card>
          </motion.section>
        </section>
        <section id="design" className="lg:grid lg:grid-cols-12 mb-48">
          <motion.section
            initial={{ x: "-100%" }}
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Card>
              <Card.Header>
                <div
                  className="rounded-3xl shadow-2xl p-1 mb-8"
                  style={{ width: "96px", height: "96px" }}
                >
                  <Image
                    src={"https://img.icons8.com/pieces/128/design.png"}
                    width={128}
                    height={128}
                    alt="Mobile"
                  />
                </div>
                <h1 className="text-3xl text-primary mb-3">Design Team</h1>
                <section className="flex items-center justify-start gap-4">
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={
                        "https://img.icons8.com/fluency/18/graduation-cap.png"
                      }
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Graduation"
                    />
                    <span className="text-muted">Expert</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/color/18/idea.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Idea"
                    />
                    <span className="text-muted">Creative</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/fluency/18/engineering.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Engineering"
                    />
                    <span className="text-muted">Modern</span>
                  </section>
                </section>
              </Card.Header>
              <Card.Body clasName={"my-3"}>
                <p
                  className={`text-muted text-sm lg:w-3/4 ${Poppins_300.className}`}
                >
                  Our dynamic and creative team is passionate about creativity
                  and discovery and spends this energy on producing digital
                  design products.
                </p>
              </Card.Body>
            </Card>
          </motion.section>
          <motion.section
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Image
              src={"/icons/teams/design.jpeg"}
              width={1080}
              height={720}
              className="rounded-3xl shadow-2xl w-full"
              alt="Frontend"
              priority
            />
          </motion.section>
        </section>
        <section
          id="devops"
          className="flex flex-col lg:grid lg:grid-cols-12 mb-48"
        >
          <motion.section
            initial={{ x: "-100%" }}
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 ${
              typeof window !== "undefined" &&
              window.innerWidth <= 992 &&
              "order-2"
            }`}
          >
            <Image
              src={"/icons/teams/devops.jpg"}
              width={1600}
              height={960}
              className="rounded-3xl shadow-2xl w-full"
              alt="Frontend"
              priority
            />
          </motion.section>
          <motion.section
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "0%"] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-end"
          >
            <Card>
              <Card.Header>
                <div
                  className="rounded-3xl shadow-2xl ms-auto p-1 mb-8"
                  style={{ width: "96px", height: "96px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/external-flatart-icons-flat-flatarticons/128/external-settings-statistical-analysis-flatart-icons-flat-flatarticons.png"
                    }
                    width={128}
                    height={128}
                    alt="Frontend"
                  />
                </div>
                <h1 className="text-3xl text-primary mb-3">Devops Team</h1>
                <section className="flex items-center justify-end gap-4">
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={
                        "https://img.icons8.com/fluency/18/graduation-cap.png"
                      }
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Graduation"
                    />
                    <span className="text-muted">Expert</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/color/18/idea.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Idea"
                    />
                    <span className="text-muted">Creative</span>
                  </section>
                  <section className="flex items-center gap-1 text-sm">
                    <Image
                      src={"https://img.icons8.com/fluency/18/engineering.png"}
                      width={18}
                      height={18}
                      className="opacity-50"
                      alt="Engineering"
                    />
                    <span className="text-muted">Modern</span>
                  </section>
                </section>
              </Card.Header>
              <Card.Body clasName={"my-3"}>
                <p
                  className={`text-muted text-sm ms-auto lg:w-3/4 ${Poppins_300.className}`}
                >
                  The team ensures the monitoring of processes and products, the
                  scalability and sustainability of projects,the best version.
                </p>
              </Card.Body>
            </Card>
          </motion.section>
        </section>
      </Container>
    </section>
  </>
);

export async function getServerSideProps() {
  const response = await fetch("https://911development.com/api/teams");
  const { data } = await response.json();

  const { meta, headings } = data;

  return {
    props: {
      meta,
      headings,
    },
  };
}

export default TeamsPage;
