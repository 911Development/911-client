import Card from "@/components/ui/Card";
import Image from "next/image";
import { Poppins_300 } from "../_app";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const TeamsPage = ({ meta }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>{meta.title}</title>
      </Head>
      <section className="py-32 lg:py-48">
        <Container className={"overflow-hidden"}>
          <section className="mb-12 lg:mb-24">
            <p className="text-center lg:w-3/4 lg:mx-auto text-xl">
              {t("teamspage_title")}
            </p>
            <br />
            <p className="text-center text-xl">{t("teamspage_description")}</p>
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
                      src={
                        "https://img.icons8.com/pulsar-gradient/128/globe.png"
                      }
                      width={128}
                      height={128}
                      alt="Backend"
                    />
                  </div>
                  <h1 className="text-3xl text-primary mb-3">
                    {t("Backend_Team")}
                  </h1>
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
                      <span className="text-muted dark:text-muted-dark">
                        {t("Expert")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={"https://img.icons8.com/color/18/idea.png"}
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Idea"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Creative")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={
                          "https://img.icons8.com/fluency/18/engineering.png"
                        }
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Engineering"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Modern")}
                      </span>
                    </section>
                  </section>
                </Card.Header>
                <Card.Body clasName={"my-3"}>
                  <p
                    className={`text-muted dark:text-muted-dark text-sm lg:w-3/4 ${Poppins_300.className}`}
                  >
                    {t("Backend_Team_Description")}
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
                  <h1 className="text-3xl text-primary mb-3">
                    {t("Frontend_Team")}
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
                      <span className="text-muted dark:text-muted-dark">
                        {t("Expert")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={"https://img.icons8.com/color/18/idea.png"}
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Idea"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Creative")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={
                          "https://img.icons8.com/fluency/18/engineering.png"
                        }
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Engineering"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Modern")}
                      </span>
                    </section>
                  </section>
                </Card.Header>
                <Card.Body clasName={"my-3"}>
                  <p
                    className={`text-muted dark:text-muted-dark text-sm ms-auto lg:w-3/4 ${Poppins_300.className}`}
                  >
                    {t("Frontend_Team_Description")}
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
                  <h1 className="text-3xl text-primary mb-3">
                    {t("Mobile_Team")}
                  </h1>
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
                      <span className="text-muted dark:text-muted-dark">
                        {t("Expert")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={"https://img.icons8.com/color/18/idea.png"}
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Idea"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Creative")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={
                          "https://img.icons8.com/fluency/18/engineering.png"
                        }
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Engineering"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Modern")}
                      </span>
                    </section>
                  </section>
                </Card.Header>
                <Card.Body clasName={"my-3"}>
                  <p
                    className={`text-muted dark:text-muted-dark text-sm lg:w-3/4 ${Poppins_300.className}`}
                  >
                    {t("Mobile_Team_Description")}
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
                    {t("Social_Media_Team")}
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
                      <span className="text-muted dark:text-muted-dark">
                        {t("Expert")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={"https://img.icons8.com/color/18/idea.png"}
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Idea"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Creative")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={
                          "https://img.icons8.com/fluency/18/engineering.png"
                        }
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Engineering"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Modern")}
                      </span>
                    </section>
                  </section>
                </Card.Header>
                <Card.Body clasName={"my-3"}>
                  <p
                    className={`text-muted dark:text-muted-dark text-sm ms-auto lg:w-3/4 ${Poppins_300.className}`}
                  >
                    {t("Social_Media_Team_Description")}
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
                  <h1 className="text-3xl text-primary mb-3">
                    {t("Design_Team")}
                  </h1>
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
                      <span className="text-muted dark:text-muted-dark">
                        {t("Expert")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={"https://img.icons8.com/color/18/idea.png"}
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Idea"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Creative")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={
                          "https://img.icons8.com/fluency/18/engineering.png"
                        }
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Engineering"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Modern")}
                      </span>
                    </section>
                  </section>
                </Card.Header>
                <Card.Body clasName={"my-3"}>
                  <p
                    className={`text-muted dark:text-muted-dark text-sm lg:w-3/4 ${Poppins_300.className}`}
                  >
                    {t("Design_Team_Description")}
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
                  <h1 className="text-3xl text-primary mb-3">
                    {t("Devops_Team")}
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
                      <span className="text-muted dark:text-muted-dark">
                        {t("Expert")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={"https://img.icons8.com/color/18/idea.png"}
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Idea"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Creative")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={
                          "https://img.icons8.com/fluency/18/engineering.png"
                        }
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Engineering"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Modern")}
                      </span>
                    </section>
                  </section>
                </Card.Header>
                <Card.Body clasName={"my-3"}>
                  <p
                    className={`text-muted dark:text-muted-dark text-sm ms-auto lg:w-3/4 ${Poppins_300.className}`}
                  >
                    {t("Devops_Team_Description")}
                  </p>
                </Card.Body>
              </Card>
            </motion.section>
          </section>
          <section
            id="digital-marketing"
            className="lg:grid lg:grid-cols-12 mb-48"
          >
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
                        "https://img.icons8.com/avantgarde/128/commercial.png"
                      }
                      width={128}
                      height={128}
                      alt="Mobile"
                    />
                  </div>
                  <h1 className="text-3xl text-primary mb-3">
                    {t("Digital_Marketing")}
                  </h1>
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
                      <span className="text-muted dark:text-muted-dark">
                        {t("Expert")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={"https://img.icons8.com/color/18/idea.png"}
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Idea"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Creative")}
                      </span>
                    </section>
                    <section className="flex items-center gap-1 text-sm">
                      <Image
                        src={
                          "https://img.icons8.com/fluency/18/engineering.png"
                        }
                        width={18}
                        height={18}
                        className="opacity-50"
                        alt="Engineering"
                      />
                      <span className="text-muted dark:text-muted-dark">
                        {t("Modern")}
                      </span>
                    </section>
                  </section>
                </Card.Header>
                <Card.Body clasName={"my-3"}>
                  <p
                    className={`text-muted dark:text-muted-dark text-sm lg:w-3/4 ${Poppins_300.className}`}
                  >
                    {t("Digital_Marketing_Service_Description")}
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
                src={"/icons/teams/digital-marketing.png"}
                width={1080}
                height={720}
                className="rounded-3xl shadow-2xl w-full"
                alt="Frontend"
                priority
              />
            </motion.section>
          </section>
        </Container>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/meta/teams`);
  const { data } = await response.json();

  const { meta } = data;

  return {
    props: {
      meta,
    },
  };
}

export default TeamsPage;
