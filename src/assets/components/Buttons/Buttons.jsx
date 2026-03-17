import "./Buttons.scss";

function Button({ children, variant = "light", className = "", ...props }) {
  return (
    <button className={`btn btn--${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export default Button;
