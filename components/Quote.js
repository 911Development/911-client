import useInput from "@/hooks/useInput";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "./Container";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { createQutoe } from "@/utils/helpers";
import Toast from "./ui/Toast";

const quoteReducer = (state, action) => {
  const { type, name, payload } = action;

  switch (type) {
    case "toggle": {
      switch (name) {
        case "web_design": {
          return {
            ...state,
            web_design: payload,
          };
        }

        case "mobile_app": {
          return {
            ...state,
            mobile_app: payload,
          };
        }

        case "logo_design": {
          return {
            ...state,
            logo_design: payload,
          };
        }

        case "backend": {
          return {
            ...state,
            backend: payload,
          };
        }

        case "frontend": {
          return {
            ...state,
            frontend: payload,
          };
        }

        case "social_media": {
          return {
            ...state,
            social_media: payload,
          };
        }

        case "website": {
          return {
            ...state,
            website: payload,
          };
        }

        case "photoshop": {
          return {
            ...state,
            photoshop: payload,
          };
        }

        case "seo": {
          return {
            ...state,
            seo: payload,
          };
        }
      }
    }

    case "clear": {
      return {
        web_design: false,
        mobile_app: false,
        logo_design: false,
        backend: false,
        frontend: false,
        social_media: false,
        website: false,
        photoshop: false,
        seo: false,
      };
    }
  }
};

const qutoteInitialState = {
  web_design: false,
  mobile_app: false,
  logo_design: false,
  backend: false,
  frontend: false,
  social_media: false,
  website: false,
  photoshop: false,
  seo: false,
};

const Quote = () => {
  const { t, i18n } = useTranslation();

  const [quoteState, quoteStateDispatch] = useReducer(
    quoteReducer,
    qutoteInitialState
  );

  const [isServicesValid, setIsServicesValid] = useState(false);
  const [isQuoteFormValid, setIsQuoteFormValid] = useState(false);
  const [fields, setFields] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("");

  const {
    state: {
      value: firstname,
      isValid: isFirstnameValid,
      isError: isFirstnameError,
      errorMessage: firstnameErrorMessage,
    },
    handleOnChange: handleFirstnameOnChange,
    handleOnBlur: handleFirstnameOnBlur,
    handleOnClear: handleFirstnameOnClear,
  } = useInput();

  const {
    state: {
      value: lastname,
      isValid: isLastnameValid,
      isError: isLastnameError,
      errorMessage: lastnameErrorMessage,
    },
    handleOnChange: handleLastnameOnChange,
    handleOnBlur: handleLastnameOnBlur,
    handleOnClear: handleLastnameOnClear,
  } = useInput();

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

  const {
    state: {
      value: message,
      isError: isMessageError,
      errorMessage: messageErrorMessage,
    },
    handleOnChange: handleMessageOnChange,
    handleOnBlur: handleMessageOnBlur,
    handleOnClear: handleMessageOnClear,
  } = useInput();

  const { language } = i18n;

  const quoteMutation = useMutation({
    mutationKey: "quoteForm",
    mutationFn: createQutoe,
    onSuccess: function (data) {
      setToast(true);
      setToastMessage(
        currentLanguage === "en" ? data.message.en : data.message.tr
      );
      setToastVariant(data.status);

      if (data.status === "success") {
        quoteStateDispatch({ type: "clear" });
        handleFirstnameOnClear("firstname");
        handleLastnameOnClear("lastname");
        handleEmailOnClear("email");
        handleMessageOnClear("message");
      }
    },
  });

  function handleQuoteOnSubmit(e) {
    e.preventDefault();

    quoteMutation.mutate({
      firstname,
      lastname,
      email,
      message,
      fields,
    });
  }

  useEffect(
    function () {
      const valid = Object.values(quoteState).some((value) => value);
      setIsServicesValid(valid);

      setFields(
        Object.keys(quoteState).filter((property) => quoteState[property])
      );
    },
    [quoteState]
  );

  useEffect(
    function () {
      setIsQuoteFormValid(
        isFirstnameValid && isLastnameValid && isEmailValid && isServicesValid
      );
    },
    [isFirstnameValid, isLastnameValid, isEmailValid, isServicesValid]
  );

  useEffect(
    function () {
      setCurrentLanguage(language);
    },
    [language]
  );

  return (
    <>
      <section className="my-48">
        <Container>
          <section className="text-center mb-12">
            <h1 className="text-primary text-2xl lg:text-3xl font-semibold mb-4">
              {t("quote")}
            </h1>
            <p className="text-muted dark:text-muted-dark">
              {t("quote_description")}
            </p>
          </section>
          <section className="lg:w-3/4 xl:1/2 mx-auto">
            <section className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 xl:gap-16 mb-12">
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.web_design
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "web_design",
                    payload: !quoteState.web_design,
                  })
                }
              >
                <span>{t("Web_Design_Service")}</span>
                {quoteState.web_design && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.mobile_app
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "mobile_app",
                    payload: !quoteState.mobile_app,
                  })
                }
              >
                <span>{t("Mobile_App")}</span>
                {quoteState.mobile_app && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.logo_design
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "logo_design",
                    payload: !quoteState.logo_design,
                  })
                }
              >
                <span>{t("Logo_Design_Service")}</span>
                {quoteState.logo_design && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.backend
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "backend",
                    payload: !quoteState.backend,
                  })
                }
              >
                <span>{t("Backend")}</span>
                {quoteState.backend && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.frontend
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "frontend",
                    payload: !quoteState.frontend,
                  })
                }
              >
                <span>{t("Frontend")}</span>
                {quoteState.frontend && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.social_media
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "social_media",
                    payload: !quoteState.social_media,
                  })
                }
              >
                <span>{t("Social_Media")}</span>
                {quoteState.social_media && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.website
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "website",
                    payload: !quoteState.website,
                  })
                }
              >
                <span>{t("Website")}</span>
                {quoteState.website && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.photoshop
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "photoshop",
                    payload: !quoteState.photoshop,
                  })
                }
              >
                <span>Photoshop</span>
                {quoteState.photoshop && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <button
                type="button"
                className={`flex items-center justify-center gap-1 shadow ${
                  quoteState.seo
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-blue-900"
                } hover:bg-primary hover:text-white rounded-full text-sm py-1 px-4 transition-all`}
                onClick={() =>
                  quoteStateDispatch({
                    type: "toggle",
                    name: "seo",
                    payload: !quoteState.seo,
                  })
                }
              >
                <span>SEO</span>
                {quoteState.seo && <FontAwesomeIcon icon={faCheck} />}
              </button>
            </section>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{
                opacity: isServicesValid ? [0, 1] : [1, 0],
              }}
              className="lg:w-3/4 text-center mx-auto"
            >
              <form noValidate onSubmit={handleQuoteOnSubmit}>
                <section className="flex items-center justify-center gap-4 mb-4">
                  <section className="relative w-full">
                    <Input
                      type={"text"}
                      name={"firstname"}
                      placeholder={"Firstname"}
                      label={"Firstname"}
                      value={firstname}
                      onChange={handleFirstnameOnChange}
                      onBlur={handleFirstnameOnBlur}
                    />
                    {isFirstnameError && (
                      <p className="absolute top-1/2 text-xs right-4 text-danger -translate-y-1/2">
                        {t(firstnameErrorMessage)}
                      </p>
                    )}
                  </section>
                  <section className="relative w-full">
                    <Input
                      type={"text"}
                      name={"lastname"}
                      placeholder={"Lastname"}
                      label={"Lastname"}
                      value={lastname}
                      onChange={handleLastnameOnChange}
                      onBlur={handleLastnameOnBlur}
                    />
                    {isLastnameError && (
                      <p className="absolute top-1/2 text-xs right-4 text-danger -translate-y-1/2">
                        {t(lastnameErrorMessage)}
                      </p>
                    )}
                  </section>
                </section>
                <section className="relative w-full mb-4">
                  <Input
                    type={"text"}
                    name={"email"}
                    placeholder={"Email"}
                    label={"Email"}
                    value={email}
                    onChange={handleEmailOnChange}
                    onBlur={handleEmailOnBlur}
                  />
                  {isEmailError && (
                    <p className="absolute top-1/2 text-xs right-4 text-danger -translate-y-1/2">
                      {t(emailErrorMessage)}
                    </p>
                  )}
                </section>
                <section className="relative mb-4">
                  <TextArea
                    inputMode={"text"}
                    name={"message"}
                    placeholder={"Your message"}
                    value={message}
                    onChange={handleMessageOnChange}
                    onBlur={handleMessageOnBlur}
                  />
                  {isMessageError && (
                    <p className="absolute top-1/2 text-xs right-4 text-danger -translate-y-1/2">
                      {t(messageErrorMessage)}
                    </p>
                  )}
                </section>
                <section>
                  <Button
                    type={"submit"}
                    variant={"primary"}
                    className={
                      "flex items-center justify-center gap-2 w-full lg:w-1/5 lg:ms-auto"
                    }
                    disabled={
                      !isQuoteFormValid || quoteMutation.status === "loading"
                    }
                  >
                    <span>
                      {quoteMutation.status === "loading"
                        ? t("Sending")
                        : t("Send")}
                    </span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </section>
              </form>
            </motion.section>
          </section>
        </Container>
      </section>
      <Toast
        show={toast}
        setToast={setToast}
        message={toastMessage}
        variant={toastVariant}
      />
    </>
  );
};

export default Quote;