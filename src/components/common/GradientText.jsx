const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-linear-to-b from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;