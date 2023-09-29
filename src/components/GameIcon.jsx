import { useGameData } from "../AppProvider";
import { useEffect, useRef } from "react";

const GameIcon = ({
  singleIconData,
  inResults = false,
  isCompChoice = false,
}) => {
  const { iconName, icon, position, bgGradient, color } =
    singleIconData;

  const { dispatch } = useGameData();

  const handleClick = () => {
    if (!inResults) {
      dispatch({ type: "SELECTED AN ICON", payload: iconName });
    }
  };
  const iconRef = useRef();
  useEffect(() => {
    if (!isCompChoice) {
      const id = setTimeout(() => {
        iconRef.current.classList.remove("scale-0");
      }, 200);
      return () => {
        clearTimeout(id);
      };
    } else {
      const id = setTimeout(() => {
        iconRef.current.classList.remove("scale-0");
      }, 1500);
      return () => {
        clearTimeout(id);
      };
    }
  }, []);

  return (
    <div
      ref={iconRef}
      className={`w-24 h-24 ${bgGradient} ${color} flex items-center justify-center rounded-full shadow-outer  ${
        inResults
          ? `w-32 h-32 md:w-52 md:h-52 lg:w-72 lg:h-72 scale-0 md:shadow-outer2`
          : `${position} absolute hover:scale-[1.07] cursor-pointer`
      } duration-300 `}
      onClick={handleClick}
    >
      <div
        className={`bg-white w-[4.8rem] h-[4.8rem] flex items-center justify-center rounded-full shadow-inner relative ${
          inResults
            ? "w-[6.3rem] h-[6.3rem] md:w-[10.2rem] md:h-[10.2rem] lg:w-[14rem] lg:h-[14rem] lg:shadow-inner2"
            : ""
        } `}
      >
        <img
          src={icon}
          alt={iconName}
          className={inResults ? "md:w-20 lg:w-24" : "w-9"}
        />
      </div>
    </div>
  );
};
export default GameIcon;
