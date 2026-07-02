import React from "react";

function InputField({
  icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) {
  return (
    <div className="input-wrapper">

      <div className="input-box">

        {icon && (
          <span className="input-icon">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />

      </div>

      {error && (
        <small className="error-text">
          {error}
        </small>
      )}

    </div>
  );
}

export default InputField;