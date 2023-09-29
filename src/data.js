import rockIcon from "./assets/images/icon-rock.svg";
import paperIcon from "./assets/images/icon-paper.svg"
import scissorsIcon from './assets/images/icon-scissors.svg'
import spockIcon from './assets/images/icon-spock.svg'
import lizardIcon from './assets/images/icon-lizard.svg'

export default [
  {
    iconName: "rock",
    icon: rockIcon,
    position: "bottom-0 translate-y-1/2 right-0",
    color: "text-red-800",
    bgGradient: "bg-rockGradient",
  },
  {
    iconName: "paper",
    icon: paperIcon,
    position: "translate-x-[50%] top-[12%] right-0",
    color: "text-indigo-800",
    bgGradient: "bg-paperGradient",
  },
  {
    iconName: "scissors",
    icon: scissorsIcon,
    position: "left-1/2 translate-x-[-50%] translate-y-[-50%]",
    color: "text-yellow-700",
    bgGradient: "bg-scissorsGradient",
  },
  {
    iconName: "lizard",
    icon: lizardIcon,
    position: "bottom-0 translate-y-1/2",
    color: "text-purple-700",
    bgGradient: "bg-lizardGradient",
  },
  {
    iconName: "spock",
    icon: spockIcon,
    position: "translate-x-[-50%] top-[12%]",
    color: "text-cyan-700",
    bgGradient: "bg-cyan",
  },
];
