const Button = ({ label, ...props }) => {
  return (
    <button className="core-btn" {...props}>
      {label}
    </button>
  );
};

export default Button;
