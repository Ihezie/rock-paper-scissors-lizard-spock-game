const Waves = () => {
  return (
    <div className="w-[6.3rem] h-[6.3rem] rounded-full absolute md:w-[10.2rem] md:h-[10.2rem] lg:w-[14rem] lg:h-[14rem] z-[-1] top-[1.1rem] md:top-[6.4rem] lg:top-[7rem]">
      <div className="rounded-full bg-headerOutline/50 absolute w-full h-full animate-wave-1"></div>
      <div className="rounded-full bg-headerOutline/50 absolute w-full h-full animate-wave-2"></div>
      <div className="rounded-full bg-headerOutline/50 absolute w-full h-full animate-wave-3"></div>
      <div className="rounded-full bg-headerOutline/50 absolute w-full h-full animate-wave-4"></div>
    </div>
  );
};
export default Waves;
