import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  error = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-wrapper">

      <div className="password-box">

        <FaLock className="password-icon" />

        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() =>
            setShowPassword(!showPassword)
          }
        >
          {showPassword ? (
            <FaEyeSlash />
          ) : (
            <FaEye />
          )}
        </button>

      </div>

      {error && (
        <small className="error-text">
          {error}
        </small>
      )}

    </div>
  );
}

export default PasswordInput;