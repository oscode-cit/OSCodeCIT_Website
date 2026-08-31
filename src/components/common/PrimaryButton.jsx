const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`btn-sheen relative overflow-hidden rounded-full bg-[#00A8FF] hover:bg-[#00D2FF] px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,168,255,0.6)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;