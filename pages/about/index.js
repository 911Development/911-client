import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <section>
          <h1 className="text-2xl text-primary text-center font-semibold mb-4">
            About 911 CAD
          </h1>
          <p className="lg:w-3/4 text-center mx-auto">
            Focusing on the technologies of the future, 911 CAD Company was
            established after two years of service. Our goal is to be the best
            in our service areas. As we get better every day with our young and
            dynamic staff, we incorporate new technologies.
          </p>
          <br />
          <p className="lg:w-3/4 text-center mx-auto">
            We are aware of the value of doing our job and the value of our
            employees. For this reason, we always strive to improve working
            conditions for our team. We know that a good team will take us
            better with good teamwork.
          </p>
          <br />
          <p className="lg:w-3/4 text-center mx-auto">
            With completely original projects and unique designs, all of
            Zalisoft's teams are always with you to create the product that
            suits your needs.
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
  );
};

export default AboutPage;
