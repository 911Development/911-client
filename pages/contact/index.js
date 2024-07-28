import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ContactPage = ({ meta }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>{meta.title}</title>
      </Head>
      <section className="py-16 lg:py-24">
        <Container>
          <section className="mb-12">
            <h1 className="text-3xl text-center text-primary mb-3">
              {t("contactpage_title")}
            </h1>
            <p className="text text-center text-muted dark:text-muted-dark">
              {t("contactpage_description")}
            </p>
          </section>
          <section>
            <section className="lg:grid lg:grid-cols-12 lg:gap-3 lg:w-3/4 mx-auto">
              <section className="col-span-6">
                <section className="relative mb-4">
                  <Input
                    type={"text"}
                    name={"fullname"}
                    placeholder={"Fullname"}
                    label={"Fullname"}
                  />
                </section>
                <section className="relative mb-4">
                  <Input
                    type={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    label={"Email"}
                  />
                </section>
              </section>
              <section className="col-span-6">
                <textarea
                  placeholder="Your message"
                  className="w-full h-full bg-white dark:bg-black text-sm rounded-md border dark:border-gray-600 focus:border-primary outline-none transition-all py-3 px-2.5 mb-3"
                  style={{ resize: "none" }}
                />
                <Button
                  type={"button"}
                  variant={"primary"}
                  className={
                    "flex items-center justify-center gap-2 w-full py-4"
                  }
                >
                  <span>Send</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/meta/contact`);
  const { data } = await response.json();

  const { meta } = data;

  return {
    props: {
      meta,
    },
  };
}

export default ContactPage;
