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
import PhoneInput from "react-phone-input-2";

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
      value: fullname,
      isValid: isFullnameValid,
      isError: isFullnameError,
      errorMessage: fullnameErrorMessage,
    },
    handleOnChange: handleFullnameOnChange,
    handleOnBlur: handleFullnameOnBlur,
    handleOnClear: handleFullnameOnClear,
  } = useInput();

  const {
    state: { value: phone, isValid: isPhoneValid },
    handlePhoneOnChange: handlePhoneOnChange,
    handleOnBlur: handlePhoneOnBlur,
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
        handleFullnameOnClear("fullname");
        handleEmailOnClear("email");
        handleMessageOnClear("message");
      }
    },
  });

  function handleQuoteOnSubmit(e) {
    e.preventDefault();

    quoteMutation.mutate({
      fullname,
      phone: phone === "90" || phone === "" ? null : phone,
      email,
      message,
      fields,
    });
  }

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

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
      if (phone === "90" || phone === "")
        setIsQuoteFormValid(
          isFullnameValid &&
            isEmailValid &&
            isServicesValid &&
            message.length <= 255
        );
      else
        setIsQuoteFormValid(
          isFullnameValid &&
            isPhoneValid &&
            isEmailValid &&
            isServicesValid &&
            message.length <= 255
        );
    },
    [
      isFullnameValid,
      phone,
      isPhoneValid,
      isEmailValid,
      isServicesValid,
      message,
    ]
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
                      name={"fullname"}
                      placeholder={"Fullname"}
                      label={"Fullname"}
                      value={fullname}
                      onChange={handleFullnameOnChange}
                      onBlur={handleFullnameOnBlur}
                    />
                    {isFullnameError && (
                      <p className="absolute top-1/2 text-xs right-4 text-danger -translate-y-1/2">
                        {t(fullnameErrorMessage)}
                      </p>
                    )}
                  </section>
                  <section className="relative w-full">
                    <PhoneInput
                      inputProps={{
                        name: "phone",
                      }}
                      country={"tr"}
                      countryCodeEditable={false}
                      inputClass={`form-input peer bg-white dark:bg-black w-full border dark:border-gray-600 rounded-md shadow-sm border-gray-300 placeholder:text-white placeholder:dark:text-black text-sm placeholder-opacity-0 focus:ring-0 focus:!border-primary text-dark dark:text-light py-3 px-2.5 outline-none transition-all ${
                        phone !== "90" &&
                        phone !== "" &&
                        isPhoneValid === false &&
                        "!border-red-500"
                      }`}
                      isValid
                      specialLabel={false}
                      value={phone}
                      onChange={(value) => handlePhoneOnChange(value)}
                      onBlur={handlePhoneOnBlur}
                    />
                    {(phone === "90" || phone === "") && (
                      <span className="absolute top-1/2 right-2.5 -translate-y-1/2 text-xs text-muted dark:text-muted-dark">
                        ({t("optional")})
                      </span>
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
                    className={`${isMessageError && "!border-danger"}`}
                    value={message}
                    onChange={handleMessageOnChange}
                    onBlur={handleMessageOnBlur}
                    onKeyDown={handleOnKeyDown}
                  />
                  <span
                    className={`absolute bottom-4 right-4 text-xs ${
                      isMessageError
                        ? "text-danger"
                        : "text-muted dark:text-muted-dark"
                    }`}
                  >
                    {message.length}/255
                  </span>
                </section>
                <section>
                  <Button
                    type={"submit"}
                    variant={"primary"}
                    className={
                      "flex items-center justify-center gap-2 w-full lg:w-1/5 lg:ms-auto py-3 lg:py-2.5"
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
