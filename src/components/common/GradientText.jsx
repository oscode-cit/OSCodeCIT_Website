const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`text-shimmer bg-linear-to-r from-[#00D2FF] via-[#8B5CF6] to-[#00D2FF] bg-clip-text text-transparent font-extrabold ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;