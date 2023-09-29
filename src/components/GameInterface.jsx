import iconData from "../data";
import GameIcon from "./GameIcon";
import bgPentagon from '../assets/images/bg-pentagon.svg'
const GameInterface = () => {
  return (
    <section style={{backgroundImage: `url(${bgPentagon})`}} className="bg-contain w-56 mx-auto h-52 bg-no-repeat bg-center relative sm:scale-[1.1] md:scale-[1.3] lg:scale-[1.45] mt-16 md:mt-20 lg:mt-24">
      {iconData.map((item, index) => {
        return <GameIcon singleIconData={item} key={index} />;
      })}
    </section>
  );
};

export default GameInterface;
