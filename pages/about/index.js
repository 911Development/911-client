import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import Head from "next/head";

const AboutPage = ({ meta, headings }) => (
  <>
    <Head>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(", ")} />
      <title>{meta.title}</title>
    </Head>
    <section className="py-16 lg:py-24">
      <Container>
        <section>
          <h1 className="text-2xl text-primary text-center font-semibold mb-8">
            {headings.title}
          </h1>
          {headings.descriptions.map((description, index) => (
            <p
              className="lg:w-3/4 text-center mx-auto mb-8 last:mb-0"
              key={index}
            >
              {description}
            </p>
          ))}
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
                  Business partner
                </p>
              </Card.Header>
              <Card.Body clasName={"my-2"}>
                <p className="text-sm text-muted line-clamp-3">
                  Our business partners who support and guide us as we move
                  ourselves and our company further
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
                  Project
                </p>
              </Card.Header>
              <Card.Body clasName={"my-2"}>
                <p className="text-sm text-muted line-clamp-3">
                  More than 7 projects that have been delivered and that we are
                  still working on
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
                  Office
                </p>
              </Card.Header>
              <Card.Body clasName={"my-2"}>
                <p className="text-sm text-muted line-clamp-3">
                  Our head office is in Kyrenia, and we have a total of 2
                  offices
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
                  Employees
                </p>
              </Card.Header>
              <Card.Body clasName={"my-2"}>
                <p className="text-sm text-muted line-clamp-3">
                  More than 12 employees in total, whom we have trained from the
                  infrastructure, accompanied by our expert staff in their
                  fields
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/meta/about`);
  const { data } = await response.json();

  const { meta, headings } = data;

  return {
    props: {
      meta,
      headings,
    },
  };
}

export default AboutPage;
