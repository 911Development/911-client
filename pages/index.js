import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import {
  faAngleDown,
  faAngleRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import useInput from "@/hooks/useInput";
import { useMutation } from "react-query";
import { sendEmail } from "@/utils/helpers";
import Toast from "@/components/ui/Toast";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Quote from "@/components/Quote";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useDispatch } from "react-redux";
import { intersectingSliceActions } from "@/store/intersecting-slice/intersecting-slice";
import { Poppins_900 } from "./_app";

const carouselReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "nextTeam": {
      let currentTeam = state.team;

      if (currentTeam < 1) currentTeam += 1;
      else currentTeam -= 1;

      return {
        ...state,
        team: currentTeam,
      };
    }

    case "previousTeam": {
      let currentTeam = state.team;

      if (currentTeam > 0) currentTeam -= 1;
      else currentTeam += 1;

      return {
        ...state,
        team: currentTeam,
      };
    }

    case "nextService": {
      let currentService = state.service;

      if (currentService < 1) currentService += 1;
      else currentService -= 1;

      return {
        ...state,
        service: currentService,
      };
    }

    case "previousService": {
      let currentService = state.service;

      if (currentService > 0) currentService -= 1;
      else currentService += 1;

      return {
        ...state,
        service: currentService,
      };
    }
  }

  return state;
};

const carouselInitialState = {
  team: 0,
  service: 0,
};

export default function Home({ meta }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const [headerRef, isHeaderRefIntersecting] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const [carouselState, carouselStateDispatch] = useReducer(
    carouselReducer,
    carouselInitialState
  );

  const [currentLanguage, setCurrentLanguage] = useState("");
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);

  const {
    state: {
      value: email,
      isValid: isEmailValid,
      isError: isEmailError,
      errorMessage: emailErrorMessage,
    },
    handleOnChange: handleEmailOnChange,
    handleOnBlur: handleEmailOnBlur,
    handleOnClear: handleEmailOnClear,
  } = useInput();

  const { language } = i18n;

  const sendEmailMutation = useMutation({
    mutationKey: "sendEmail",
    mutationFn: sendEmail,
    onSuccess: function (data) {
      setToast(true);
      setToastMessage(
        currentLanguage === "en" ? data.message.en : data.message.tr
      );
      setToastVariant(data.status);

      if (data.status === "success") handleEmailOnClear("email");
    },
  });

  function handleEmailSubmit(e) {
    e.preventDefault();

    if (isEmailError) setShowEmailError(true);
    else {
      setShowEmailError(false);
      if (isFormValid) sendEmailMutation.mutate({ email });
    }
  }

  useEffect(
    function () {
      const identifier = setTimeout(function () {
        setIsFormValid(isEmailValid);
      }, 150);

      return () => clearTimeout(identifier);
    },
    [isEmailValid]
  );

  useEffect(
    function () {
      setCurrentLanguage(language);
    },
    [language]
  );

  useEffect(
    function () {
      dispatch(
        intersectingSliceActions.setisHeaderIntersecting(
          isHeaderRefIntersecting
        )
      );
    },
    [isHeaderRefIntersecting]
  );

  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>
          911 CAD | 911 Creativity & Software Development Company | Where
          creativity meets code
        </title>
      </Head>
      <header
        ref={headerRef}
        className="relative w-full h-screen lg:h-[70vh] xl:h-[80vh] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center xl:object-right"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <section className="absolute  rounded-lg xl:backdrop-blur-0 py-24 xl:py-0 w-full lg:w-3/4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Container className={"lg:!px-0"}>
            <section>
              <section className="text-center xl:text-start mb-8">
                <h2
                  className={`text-sm inline-block text-secondary drop-shadow-2xl tracking-[.35rem] mb-12 xl:mb-6 ${Poppins_900.className}`}
                >
                  {t("homepage_subtitle")}
                </h2>
                <h1 className="text-4xl font-semibold text-primary mb-6">
                  {t("homepage_title")}
                </h1>
                <p className="xl:w-1/2 lg:w-3/4 text-center mx-auto xl:text-justify xl:ms-0 text-white xl:text-muted-dark">
                  {t("homepage_description")}
                </p>
              </section>
              <section className="w-11/12 xl:w-1/2 mx-auto xl:ms-0 mb-8">
                <section className="relative lg:mb-0">
                  <form onSubmit={handleEmailSubmit}>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("send_your_email")}
                      className="w-full border rounded-full outline-none text-sm bg-white dark:bg-dark dark:border-gray-600 focus:border-primary focus:dark:border-primary-darker p-4 transition-all"
                      value={email}
                      onChange={handleEmailOnChange}
                      onBlur={handleEmailOnBlur}
                    />
                    <section className="flex items-center gap-3 absolute top-1/2 -translate-y-1/2 right-2">
                      {showEmailError && (
                        <p className="text-xs text-red-500 hidden lg:block">
                          {t(emailErrorMessage)}
                        </p>
                      )}
                      <Button
                        type={"submit"}
                        variant={"primary"}
                        className={"flex items-center gap-2 rounded-full"}
                        disabled={sendEmailMutation.status === "loading"}
                      >
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <span>
                          {sendEmailMutation.status === "loading"
                            ? t("Sending")
                            : t("Send")}
                        </span>
                      </Button>
                    </section>
                  </form>
                </section>
                {showEmailError && (
                  <p className="text-center text-xs text-red-500 block lg:hidden">
                    {t(emailErrorMessage)}
                  </p>
                )}
              </section>
              <section className="flex items-center justify-center xl:block">
                <Link href={"#quote"} className="inline-block">
                  <Button
                    type={"button"}
                    variant={"primary-outline"}
                    className={
                      "flex items-center justify-center gap-2 rounded-md py-3"
                    }
                  >
                    <span>{t("quote")}</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Button>
                </Link>
              </section>
            </section>
          </Container>
        </section>
      </header>
      <section className="py-16 lg:py-24">
        <Container>
          {/* <section className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-primary mb-8">
              {t("homepage_title")}
            </h1>
            <p className="mx-auto lg:w-1/2">{t("homepage_description")}</p>
          </section>
          <section className="w-11/12 lg:w-1/2 text-center mx-auto my-16">
            <section className="relative mb-4 lg:mb-0">
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder={t("send_your_email")}
                  className="w-full border rounded-full outline-none text-sm bg-white dark:bg-dark dark:border-gray-600 focus:border-primary focus:dark:border-primary-darker p-4 transition-all"
                  value={email}
                  onChange={handleEmailOnChange}
                  onBlur={handleEmailOnBlur}
                />
                <section className="flex items-center gap-3 absolute top-1/2 -translate-y-1/2 right-2">
                  {showEmailError && (
                    <p className="text-xs text-red-500 hidden lg:block">
                      {t(emailErrorMessage)}
                    </p>
                  )}
                  <Button
                    type={"submit"}
                    variant={"primary"}
                    className={"flex items-center gap-2 rounded-full"}
                    disabled={sendEmailMutation.status === "loading"}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>
                      {sendEmailMutation.status === "loading"
                        ? t("Sending")
                        : t("Send")}
                    </span>
                  </Button>
                </section>
              </form>
            </section>
            {showEmailError && (
              <p className="text-xs text-red-500 block lg:hidden">
                {t(emailErrorMessage)}
              </p>
            )}
          </section> */}
          {/* <section className="w-3/4 lg:w-1/3 mx-auto my-32">
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
                    {t("Development")}
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
                    {t("Creativity")}
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
                    {t("Digital_Marketing")}
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
                    {t("Design")}
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
                    {t("Social_Media")}
                  </span>
                </div>
              </motion.div>
            </section>
          </section> */}
          <section className="grid grid-cols-12 items-stretch gap-4 my-24">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.75 }}
              viewport={{ once: true }}
              className="col-span-6 shadow border bg-light dark:bg-dark dark:shadow-xl dark:border-none rounded-lg lg:col-span-3 hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push("/about")}
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
        <section className="my-48 hidden lg:block relative">
          <h1 className="text-center text-primary font-semibold text-2xl mb-4">
            {t("Our_Teams")}
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
                  translateX: `${carouselState.team * -100}%`,
                }}
                className="grid grid-cols-12 gap-4 min-w-full"
              >
                <motion.section
                  initial={{ y: 100 }}
                  whileInView={{ y: [100, 0] }}
                  transition={{ ease: "easeOut", duration: 0.25, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="col-span-4"
                >
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">
                        {t("Backend_Team")}
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
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted dark:text-muted-dark text-sm">
                        {t("Backend_Team_Description")}
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#backend"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>{t("See_the_team")}</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </motion.section>
                <motion.section
                  initial={{ y: 100 }}
                  whileInView={{ y: [100, 0] }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="col-span-4"
                >
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">
                        {t("Frontend_Team")}
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
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted dark:text-muted-dark text-sm">
                        {t("Frontend_Team_Description")}
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#frontend"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>{t("See_the_team")}</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </motion.section>
                <motion.section
                  initial={{ y: 100 }}
                  whileInView={{ y: [100, 0] }}
                  transition={{ ease: "easeOut", duration: 0.75, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="col-span-4"
                >
                  <Card
                    className={
                      "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg"
                    }
                  >
                    <Card.Header clasName={"text-center"}>
                      <h1 className="text-primary text-xl mb-2">
                        {t("Mobile_Team")}
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
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted dark:text-muted-dark text-sm">
                        {t("Mobile_Team_Description")}
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#mobile"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>{t("See_the_team")}</span>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </motion.section>
              </motion.section>
              <motion.section
                animate={{
                  translateX: `${carouselState.team * -100}%`,
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
                        {t("Social_Media_Team")}
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
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted dark:text-muted-dark text-sm">
                        {t("Social_Media_Team_Description")}
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#social"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>{t("See_the_team")}</span>
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
                        {t("Design_Team")}
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
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted dark:text-muted-dark text-sm">
                        {t("Design_Team_Description")}
                      </p>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={"/teams/#design"}>
                        <Button
                          type={"button"}
                          variant={"primary-link"}
                          className={"flex items-center gap-2 mx-auto py-2.5"}
                        >
                          <span>{t("See_the_team")}</span>
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
                        {t("Devops_Team")}
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
                    <Card.Body clasName={"text-center my-5"}>
                      <p className="text-muted dark:text-muted-dark text-sm">
                        {t("Devops_Team_Description")}
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
                  carouselState.team === 0 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={() => carouselStateDispatch({ type: "previousTeam" })}
              />
              <span
                className={`inline-block ${
                  carouselState.team === 1 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={() => carouselStateDispatch({ type: "nextTeam" })}
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
              onClick={() => carouselStateDispatch({ type: "previousTeam" })}
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
              onClick={() => carouselStateDispatch({ type: "nextTeam" })}
              alt="Next"
            />
          </span>
        </section>
        <section className="my-48 lg:hidden px-2">
          <h1 className="text-center text-primary font-semibold text-2xl mb-4">
            {t("Our_Teams")}
          </h1>

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
                  "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-4"
                }
              >
                <Card.Header clasName={"text-center"}>
                  <h1 className="text-primary text-xl mb-2">
                    {t("Backend_Team")}
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
                <Card.Body clasName={"text-center my-5"}>
                  <p className="text-muted dark:text-muted-dark text-sm line-clamp-3">
                    Our team, led by a Senior Software Engineer, is an expert in
                    the field and has years of experience in the most up-to-date
                    technologies.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Link href={"/teams/#backend"}>
                    <Button
                      type={"button"}
                      variant={"primary-link"}
                      className={"flex items-center gap-2 mx-auto py-2.5"}
                    >
                      <span>{t("See_the_team")}</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </section>
            <section className="min-w-72 snap-center snap-always">
              <Card
                className={
                  "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-4"
                }
              >
                <Card.Header clasName={"text-center"}>
                  <h1 className="text-primary text-xl mb-2">
                    {t("Frontend_Team")}
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
                <Card.Body clasName={"text-center my-5"}>
                  <p className="text-muted dark:text-muted-dark text-sm line-clamp-3">
                    {t("Frontend_Team_Description")}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Link href={"/teams/#frontend"}>
                    <Button
                      type={"button"}
                      variant={"primary-link"}
                      className={"flex items-center gap-2 mx-auto py-2.5"}
                    >
                      <span>{t("See_the_team")}</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </section>
            <section className="min-w-72 snap-center snap-always">
              <Card
                className={
                  "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-4"
                }
              >
                <Card.Header clasName={"text-center"}>
                  <h1 className="text-primary text-xl mb-2">
                    {t("Mobile_Team")}
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
                <Card.Body clasName={"text-center my-5"}>
                  <p className="text-muted dark:text-muted-dark text-sm line-clamp-3">
                    {t("Mobile_Team_Description")}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Link href={"/teams/#mobile"}>
                    <Button
                      type={"button"}
                      variant={"primary-link"}
                      className={"flex items-center gap-2 mx-auto py-2.5"}
                    >
                      <span>{t("See_the_team")}</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </section>
            <section className="min-w-72 snap-center snap-always">
              <Card
                className={
                  "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-4"
                }
              >
                <Card.Header clasName={"text-center"}>
                  <h1 className="text-primary text-xl mb-2">
                    {t("Social_Media_Team")}
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
                <Card.Body clasName={"text-center my-5"}>
                  <p className="text-muted dark:text-muted-dark text-sm line-clamp-3">
                    {t("Social_Media_Team_Description")}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Link href={"/teams/#social"}>
                    <Button
                      type={"button"}
                      variant={"primary-link"}
                      className={"flex items-center gap-2 mx-auto py-2.5"}
                    >
                      <span>{t("See_the_team")}</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </section>
            <section className="min-w-72 snap-center snap-always">
              <Card
                className={
                  "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-4"
                }
              >
                <Card.Header clasName={"text-center"}>
                  <h1 className="text-primary text-xl mb-2">
                    {t("Design_Team")}
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
                <Card.Body clasName={"text-center my-5"}>
                  <p className="text-muted dark:text-muted-dark text-sm line-clamp-3">
                    {t("Design_Team_Description")}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Link href={"/teams/#design"}>
                    <Button
                      type={"button"}
                      variant={"primary-link"}
                      className={"flex items-center gap-2 mx-auto py-2.5"}
                    >
                      <span>{t("See_the_team")}</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </section>
            <section className="min-w-72 snap-center snap-always">
              <Card
                className={
                  "bg-no-repeat bg-cover bg-opacity-0 bg-light shadow border dark:border-none dark:shadow-xl dark:bg-dark rounded-lg !py-4"
                }
              >
                <Card.Header clasName={"text-center"}>
                  <h1 className="text-primary text-xl mb-2">
                    {t("Devops_Team")}
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
                <Card.Body clasName={"text-center my-5"}>
                  <p className="text-muted dark:text-muted-dark text-sm line-clamp-3">
                    {t("Devops_Team_Description")}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Link href={"/teams/#devops"}>
                    <Button
                      type={"button"}
                      variant={"primary-link"}
                      className={"flex items-center gap-2 mx-auto py-2.5"}
                    >
                      <span>{t("See_the_team")}</span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </section>
          </section>
        </section>
        <section id="services" className="relative my-48">
          <Container>
            <h1 className="text-center text-primary font-semibold text-2xl mb-12">
              {t("Our_Services")}
            </h1>
            <Link
              href={"https://dismas-client.vercel.app"}
              target="_blank"
              className="group flex items-start justify-center gap-6 mb-8"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <section>
                <div className="w-[72px] h-[72px] bg-black p-3 rounded-full overflow-hidden">
                  <img
                    src="/dismas.png"
                    className="w-full h-full shadow"
                    alt="Dismas"
                  />
                </div>
              </section>
              <section>
                <Link
                  href={"https://dismas-client.vercel.app"}
                  target="_blank"
                  className="text-2xl block mb-1 font-bold mx-auto tracking-widest group-hover:underline transition-all cursor-pointer"
                >
                  DISMAS STUDIO
                </Link>
                <p className="text-muted">
                  DISMAS is TRNC based design <br /> and Development Studio
                </p>
              </section>
              {/* <motion.section
                animate={{
                  translateX: `${carouselState.service * -100}%`,
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
                      <h1 className="text-primary text-xl">
                        {t("Web_Design_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Web_Design_Service_Description")}
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
                      <h1 className="text-primary text-xl">
                        {t("Mobile_Apps")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Mobile_Design_Service_Description")}
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
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Backend_Service_Description")}
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
                      <h1 className="text-primary text-xl">
                        {t("Logo_Design_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                        {t("Logo_Design_Service_Description")}
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
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Frontend_Service_Description")}
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
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Website_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
              <motion.section
                animate={{
                  translateX: `${carouselState.service * -100}%`,
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
                        {t("Social_Media_Consultancy_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                        {t("Social_Media_Consultancy_Service_Description")}
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
                        {t("Digital_Marketing_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                        {t("Digital_Marketing_Service_Description")}
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
                      <h1 className="text-primary text-xl">
                        {t("SEO_Consultancy_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                        {t("SEO_Consultancy_Service_Description")}
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
                  onClick={() =>
                    carouselStateDispatch({ type: "previousService" })
                  }
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
                  onClick={() => carouselStateDispatch({ type: "nextService" })}
                  alt="Next"
                />
              </span> */}
            </Link>
            {/* <section className="flex items-center justify-center gap-2">
              <span
                className={`inline-block ${
                  carouselState.service === 0 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={() =>
                  carouselStateDispatch({ type: "previousService" })
                }
              />
              <span
                className={`inline-block ${
                  carouselState.service === 1 ? "bg-primary" : "bg-muted"
                } rounded-full cursor-pointer p-1.5 transition-all`}
                onClick={() => carouselStateDispatch({ type: "nextService" })}
              />
            </section> */}
          </Container>
        </section>
        {/* <section className="block lg:hidden relative my-48">
          <Container>
            <h1 className="text-center text-primary font-semibold text-2xl mb-4">
              {t("Our_Services")}
            </h1>
            <section
              className="flex items-stretch flex-nowrap gap-3 overflow-x-scroll snap-mandatory snap-x select-none"
              style={{
                scrollbarWidth: "none",
              }}
            >
              <motion.section className="min-w-full grid grid-cols-12 items-stretch gap-4 snap-center snap-always">
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                      <h1 className="text-primary text-xl">
                        {t("Web_Design_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Web_Design_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                      <h1 className="text-primary text-xl">
                        {t("Mobile_Design_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Mobile_Design_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Backend_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                      <h1 className="text-primary text-xl">
                        {t("Logo_Design_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Logo_Design_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
              <motion.section className="min-w-full grid grid-cols-12 items-stretch gap-4 snap-center snap-always">
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Frontend_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Website_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                        {t("Social_Media_Consultancy_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-3">
                        {t("Social_Media_Consultancy_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                        {t("Digital_Marketing_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("Digital_Marketing_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
              <motion.section className="min-w-full grid grid-cols-12 items-stretch gap-4 snap-center snap-always">
                <section className="col-span-6">
                  <Card
                    style={{ height: "300px" }}
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
                      <h1 className="text-primary text-xl">
                        {t("SEO_Consultancy_Service")}
                      </h1>
                    </Card.Header>
                    <Card.Body clasName={"my-4"}>
                      <p className="text-sm text-muted dark:text-muted-dark line-clamp-4">
                        {t("SEO_Consultancy_Service_Description")}
                      </p>
                    </Card.Body>
                  </Card>
                </section>
              </motion.section>
            </section>
          </Container>
        </section> */}
        <Quote />
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
                {t("kibrisevim_lead_title")}
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
                  {t("kibrisevim_lead_description")}
                </p>
                <ul className="list-disc lg:ps-6 self-center text-xl mb-24">
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    {t("kibrisevim_lead_paragraphs.0")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
                    viewport={{ once: true }}
                  >
                    {t("kibrisevim_lead_paragraphs.1")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    {t("kibrisevim_lead_paragraphs.2")}
                  </motion.li>
                  <motion.li
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {t("kibrisevim_lead_paragraphs.3")}
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
                    <span>{t("Go_to_the_App")}</span>
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
                  <span className="text-xs">{t("Show_More_Projects")}</span>
                  <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </Button>
              </Link>
            </section>
          </Container>
        </section>
      </section>
      <Toast
        show={toast}
        setToast={setToast}
        message={toastMessage}
        variant={toastVariant}
      />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/meta/home`);

  const { data } = await response.json();

  const { meta } = data;

  return {
    props: {
      meta,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
