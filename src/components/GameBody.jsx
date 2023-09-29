import { useState } from "react";
import RulesModal from "./RulesModal";
import GameInterface from "./GameInterface";
import { useGameData } from "../AppProvider";
import Results from "./Results";

const GameBody = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    state: { showResult },
    dispatch
  } = useGameData();

  return (
    <main className="min-h-[30rem] pt-px md:h-[60vh] relative max-w-[1600px] mx-auto">
      {showResult ? <Results /> : <GameInterface />}
      <div
        className="absolute bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 lg:right-0 lg:left-auto flex gap-4"
      >
        <button
          className="uppercase text-white  border border-white w-32 h-10 rounded-lg tracking-widest  hover:bg-white hover:text-darkText duration-200"
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          rules
        </button>
        <button
          className="uppercase text-red-600  border border-red-600 w-32 h-10 rounded-lg tracking-widest  hover:bg-red-700 hover:text-white duration-200"
          type="button"
          onClick={() => {
            dispatch({ type: 'RESET SCORE' })
            location.reload()
          }}
        >
          reset
        </button>
      </div>

      {showModal && <RulesModal setShowModal={setShowModal} />}
    </main>
  );
};
export default GameBody;
