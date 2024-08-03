import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage = ({ meta }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>{meta.title}</title>
      </Head>
      <section className="py-32 lg:py-48">
        <Container>
          <section>
            <h1 className="text-2xl text-primary text-center font-semibold mb-8">
              {/* {headings.title} */}
              {t("aboutpage_title")}
            </h1>
            <p className="lg:w-3/4 text-center mx-auto mb-8 last:mb-0">
              {t("aboutpage_descriptions.0")}
            </p>
            <p className="lg:w-3/4 text-center mx-auto mb-8 last:mb-0">
              {t("aboutpage_descriptions.1")}
            </p>{" "}
            <p className="lg:w-3/4 text-center mx-auto mb-8 last:mb-0">
              {t("aboutpage_descriptions.2")}
            </p>
          </section>
          <section className="grid grid-cols-12 items-start my-48">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-3"
            >
              <Card>
                <Card.Header>
                  <p className="text-orange-500">
                    <span className="text-3xl">+3</span>
                    <br />
                    {t("Business_partner")}
                  </p>
                </Card.Header>
                <Card.Body clasName={"my-2"}>
                  <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                    {t("Business_partner_description")}
                  </p>
                </Card.Body>
              </Card>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-3"
            >
              <Card>
                <Card.Header>
                  <p className="text-purple-500">
                    <span className="text-3xl">+7</span>
                    <br />
                    {t("Project")}
                  </p>
                </Card.Header>
                <Card.Body clasName={"my-2"}>
                  <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                    {t("Project_description")}
                  </p>
                </Card.Body>
              </Card>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-3"
            >
              <Card>
                <Card.Header>
                  <p className="text-green-500">
                    <span className="text-3xl">+2</span>
                    <br />
                    {t("Office")}
                  </p>
                </Card.Header>
                <Card.Body clasName={"my-2"}>
                  <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                    {t("Office_description")}
                  </p>
                </Card.Body>
              </Card>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              viewport={{ once: true }}
              className="col-span-6 lg:col-span-3"
            >
              <Card>
                <Card.Header>
                  <p className="text-red-500">
                    <span className="text-3xl">+12</span>
                    <br />
                    {t("Employees")}
                  </p>
                </Card.Header>
                <Card.Body clasName={"my-2"}>
                  <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                    {t("Employees_description")}
                  </p>
                </Card.Body>
              </Card>
            </motion.section>
          </section>
        </Container>
      </section>
    </>
  );
};

export async function getServerSideProps({ locale }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/meta/about`);
  const { data } = await response.json();

  const { meta } = data;

  return {
    props: {
      meta,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default AboutPage;
