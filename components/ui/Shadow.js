const Shadow = ({ position, opacity, variant }) => (
  <div
    className="absolute z-50"
    style={{
      top: position.top,
      left: position.left,
      right: position.right,
      bottom: position.bottom,
      transform: "translate(-50%, -50%)",
      boxShadow: `0 0 ${
        typeof window !== "undefined" && window.innerWidth >= 1024
          ? "250px 250px"
          : "120px 120px "
      } rgba(var(--color-${variant}), ${opacity})`,
      // zIndex: -1,
    }}
  />
);

export default Shadow;
