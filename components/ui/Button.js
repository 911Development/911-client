import { Poppins_400 } from "@/pages/_app";

const Button = ({ type, variant, className, onClick, children }) => {
  let classes = `button rounded shadow text-sm font-semibold transition-all py-3 px-5 ${Poppins_400.className} ${className} `;

  switch (variant) {
    case "primary":
      classes +=
        "bg-primary hover:bg-primary-darker text-white shadow-primary hover:shadow-none";
      break;

    case "primary-outline":
      classes +=
        "bg-none bg-transparent shadow-none hover:text-white border border-primary hover:bg-primary";

    case "primary-inverse":
      classes +=
        "bg-white text-primary hover:bg-primary hover:text-white shadow-none";

    case "primary-link":
      classes +=
        "bg-none shadow-none border-none text-primary hover:text-primary-darker py-0 px-0";
      break;
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
