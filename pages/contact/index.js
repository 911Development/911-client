import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";

const ContactPage = () => (
  <>
    <Head>
      <meta
        name="description"
        content="911 Creativity & Software Development Company | Where creativity  meets code, innovative solutions are born, transforming ideas into reality and pushing the boundaries of what's possible in the digital world."
      />
      <meta
        name="keywords"
        content="911 development, 911 CAD, contact 911, contact 911 cad, contact 911 CAD, contact 911 development, contact 911 creativity, 911 software, 911 software, 911 creativity, 911 Creativity and Development, 911 Creativity & Development, kıbrıs 911, kibris 911, kıbrısevim, kibrisevim"
      />
      <title>
        Contact us | 911 Creativity & Software Development Company | Where
        creativity meets code
      </title>
    </Head>
    <section className="py-16 lg:py-24">
      <Container>
        <section className="mb-12">
          <h1 className="text-3xl text-center text-primary mb-3">
            Let's get to know you
          </h1>
          <p className="text text-center text-muted">
            Contact us for your projects or questions. We will get back to you
            as soon as possible.
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
              <section className="grid grid-cols-12 gap-3 mb-4 lg:mb-0">
                <section className="col-span-4 lg:col-span-3 flex items-center justify-center gap-1 bg-white dark:bg-dark border dark:border-gray-600 rounded-md">
                  <Image
                    src={
                      "https://img.icons8.com/fluency/22/turkey-circular.png"
                    }
                    width={22}
                    height={22}
                    alt="Turkey"
                  />
                  <span>Turkey</span>
                </section>
                <section className="col-span-8 lg:col-span-9">
                  <section className="relative">
                    <Input
                      type={"phone"}
                      name={"phone"}
                      placeholder={"Phone"}
                      label={"Phone"}
                    />
                  </section>
                </section>
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
                className={"flex items-center justify-center gap-2 w-full py-4"}
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

export default ContactPage;
