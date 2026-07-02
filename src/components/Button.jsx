import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
  fullWidth = true,
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: disabled ? 1 : 1.03,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.97,
      }}
      className={`
        custom-btn
        ${variant}
        ${fullWidth ? "full-width" : ""}
        ${className}
      `}
    >
      {disabled ? (
        <span className="btn-loader"></span>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default Button;