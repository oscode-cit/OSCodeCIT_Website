const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#00D2FF] via-[#00A8FF] to-[#00D2FF] bg-clip-text text-transparent font-extrabold ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;