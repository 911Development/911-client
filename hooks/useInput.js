import { useReducer } from "react";
import validator from "validator";

const reducer = (state, action) => {
  const { type, name, payload } = action;

  switch (type) {
    case "onChange": {
      switch (name) {
        case "email": {
          let value;

          if (payload.includes(".com"))
            value = `${payload.split(".com")[0]}.com`;

          const isValid = validator.isEmail(payload, {
            domain_specific_validation: true,
            allow_ip_domain: false,
            allow_display_name: false,
            require_tld: true,
          });

          return {
            value: value
              ? value.toLowerCase().trim()
              : payload.toLowerCase().trim(),
            isValid,
            errorMessage: !isValid ? "invalid_email_address" : null,
          };
        }

        default:
          throw new Error(`Unknown input name: ${name}`);
      }
    }

    default:
      throw new Error(`Unknown type: ${type}`);
  }
};

const initialState = {
  value: "",
  isValid: null,
  isError: null,
  errorMessage: null,
};

const useInput = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "onChange", name, payload: value });
  };

  return { state, handleOnChange };
};

export default useInput;
