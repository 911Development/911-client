import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Toast = ({ show, setToast, variant, message, className }) => {
  const [display, setDisplay] = useState("none");

  let classes = `fixed left-1/2 -translate-x-1/2 bottom-0 lg:bottom-8 w-5/6 lg:w-3/4 lg:w-auto px-8 py-2 rounded dark:border dark:border-dark shadow z-50 ${className} `;

  switch (variant) {
    case "fail":
    case "error": {
      classes += "bg-red-200 text-danger";
      break;
    }

    case "success": {
      classes += "bg-green-100 text-success";
      break;
    }

    default: {
      classes += "bg-white dark:bg-dark shadow";
      break;
    }
  }

  useEffect(
    function () {
      const identifier = setTimeout(function () {
        setToast(false);
      }, 3000);

      return () => clearTimeout(identifier);
    },
    [show]
  );

  useEffect(
    function () {
      const identifier = setTimeout(function () {
        if (!show) setDisplay("none");
      }, 100);

      if (show) setDisplay("block");

      return () => clearTimeout(identifier);
    },
    [show]
  );

  return (
    <div id="toast-overlay" style={{ display }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: show ? [0, 1] : [1, 0],
          scale: show ? [0.9, 1] : [1, 0.9],
        }}
        className={classes}
        style={{
          transformOrigin: "center",
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <p className="text-sm text-center select-none">{message}</p>
      </motion.div>
    </div>
  );
};

export default Toast;
