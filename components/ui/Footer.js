import Image from "next/image";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Container from "../Container";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Suspense, useEffect, useState } from "react";
import useInput from "@/hooks/useInput";
import { useMutation } from "react-query";
import { sendEmail } from "@/utils/helpers";
import Toast from "./Toast";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("");
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);

  const { language } = i18n;

  const {
    state: {
      value: email,
      isValid: isEmailValid,
      errorMessage: emailErrorMessage,
    },
    handleOnChange: handleEmailOnChange,
  } = useInput();

  const sendEmailMutation = useMutation({
    mutationKey: "sendEmail",
    mutationFn: sendEmail,
    onSuccess: function (data) {
      setToast(true);
      setToastMessage(
        currentLanguage === "en" ? data.message.en : data.message.tr
      );
      setToastVariant(data.status);
    },
  });

  function handleEmailSubmit(e) {
    e.preventDefault();

    if (!isEmailValid) setShowEmailError(true);
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

  return (
    <>
      <footer className="relative bg-primary dark:bg-primary-darkest mt-56 py-12">
        <Container className={"text-white"}>
          <section className="lg:grid lg:grid-cols-12 mb-8 lg:mb-0">
            <section className="lg:col-span-6 mb-48 lg:mb-0">
              <motion.section
                initial={{ y: "50%" }}
                whileInView={{ y: ["50%", "-20%"] }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-0 -translate-y-1/2 lg:-translate-y-1/4 w-3/4 lg:w-1/3"
              >
                <Image
                  src={"/icons/mockups/911_cad_mockup.png"}
                  width={350}
                  height={234}
                  alt="911 CAD Mockup"
                />
              </motion.section>
              <section className="absolute hidden lg:block bottom-10 left-10">
                <Image
                  src={"/logo.png"}
                  className="opacity-30 w-32"
                  width={120}
                  height={120}
                  alt="Watermark"
                />
              </section>
            </section>
            <section className="lg:col-span-6">
              <section className="text-center lg:text-start mb-12">
                <h1 className="text-2xl font-semibold mb-4">
                  {t("Follow_us_on_social_media")}
                </h1>
                <section className="flex items-center justify-center lg:justify-start gap-3">
                  <section className="bg-white rounded">
                    <Link
                      href={"https://www.linkedin.com/company/911development/"}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent font-semibold text-sm py-2 px-4"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-blue-900"
                      />
                      <span>LinkedIn</span>
                    </Link>
                  </section>
                  <section className="bg-white rounded">
                    <Link
                      href={"https://www.instagram.com/911development/"}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-sm py-2 px-4"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-purple-500"
                      />
                      <span>Instagram</span>
                    </Link>
                  </section>
                </section>
              </section>
              <section className="text-center lg:text-start mb-12">
                <h1 className="text-2xl font-semibold mb-2">
                  {t("Subscribe_to_our_email_list")}
                </h1>
                <p className="lg:w-3/4">
                  {t("Subscribe_to_our_email_list_description")}
                </p>
              </section>
              <section
                className={`relative lg:w-3/4 ${
                  !isEmailValid ? "mb-6" : "mb-12"
                }`}
              >
                <form onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("send_your_email")}
                    className="w-full text-dark border rounded-full outline-none text-sm bg-white focus:border-primary focus:dark:border-primary-darker p-4 transition-all"
                    value={email}
                    onChange={handleEmailOnChange}
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
                <p className="text-center text-xs text-red-500 block lg:hidden mb-4">
                  {t(emailErrorMessage)}
                </p>
              )}
              <section className="grid grid-cols-12">
                <section className="col-span-4 lg:col-span-2 mb-8 lg:mb-0">
                  <h1 className="text-lg font-semibold mb-1">{t("Menu")}</h1>
                  <ul>
                    <li>
                      <Link
                        href={"/"}
                        className="text-gray-300 hover:text-white hover:underline"
                      >
                        {t("Home")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="text-gray-300 hover:text-white hover:underline"
                      >
                        {t("About_Us")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="text-gray-300 hover:text-white hover:underline"
                      >
                        {t("Services")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="text-gray-300 hover:text-white hover:underline"
                      >
                        {t("Teams")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="text-gray-300 hover:text-white hover:underline"
                      >
                        {t("Projects")}
                      </Link>
                    </li>
                  </ul>
                </section>
                <section className="col-span-8 lg:col-span-10">
                  <h1 className="text-lg font-semibold mb-1">
                    {t("Contact_Us")}
                  </h1>
                  <ul className="text-sm">
                    <li>Email: 911developmentcomp@gmail.com</li>
                  </ul>
                </section>
              </section>
            </section>
          </section>
          <p className="text-sm lg:hidden">
            © 911 CAD {new Date().getFullYear()}, {t("right_reserved")}
          </p>
        </Container>
      </footer>
      <Toast
        show={toast}
        setToast={setToast}
        message={toastMessage}
        variant={toastVariant}
      />
    </>
  );
};

const FooterWrapper = () => {
  return (
    <Suspense fallback={<footer>Translating...</footer>}>
      <Footer />
    </Suspense>
  );
};

export default FooterWrapper;
