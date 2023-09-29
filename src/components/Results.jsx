import GameIcon from "./GameIcon";
import iconData from "../data";
import { useState, useEffect, useRef } from "react";
import { useGameData } from "../AppProvider";
import Waves from "./Waves";

const Results = () => {
  const {
    state: { userChoice, computerChoice, resultText },
    dispatch,
  } = useGameData();
  const [{ animateCompWaves, animateUserWaves }, setAnimateWaves] = useState({
    animateUserWaves: false,
    animateCompWaves: false,
  });

  const computerChoiceObj = iconData.find(
    (item) => item.iconName === computerChoice
  );

  const userChoiceObj = iconData.find((item) => item.iconName === userChoice);

  const playAgain = () => {
    dispatch({ type: "PLAY AGAIN" });
  };

  const resultRef = useRef();
  const userChoiceRef = useRef();
  const compChoiceRef = useRef();

  useEffect(() => {
    const id = setTimeout(() => {
      if (resultText === "you win") {
        setAnimateWaves({ animateCompWaves, animateUserWaves: true });
      } else if (resultText === "you lose") {
        setAnimateWaves({ animateUserWaves, animateCompWaves: true });
      }
      resultRef.current.classList.remove("invisible", "opacity-0");
    }, 2500);
    if (innerWidth >= 768) {
      const id2 = setTimeout(() => {
        userChoiceRef.current.classList.remove("md:translate-x-1/2");
        compChoiceRef.current.classList.remove("md:translate-x-[-50%]");
      }, 2300);

      return () => {
        clearTimeout(id);
        clearTimeout(id2);
      };
    }
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <section className="max-w-[58rem] mx-auto relative">
      <div className="flex justify-between">
        <div
          className="flex flex-col items-center md:flex-col-reverse md:translate-x-1/2 duration-500"
          ref={userChoiceRef}
        >
          <GameIcon singleIconData={userChoiceObj} inResults={true} />
          <div className="w-[6.3rem] h-[6.3rem] rounded-full bg-black/25 absolute md:w-[10.2rem] md:h-[10.2rem] lg:w-[14rem] lg:h-[14rem] z-[-1] top-[1.1rem] md:top-[6.4rem] lg:top-[7rem]"></div>
          {animateUserWaves && <Waves />}
          <p className="uppercase tracking-widest text-white mt-6 md:mt-0 md:mb-14">
            you picked
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-between md:flex-col-reverse md:translate-x-[-50%] duration-500"
          ref={compChoiceRef}
        >
          <GameIcon
            singleIconData={computerChoiceObj}
            inResults={true}
            isCompChoice={true}
          />
          <div className="w-[6.3rem] h-[6.3rem] rounded-full bg-black/25 absolute md:w-[10.2rem] md:h-[10.2rem] lg:w-[14rem] lg:h-[14rem] z-[-1] top-[1.1rem] md:top-[6.4rem] lg:top-[7rem]"></div>
          {animateCompWaves && <Waves />}
          <div className="w-[6.3rem] h-[6.3rem] absolute md:w-[10.2rem] md:h-[10.2rem] lg:w-[14rem] lg:h-[14rem] z-[-1] top-[1.1rem] md:top-[6.4rem] lg:top-[7rem]"></div>
          <p className="uppercase tracking-widest text-white mt-6 md:mt-0 md:mb-14">
            the house picked
          </p>
        </div>
      </div>

      <div
        ref={resultRef}
        className="mt-20 md:absolute md:mt-0 md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:scale-[.85] lg:scale-100 invisible opacity-0 duration-500"
      >
        <h2 className="uppercase text-6xl text-center text-white">
          {resultText}
        </h2>
        <button
          className="w-[14.4rem] bg-white uppercase tracking-widest h-12 mx-auto block rounded-lg mt-6 hover:text-red-600"
          onClick={playAgain}
        >
          play again
        </button>
      </div>
    </section>
  );
};
export default Results;
