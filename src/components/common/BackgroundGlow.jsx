const BackgroundGlow = () => {
  return (
    <>
      <div className="fixed -left-40 top-20 h-125 w-125 rounded-full bg-cyan-500/20 blur-[180px] -z-10" />

      <div className="fixed -right-40 bottom-0 h-125 w-125 rounded-full bg-violet-600/20 blur-[180px] -z-10" />
    </>
  );
};

export default BackgroundGlow;