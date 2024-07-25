const TextArea = ({
  inputMode,
  name,
  placeholder,
  maxLength,
  value,
  onChange,
  onBlur,
  className,
  onKeyDown,
  disabled,
}) => {
  let classes = `w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-600 text-sm placeholder:text-gray-500 rounded-md focus:!border-primary outline-none transition-all min-h-28 p-2 ${className} `;

  return (
    <textarea
      inputMode={inputMode}
      name={name}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={classes}
      style={{ resize: "none" }}
      disabled={disabled}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextArea;
