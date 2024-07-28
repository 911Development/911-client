import { useReducer } from "react";
import validator from "validator";

const reducer = (state, action) => {
  const { type, name, payload } = action;

  switch (type) {
    case "onChange": {
      switch (name) {
        case "fullname": {
          let isValid = null;

          if (payload.length >= 1) isValid = payload.length >= 3;

          return {
            value: payload,
            isValid,
          };
        }

        case "phone": {
          return {
            value: payload,
            isValid: validator.isMobilePhone(payload),
          };
        }

        case "message": {
          return {
            value: payload,
            isValid: payload.length <= 255,
          };
        }

        case "email": {
          let isValid = null,
            value = payload;

          if (value.includes(".com")) value = `${payload.split(".com")[0]}.com`;

          if (value.length >= 1)
            isValid = validator.isEmail(value, {
              domain_specific_validation: true,
              allow_ip_domain: true,
              allow_display_name: true,
              require_tld: true,
            });

          return {
            value: value.toLowerCase().trim(),
            isValid,
          };
        }

        default:
          throw new Error(`Unknown input name: ${name}`);
      }
    }

    case "onBlur": {
      switch (name) {
        case "fullname":
        case "phone":
        case "email":
        case "message": {
          return {
            ...state,
            isError: state.isValid === false && !state.isValid,
            errorMessage: `invalid_${name}`,
          };
        }
      }
    }

    case "onClear": {
      switch (name) {
        case "fullname":
        case "email":
        case "message": {
          return {
            value: "",
            isValid: null,
            isError: null,
            errorMessage: null,
          };
        }
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

  const handleOnBlur = (e) => {
    const { name } = e.target;
    dispatch({ type: "onBlur", name });
  };

  const handlePhoneOnChange = (value) =>
    dispatch({ type: "onChange", name: "phone", payload: value });

  const handleOnClear = (name) => dispatch({ type: "onClear", name });

  return {
    state,
    handleOnChange,
    handlePhoneOnChange,
    handleOnBlur,
    handleOnClear,
  };
};

export default useInput;
