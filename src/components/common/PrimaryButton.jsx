const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-full bg-linear-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
