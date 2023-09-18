
function InputField({
  type = "text",
  placeholder = "",
  value,
  onChange,
  label,
  id,
  disabled
}) {
  return (
    <div className="my-5 w-full">
      <p dir="rtl" className="mb-1">
        {label}
      </p>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full min-w-[40vw] h-10 p-2 outline-none"
        dir="rtl"
        style={{ border: "1px solid #ddd" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
