const SecondaryButton = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;