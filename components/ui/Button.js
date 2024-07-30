import { Poppins_400 } from "@/pages/_app";

const Button = ({ type, variant, className, onClick, disabled, children }) => {
  let classes = `button rounded shadow text-sm font-semibold transition-all cursor-pointer select-none py-2.5 px-5 ${Poppins_400.className} ${className} `;

  switch (variant) {
    case "primary":
      classes +=
        "bg-primary hover:bg-primary-darker text-white shadow-primary hover:shadow-none";
      break;

    case "primary-outline":
      classes +=
        "bg-none backdrop-blur bg-transparent shadow-none text-primary hover:text-white border border-primary hover:bg-primary";
      break;

    case "primary-inverse":
      classes +=
        "bg-white text-primary hover:bg-primary hover:text-white shadow-none";
      break;

    case "primary-outline-inverse":
      classes +=
        "bg-none bg-transparent shadow-none text-white hover:text-primary border border-white hover:bg-white";
      break;

    case "primary-link":
      classes +=
        "bg-none shadow-none border-none text-primary hover:text-primary-darker py-0 px-0";
      break;

    case "secondary":
      classes +=
        "bg-secondary hover:bg-secondary-darker text-white shadow-secondary hover:shadow-none";
      break;

    case "link":
      classes += "bg-none shadow-none border-none py-0 px-0";
      break;
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
