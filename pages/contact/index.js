import Head from "next/head";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Toast from "@/components/ui/Toast";
import PhoneInput from "react-phone-input-2";
import useInput from "@/hooks/useInput";
import { createContact } from "@/utils/helpers";

const ContactPage = ({ meta }) => {
  const { t, i18n } = useTranslation();

  const [isContactFormValid, setIsContactFormValid] = useState(false);
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
    handleOnClear: handlePhoneOnClear,
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
    state: { value: message, isError: isMessageError },
    handleOnChange: handleMessageOnChange,
    handleOnBlur: handleMessageOnBlur,
    handleOnClear: handleMessageOnClear,
  } = useInput();

  const { language } = i18n;

  const contactMutation = useMutation({
    mutationKey: "contactForm",
    mutationFn: createContact,
    onSuccess: function (data) {
      setToast(true);
      setToastMessage(
        currentLanguage === "en" ? data.message.en : data.message.tr
      );
      setToastVariant(data.status);

      if (data.status === "success") {
        handleFullnameOnClear("fullname");
        handleEmailOnClear("email");
        handleMessageOnClear("message");
        handlePhoneOnClear("phone");
      }
    },
  });

  function handleContactOnSubmit(e) {
    e.preventDefault();

    contactMutation.mutate({
      fullname,
      phone: phone === "90" || phone === "" ? null : phone,
      email,
      message,
    });
  }

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  useEffect(
    function () {
      if (phone === "90" || phone === "")
        setIsContactFormValid(
          isFullnameValid && isEmailValid && message.length <= 255
        );
      else
        setIsContactFormValid(
          isFullnameValid &&
            isPhoneValid &&
            isEmailValid &&
            message.length <= 255
        );
    },
    [isFullnameValid, phone, isPhoneValid, isEmailValid, message]
  );

  useEffect(
    function () {
      setCurrentLanguage(language);
    },
    [language]
  );

  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <title>{meta.title}</title>
      </Head>
      <section className="py-32 lg:py-48">
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
            <form
              noValidate
              className="lg:grid lg:grid-cols-12 lg:gap-3 lg:w-3/4 lg:items-start mx-auto"
              onSubmit={handleContactOnSubmit}
            >
              <section className="col-span-6">
                <section className="relative mb-4">
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
                <section className="relative mb-4">
                  <Input
                    type={"email"}
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
              <section className="col-span-6">
                <section className="relative">
                  <TextArea
                    inputMode={"text"}
                    name={"message"}
                    placeholder={"Your message"}
                    className={`mb-4 lg:mb-1 ${
                      isMessageError && "!border-danger"
                    }`}
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
                <Button
                  type={"submit"}
                  variant={"primary"}
                  className={
                    "flex items-center justify-center gap-2 w-full py-4"
                  }
                  disabled={
                    !isContactFormValid || contactMutation.status === "loading"
                  }
                >
                  <span>
                    {contactMutation.status === "loading"
                      ? t("Sending")
                      : t("Send")}
                  </span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </Button>
              </section>
            </form>
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
