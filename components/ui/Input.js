const Input = ({
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  label,
  autoFocus,
  isValid,
  ref,
  disabled,
}) => {
  let inputClasses = `form-input peer bg-white dark:bg-black w-full border dark:border-gray-600 rounded-md shadow-sm border-gray-300 placeholder:text-white placeholder:dark:text-black text-sm placeholder-opacity-0 focus:ring-0 focus:!border-primary text-dark dark:text-light py-3 px-2.5 outline-none transition-all ${className} `;

  let labelClasses =
    "peer absolute text-muted dark:text-muted-dark left-2 top-0 peer-focus:text-primary peer-focus:text-xs peer-placeholder-shown:text-dark peer-placeholder-shown:!top-1/2 -translate-y-1/2 peer-placeholder-shown:text-gray-500 text-sm bg-white dark:bg-black peer-focus:!top-0 transition-all cursor-text px-1 ";

  if (isValid) {
    inputClasses += "!text-danger !border-danger";
    labelClasses += "!text-danger";
  }

  return (
    <>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
        autoComplete="off"
        ref={ref}
        disabled={disabled}
      />
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
    </>
  );
};

export default Input;
