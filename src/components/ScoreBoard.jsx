import { useState, useEffect, useRef } from "react";
import { useGameData } from "../AppProvider";
import logo from "../assets/images/logo-bonus.svg";

const ScoreBoard = () => {
  const [delayedScore, setDelayedScore] = useState(0);
  const {
    state: { score },
  } = useGameData();

  const delayScore = useRef(true);

  useEffect(() => {
    delayScore.current = false;
  }, []);

  useEffect(() => {
    if (!delayScore.current) {
      setDelayedScore(score);
      delayScore.current = true;
    } else {
      const id = setTimeout(() => {
        setDelayedScore(score);
      }, 2500);
      return () => {
        clearTimeout(id);
      };
    }
  }, [score]);
  return (
    <header className="flex justify-between mt-8 mb-20 border-[3px] border-headerOutline rounded-lg py-3 pl-5 pr-3 items-center max-w-[49rem] md:mx-auto">
      <img src={logo} className="w-24 md:w-28" alt="logo" />
      <div className="bg-white w-24 h-20 md:w-28 md:h-24 rounded uppercase py-1 text-center ">
        <span className="tracking-widest text-xs md:text-sm text-scoreText">
          score
        </span>
        <h2 className="text-5xl md:text-6xl leading-10 md:leading-[50px] font-bold text-darkText">
          {delayedScore}
        </h2>
      </div>
    </header>
  );
};
export default ScoreBoard;
