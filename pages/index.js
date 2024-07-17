import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const router = useRouter();

  const [currentServicePage, setCurrentServicePage] = useState(0);
  const [currentTeamsPage, setCurrentTeamsPage] = useState(0);

  const handleNextTeams = () => {
    if (currentTeamsPage < 1) setCurrentTeamsPage(currentTeamsPage + 1);
    else setCurrentTeamsPage(currentTeamsPage - 1);
  };

  const handlePreviousTeams = () => {
    if (currentTeamsPage > 0) setCurrentTeamsPage(currentTeamsPage - 1);
    else setCurrentTeamsPage(currentTeamsPage + 1);
  };

  const nextService = () => {
    if (currentServicePage < 1) setCurrentServicePage(currentServicePage + 1);
    else setCurrentServicePage(currentServicePage - 1);
  };

  const previousService = () => {
    if (currentServicePage > 0) setCurrentServicePage(currentServicePage - 1);
    else setCurrentServicePage(currentServicePage + 1);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="911 CAD, 911 Creativity & Software Development Company | Where creativity  meets code, innovative solutions are born, transforming ideas into reality and pushing the boundaries of what's possible in the digital world."
        />
        <meta
          name="keywords"
          content="911 development, 911 CAD, 911 cad, 911cad, 911 software development, 911 creativity, 911 software, 911 Creativity and Development, 911 Creativity & Development, kibris 911, kıbrıs 911, kıbrısevim, kibrisevim"
        />
        <title>
          911 CAD | 911 Creativity & Software Development Company | Where
          creativity meets code
        </title>
      </Head>
      <section className="py-16 lg:py-24">
        <Container>
          <section className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-primary mb-8">
              911 CAD | CREATIVITY & SOFTWARE DEVELOPMENT
            </h1>
            <p className="mx-auto lg:w-1/2">
              "911 Development: Where&nbsp;
              <strong className="text-primary font-normal">creativity</strong>
              &nbsp; meets&nbsp;
              <strong className="text-primary font-normal">code</strong>,
              innovative solutions are born, transforming ideas into reality and
              pushing the boundaries of what's possible in the digital world."
            </p>
          </section>
          <section className="relative w-11/12 lg:w-1/2 text-center mx-auto my-16">
            <input
              type="email"
              placeholder="send your email"
              className=" w-full border rounded-full outline-none text-sm bg-white dark:bg-dark dark:border-gray-600 focus:border-primary focus:dark:border-primary-darker p-4 transition-all"
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
          <section className="w-3/4 lg:w-1/3 mx-auto my-32">
            <section className="flex items-center justify-center mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.2 }}
              >
                <div
                  className="relative group backdrop-blur-lg flex items-center justify-center bg-white dark:bg-dark rounded-lg shadow hover:shadow-lg transition-all p-2"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={"https://img.icons8.com/nolan/192/code--v2.png"}
                    width={48}
                    height={48}
                    alt="Development"
                  />
                  <span className="absolute opacity-0 group-hover:block group-hover:opacity-100 bg-white dark:bg-dark dark:border-none text-xs rounded-md border p-3 -right-full group-hover:translate-x-1/2 select-none transition-all">
                    Development
                  </span>
                </div>
              </motion.div>
            </section>
            <section className="flex items-center justify-end mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.1 }}
              >
                <div
                  className="relative group backdrop-blur-lg flex items-center justify-center bg-white dark:bg-dark rounded-lg shadow hover:shadow-lg transition-all p-2"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={"https://img.icons8.com/nolan/192/fantasy.png"}
                    width={48}
                    height={48}
                    alt="Magic"
                  />
                  <span className="absolute opacity-0 group-hover:block group-hover:opacity-100 bg-white dark:bg-dark dark:border-none text-xs rounded-md border p-3 -top-4 group-hover:-translate-y-1/2 select-none transition-all">
                    Creativity
                  </span>
                </div>
              </motion.div>
            </section>
            <section className="flex items-center justify-start mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.2 }}
              >
                <div
                  className="relative group backdrop-blur-lg flex items-center justify-center bg-white dark:bg-dark rounded-lg shadow hover:shadow-lg transition-all p-2"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/nolan/192/1A6DFF/C822FF/ookla-speedtest.png"
                    }
                    width={48}
                    height={48}
                    alt="Development"
                  />
                  <span className="absolute opacity-0 group-hover:block group-hover:opacity-100 bg-white dark:bg-dark dark:border-none text-xs rounded-md border p-3 -top-4 group-hover:-translate-y-1/2 select-none transition-all">
                    SEO
                  </span>
                </div>
              </motion.div>
            </section>
            <section className="flex items-center justify-center mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className="relative group backdrop-blur-lg flex items-center justify-center bg-white dark:bg-dark rounded-lg shadow hover:shadow-lg transition-all p-2"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/nolan/192/positive-dynamic.png"
                    }
                    width={48}
                    height={48}
                    alt="Marketing"
                  />
                  <span className="absolute opacity-0 group-hover:block group-hover:opacity-100 bg-white dark:bg-dark dark:border-none text-xs rounded-md text-center border p-3 top-1/2 group-hover:translate-y-1/2 select-none transition-all z-50">
                    Digital Marketing
                  </span>
                </div>
              </motion.div>
            </section>
            <section className="flex items-center justify-end mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className="relative group backdrop-blur-lg flex items-center justify-center bg-white dark:bg-dark rounded-lg shadow hover:shadow-lg transition-all p-2"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/nolan/192/1A6DFF/C822FF/windows10-personalization.png"
                    }
                    width={48}
                    height={48}
                    alt="Design"
                  />
                  <span className="absolute opacity-0 group-hover:block group-hover:opacity-100 bg-white dark:bg-dark dark:border-none text-xs rounded border p-3 -top-4 group-hover:-translate-y-1/2 select-none transition-all z-50">
                    Design
                  </span>
                </div>
              </motion.div>
            </section>
            <section className="flex items-center justify-start">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="relative group backdrop-blur-lg flex items-center justify-center bg-white dark:bg-dark rounded-lg shadow hover:shadow-lg transition-all p-2"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/nolan/192/1A6DFF/C822FF/web.png"
                    }
                    width={48}
                    height={48}
                    alt="UI/UX"
                  />
                  <span className="absolute opacity-0 group-hover:block group-hover:opacity-100 bg-white dark:bg-dark dark:border-none text-xs rounded-md border p-3 top-1/2 group-hover:translate-y-1/2 select-none transition-all z-50">
                    UI/UX
                  </span>
                </div>
              </motion.div>
            </section>
            <section className="flex items-center justify-center mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className="relative group backdrop-blur-lg flex items-center justify-center bg-white dark:bg-dark rounded-lg shadow hover:shadow-lg transition-all p-2"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Image
                    src={
                      "https://img.icons8.com/nolan/192/1A6DFF/C822FF/connected-people.png"
                    }
                    width={48}
                    height={48}
                    alt="Social Media"
                  />
                  <span className="absolute opacity-0 group-hover:block group-hover:opacity-100 bg-white dark:bg-dark dark:border-none text-xs rounded-md border p-3 -right-full group-hover:translate-x-1/2 select-none transition-all">
                    Social Media
                  </span>
                </div>
              </motion.div>
            </section>
          </section>
          <section className="grid grid-cols-12 items-stretch gap-4 my-48">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-white dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-white dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
                    More than 7 projects that have been delivered and that we
                    are still working on
                  </p>
                </Card.Body>
              </Card>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-white dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.75 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-white dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
                    More than 12 employees in total, whom we have trained from
                    the infrastructure, accompanied by our expert staff in their
                    fields
                  </p>
                </Card.Body>
              </Card>
            </motion.section>
          </section>
        </Container>
        <section className="my-48 hidden lg:block relative">
          <h1 className="text-center text-primary font-semibold text-2xl mb-4">
            Our Teams
          </h1>
          <Container className={"relative"}>
            <section
              id="teams"
              className="flex items-center flex-nowrap overflow-x-hidden mb-8 select-none"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <motion.section
                animate={{
                  translateX: `${currentTeamsPage * -100}%`,
                }}
                className="grid grid-cols-12 gap-4 min-w-full"
              >
                <section className="col-span-4">
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">
                        Backend Team
                      </h1>
                      <section className="flex items-center justify-evenly">
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
                            src={
                              "https://img.icons8.com/fluency/18/engineering.png"
                            }
                            width={18}
                            height={18}
                            className="opacity-50"
                            alt="Engineering"
                          />
                          <span className="text-muted">Modern</span>
                        </section>
                      </section>
                    </Card.Header>
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted text-sm">
                        Our team, led by a Senior Software Engineer, is an
                        expert in the field and has years of experience in the
                        most up-to-date technologies.
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#backend"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>See the team</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">
                        Frontend Team
                      </h1>
                      <section className="flex items-center justify-evenly">
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
                            src={
                              "https://img.icons8.com/fluency/18/engineering.png"
                            }
                            width={18}
                            height={18}
                            className="opacity-50"
                            alt="Engineering"
                          />
                          <span className="text-muted">Modern</span>
                        </section>
                      </section>
                    </Card.Header>
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted text-sm">
                        Our expert frontend team works with our design team to
                        develop the most modern interfaces, technologies and UI
                        / UX.
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#frontend"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>See the team</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">Mobile Team</h1>
                      <section className="flex items-center justify-evenly">
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
                            src={
                              "https://img.icons8.com/fluency/18/engineering.png"
                            }
                            width={18}
                            height={18}
                            className="opacity-50"
                            alt="Engineering"
                          />
                          <span className="text-muted">Modern</span>
                        </section>
                      </section>
                    </Card.Header>
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted text-sm">
                        Our team uses the most modern and high-performance
                        application development technologies for both cross and
                        native platforms.
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#mobile"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>See the team</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </section>
              </motion.section>
              <motion.section
                animate={{
                  translateX: `${currentTeamsPage * -100}%`,
                }}
                className="grid grid-cols-12 gap-4 min-w-full"
              >
                <section className="col-span-4">
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">
                        Social Media Team
                      </h1>
                      <section className="flex items-center justify-evenly">
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
                            src={
                              "https://img.icons8.com/fluency/18/engineering.png"
                            }
                            width={18}
                            height={18}
                            className="opacity-50"
                            alt="Engineering"
                          />
                          <span className="text-muted">Modern</span>
                        </section>
                      </section>
                    </Card.Header>
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted text-sm">
                        With the social media consultancy we provide, we
                        organize your posts, analyze the statistics specific to
                        your page and offer you the best plan.
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#social"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>See the team</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">Design Team</h1>
                      <section className="flex items-center justify-evenly">
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
                            src={
                              "https://img.icons8.com/fluency/18/engineering.png"
                            }
                            width={18}
                            height={18}
                            className="opacity-50"
                            alt="Engineering"
                          />
                          <span className="text-muted">Modern</span>
                        </section>
                      </section>
                    </Card.Header>
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted text-sm">
                        Our dynamic and creative team is passionate about
                        creativity and discovery and spends this energy on
                        producing digital design products.
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#design"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>See the team</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">DevOps Team</h1>
                      <section className="flex items-center justify-evenly">
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
                            src={
                              "https://img.icons8.com/fluency/18/engineering.png"
                            }
                            width={18}
                            height={18}
                            className="opacity-50"
                            alt="Engineering"
                          />
                          <span className="text-muted">Modern</span>
                        </section>
                      </section>
                    </Card.Header>
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted text-sm">
                        The team ensures the monitoring of processes and
                        products, the scalability and sustainability of
                        projects,the best version.
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#devops"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>See the team</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </section>
              </motion.section>
            </section>
            <section className="flex items-center justify-center gap-2">
              <span
                className={`inline-block ${
                  currentTeamsPage === 0 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={handlePreviousTeams}
              />
              <span
                className={`inline-block ${
                  currentTeamsPage === 1 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={handleNextTeams}
              />
            </section>
          </Container>
          <span>
            <Image
              src={
                "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"
              }
              width={48}
              height={48}
              className="absolute top-1/2 left-6 -translate-y-1/2 cursor-pointer rotate-90 hover:scale-110 opacity-40 dark:opacity-90 hover:dark:opacity-100 hover:opacity-90 transition-all"
              onClick={handlePreviousTeams}
              alt="Previous"
            />
          </span>
          <span>
            <Image
              src={
                "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"
              }
              width={48}
              height={48}
              className="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer -rotate-90 hover:scale-110 opacity-40 dark:opacity-90 hover:dark:opacity-100 hover:opacity-90 transition-all"
              onClick={handleNextTeams}
              alt="Next"
            />
          </span>
        </section>
        <section className="my-48 lg:hidden">
          <h1 className="text-center text-primary font-semibold text-2xl mb-4">
            Our Teams
          </h1>
          <Container>
            <section
              id="teams"
              className="flex items-center flex-nowrap gap-4 overflow-x-scroll snap-mandatory snap-x select-none"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <section className="min-w-72 snap-center snap-always">
                <Card
                  className={
                    "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-3"
                  }
                >
                  <Card.Header clasName={"text-center"}>
                    <h1 className="text-primary text-xl mb-2">Backend Team</h1>
                    <section className="flex items-center justify-evenly">
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
                          src={
                            "https://img.icons8.com/fluency/18/engineering.png"
                          }
                          width={18}
                          height={18}
                          className="opacity-50"
                          alt="Engineering"
                        />
                        <span className="text-muted">Modern</span>
                      </section>
                    </section>
                  </Card.Header>
                  <Card.Body clasName={"text-center my-5"}>
                    <p className="text-muted text-sm line-clamp-3">
                      Our team, led by a Senior Software Engineer, is an expert
                      in the field and has years of experience in the most
                      up-to-date technologies.
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Link href={"/teams/#backend"}>
                      <Button
                        type={"button"}
                        variant={"primary-link"}
                        className={"flex items-center gap-2 mx-auto py-2.5"}
                      >
                        <span>See the team</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </section>
              <section className="min-w-72 snap-center snap-always">
                <Card
                  className={
                    "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-3"
                  }
                >
                  <Card.Header clasName={"text-center"}>
                    <h1 className="text-primary text-xl mb-2">Frontend Team</h1>
                    <section className="flex items-center justify-evenly">
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
                          src={
                            "https://img.icons8.com/fluency/18/engineering.png"
                          }
                          width={18}
                          height={18}
                          className="opacity-50"
                          alt="Engineering"
                        />
                        <span className="text-muted">Modern</span>
                      </section>
                    </section>
                  </Card.Header>
                  <Card.Body clasName={"text-center my-5"}>
                    <p className="text-muted text-sm line-clamp-3">
                      Our expert frontend team works with our design team to
                      develop the most modern interfaces and UI / UX.
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Link href={"/teams/#frontend"}>
                      <Button
                        type={"button"}
                        variant={"primary-link"}
                        className={"flex items-center gap-2 mx-auto py-2.5"}
                      >
                        <span>See the team</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </section>
              <section className="min-w-72 snap-center snap-always">
                <Card
                  className={
                    "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-3"
                  }
                >
                  <Card.Header clasName={"text-center"}>
                    <h1 className="text-primary text-xl mb-2">Mobile Team</h1>
                    <section className="flex items-center justify-evenly">
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
                          src={
                            "https://img.icons8.com/fluency/18/engineering.png"
                          }
                          width={18}
                          height={18}
                          className="opacity-50"
                          alt="Engineering"
                        />
                        <span className="text-muted">Modern</span>
                      </section>
                    </section>
                  </Card.Header>
                  <Card.Body clasName={"text-center my-5"}>
                    <p className="text-muted text-sm line-clamp-3">
                      Our team uses the most modern and high-performance
                      application development technologies for both cross and
                      native platforms.
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Link href={"/teams/#mobile"}>
                      <Button
                        type={"button"}
                        variant={"primary-link"}
                        className={"flex items-center gap-2 mx-auto py-2.5"}
                      >
                        <span>See the team</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </section>
              <section className="min-w-72 snap-center snap-always">
                <Card
                  className={
                    "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-3"
                  }
                >
                  <Card.Header clasName={"text-center"}>
                    <h1 className="text-primary text-xl mb-2">
                      Social Media Team
                    </h1>
                    <section className="flex items-center justify-evenly">
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
                          src={
                            "https://img.icons8.com/fluency/18/engineering.png"
                          }
                          width={18}
                          height={18}
                          className="opacity-50"
                          alt="Engineering"
                        />
                        <span className="text-muted">Modern</span>
                      </section>
                    </section>
                  </Card.Header>
                  <Card.Body clasName={"text-center my-5"}>
                    <p className="text-muted text-sm line-clamp-3">
                      With the social media consultancy service we provide, we
                      organize your posts, analyze the statistics specific to
                      your page and offer you the best plan.
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Link href={"/teams/#social"}>
                      <Button
                        type={"button"}
                        variant={"primary-link"}
                        className={"flex items-center gap-2 mx-auto py-2.5"}
                      >
                        <span>See the team</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </section>
              <section className="min-w-72 snap-center snap-always">
                <Card
                  className={
                    "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-3"
                  }
                >
                  <Card.Header clasName={"text-center"}>
                    <h1 className="text-primary text-xl mb-2">Design Team</h1>
                    <section className="flex items-center justify-evenly">
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
                          src={
                            "https://img.icons8.com/fluency/18/engineering.png"
                          }
                          width={18}
                          height={18}
                          className="opacity-50"
                          alt="Engineering"
                        />
                        <span className="text-muted">Modern</span>
                      </section>
                    </section>
                  </Card.Header>
                  <Card.Body clasName={"text-center my-5"}>
                    <p className="text-muted text-sm line-clamp-3">
                      Our dynamic and creative team is passionate about
                      creativity and discovery and spends this energy on
                      producing digital design products.
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Link href={"/teams/#design"}>
                      <Button
                        type={"button"}
                        variant={"primary-link"}
                        className={"flex items-center gap-2 mx-auto py-2.5"}
                      >
                        <span>See the team</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </section>
              <section className="min-w-72 snap-center snap-always">
                <Card
                  className={
                    "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-3"
                  }
                >
                  <Card.Header clasName={"text-center"}>
                    <h1 className="text-primary text-xl mb-2">DevOps Team</h1>
                    <section className="flex items-center justify-evenly">
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
                          src={
                            "https://img.icons8.com/fluency/18/engineering.png"
                          }
                          width={18}
                          height={18}
                          className="opacity-50"
                          alt="Engineering"
                        />
                        <span className="text-muted">Modern</span>
                      </section>
                    </section>
                  </Card.Header>
                  <Card.Body clasName={"text-center my-5"}>
                    <p className="text-muted text-sm line-clamp-3">
                      The team ensures the monitoring of processes and products,
                      the scalability and sustainability of projects,the best
                      version.
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Link href={"/teams/#devops"}>
                      <Button
                        type={"button"}
                        variant={"primary-link"}
                        className={"flex items-center gap-2 mx-auto py-2.5"}
                      >
                        <span>See the team</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </section>
            </section>
          </Container>
        </section>
        <section id="services" className="hidden lg:block relative my-48">
          <Container>
            <h1 className="text-center text-primary font-semibold text-2xl mb-4">
              Our Services
            </h1>
            <section
              className="flex items-start flex-nowrap overflow-x-hidden mb-8 select-none"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <motion.section
                animate={{
                  translateX: `${currentServicePage * -100}%`,
                }}
                className="min-w-full grid grid-cols-12 items-stretch gap-6 px-2"
              >
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/web_design.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">Web Design</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        Our own design team brings your dream website &
                        requirements to the digital & virtual environment. We
                        help you make your website unique, and stand out from
                        your competitors.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/mobile_design.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Mobile Design"
                      />
                      <h1 className="text-primary text-xl">Mobile Design</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        Our own design team brings your dream mobile application
                        to the digital environment. We help you make your mobile
                        application unique and stand out from your competitors.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/backend.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Backend"
                      />
                      <h1 className="text-primary text-xl">Backend</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        You don't have to have us do your projects from start to
                        finish. If you are not lacking in frontend and design
                        but need help with the backend, we are here for you.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/logo_design.png"}
                        width={676}
                        height={652}
                        className="w-24 mb-4 mx-auto"
                        alt="Logo Design"
                        priority
                      />
                      <h1 className="text-primary text-xl">Logo Design</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-3">
                        An impressive logo is an indispensable part of a brand.
                        We offer you the most modern, and the best design by
                        finding the best colors, tint and fonts for your brand.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/frontend.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Frontend"
                      />
                      <h1 className="text-primary text-xl">Frontend</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        You may only need support in the frontend area. In this
                        case, we help you complete your project by combining the
                        design you presented to us and our backend and frontend
                        knowledge.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/website.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Website"
                      />
                      <h1 className="text-primary text-xl">Website</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        We create and deliver the website you want, from start
                        to finish [A-Z] zero to expert, with design and coding,
                        in a way that best suits, solutions, and implementations
                        your budget & requirements.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
              <motion.section
                animate={{
                  translateX: `${currentServicePage * -100}%`,
                }}
                className="min-w-full grid grid-cols-12 gap-6 px-2"
              >
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/social_media.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Social Media"
                      />
                      <h1 className="text-primary text-xl">
                        Social Media Consultancy
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-3">
                        We organize your posts with the social media consultancy
                        we provide, and offer you the best plan by considering
                        statistics specific to your page.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/digital_marketing.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">
                        Digital Marketing
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-3">
                        Unlock the full potential of your brand with our premier
                        digital marketing services, designed to elevate your
                        company's online presence.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-4">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/seo.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">SEO Consultancy</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-3">
                        Elevate your company's online visibility and drive
                        organic traffic with our expert SEO services. Our team
                        of seasoned professionals employs cutting-edge
                        techniques
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
              <span>
                <Image
                  src={
                    "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"
                  }
                  width={48}
                  height={48}
                  className="absolute top-1/2 left-6 -translate-y-1/2 cursor-pointer rotate-90 hover:scale-110 opacity-40 dark:opacity-90 hover:dark:opacity-100 hover:opacity-90 transition-all"
                  onClick={previousService}
                  alt="Previous"
                />
              </span>
              <span>
                <Image
                  src={
                    "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"
                  }
                  width={48}
                  height={48}
                  className="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer -rotate-90 hover:scale-110 opacity-40 dark:opacity-90 hover:dark:opacity-100 hover:opacity-90 transition-all"
                  onClick={nextService}
                  alt="Next"
                />
              </span>
            </section>
            <section className="flex items-center justify-center gap-2">
              <span
                className={`inline-block ${
                  currentServicePage === 0 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={previousService}
              />
              <span
                className={`inline-block ${
                  currentServicePage === 1 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={nextService}
              />
            </section>
          </Container>
        </section>
        <section className="block lg:hidden relative my-48">
          <Container>
            <h1 className="text-center text-primary font-semibold text-2xl mb-4">
              Our Services
            </h1>
            <section
              className="flex items-start flex-nowrap gap-3 overflow-x-scroll snap-mandatory snap-x select-none"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <motion.section className="min-w-full grid grid-cols-12 gap-4 snap-center snap-always">
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/web_design.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">Web Design</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        Our own design team brings your dream website to the
                        digital environment. We help you make your website
                        unique and stand out from your competitors.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/mobile_design.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">Mobile Design</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        Our own design team brings your dream mobile application
                        to the digital environment. We help you make your mobile
                        application unique and stand out from your competitors.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/backend.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">Backend</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        You don't have to have us do your projects from start to
                        finish. If you are not lacking in frontend and design
                        but need help with the backend, we are here for you.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/logo_design.png"}
                        width={680}
                        height={680}
                        className="w-20 mb-4 mx-auto"
                        alt="Logo Design"
                      />
                      <h1 className="text-primary text-xl">Logo Design</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        An impressive logo is an indispensable part of a brand.
                        We offer you the most modern design by finding the best
                        colors and fonts for your brand.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
              <motion.section className="min-w-full grid grid-cols-12 gap-4 snap-center snap-always">
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/frontend.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">Frontend</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        You may only need support in the frontend area. In this
                        case, we help you complete your project by combining the
                        design you presented to us and our backend and frontend
                        knowledge.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/website.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">Website</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        We create and deliver the website you want, from start
                        to finish, with design and coding, in a way that best
                        suits your budget.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/social_media.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">
                        Social Media Consultancy
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        We organize your posts with the social media consultancy
                        we provide, and offer you the best plan by considering
                        statistics specific to your page.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/digital_marketing.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">
                        Digital Marketing
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        Unlock the full potential of your brand with our premier
                        digital marketing services, designed to elevate your
                        company's online presence.
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
              <motion.section className="min-w-full grid grid-cols-12 gap-4 snap-center snap-always">
                <section className="col-span-6">
                  <Card
                    className={
                      "shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg text-center"
                    }
                  >
                    <Card.Header>
                      <Image
                        src={"/icons/services/seo.png"}
                        width={676}
                        height={652}
                        className="w-20 mb-4 mx-auto"
                        alt="Web Design"
                      />
                      <h1 className="text-primary text-xl">SEO Consultancy</h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted line-clamp-4">
                        Elevate your company's online visibility and drive
                        organic traffic with our expert SEO services. Our team
                        of seasoned professionals employs cutting-edge
                        techniques
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
            </section>
          </Container>
        </section>
        <section className="bg-black dark:!bg-transparent text-white my-48 py-24 lg:py-32">
          <Container>
            <section className="flex flex-col lg:flex-row items-center justify-center mb-24 lg:mb-32">
              <Image
                src={"/icons/apps/kibrisevim_light.svg"}
                width={350}
                height={125}
                className="w-64 mb-6 lg:mb-auto"
                alt="Kibrisevim"
              />
              <h1 className="text-2xl lg:text-3xl text-center font-semibold">
                Kıbrısevim | Apartments for sale & rent, and houses
              </h1>
            </section>
            <section className="lg:grid lg:grid-cols-12 lg:gap-6 mb-32">
              <motion.section
                initial={{ x: "-100%" }}
                whileInView={{ x: ["-100%", "0%"] }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-4 mb-24 lg:mb-auto"
              >
                <Image
                  src={"/icons/mockups/kibrisevim_mockup.png"}
                  width={2207}
                  height={3160}
                  className="w-3/4 lg:w-full mx-auto lg:ms-auto"
                  alt="Kibrisevim Mockup"
                />
              </motion.section>
              <section className="lg:col-span-8 flex flex-col lg:items-end">
                <p className="text-3xl lg:text-6xl font-semibold text-center lg:text-end leading-snug mb-24">
                  House <strong className="text-primary">rental</strong>{" "}
                  and&nbsp;
                  <strong className="text-primary">buying</strong> application
                  is now in Cyprus! Moreover, all regions are supported!
                </p>
                <ul className="list-disc lg:ps-6 self-center text-xl mb-24">
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    Rent a house
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
                    viewport={{ once: true }}
                  >
                    Buy a house
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    Filter as you wish!
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Find cheapest prices!
                  </motion.li>
                </ul>
                <Link
                  href={"https://kibrisevim.com/"}
                  target="_blank"
                  className="mx-auto mb-24"
                >
                  <Button
                    type={"button"}
                    variant={"primary-outline"}
                    className={"flex items-center gap-2"}
                  >
                    <span>Go to the App!</span>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />
                  </Button>
                </Link>
              </section>
            </section>
            <section className="text-center">
              <Link href={"/projects"}>
                <Button
                  type={"button"}
                  variant={"primary-inverse"}
                  className={"flex items-center gap-2 mx-auto !font-semibold"}
                >
                  <span className="text-xs">Show More Projects</span>
                  <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </Button>
              </Link>
            </section>
          </Container>
        </section>
      </section>
    </>
  );
}
