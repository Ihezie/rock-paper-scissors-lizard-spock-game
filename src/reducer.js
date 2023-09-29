import iconData from "./data";
const rules = {
  rock: ["scissors", 'lizard'],
  paper: ["rock", 'spock'],
  scissors: ["paper", 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['scissors', 'rock'],
};
const generateCompChoice = () => {
  const randomIndex = Math.floor(Math.random() * iconData.length);
  const compChoice = iconData[randomIndex].iconName;
  return compChoice;
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECTED AN ICON":
      const compChoice = generateCompChoice();
      let newState = {
        ...state,
        computerChoice: compChoice,
        userChoice: payload,
        showResult:true,
      };
      if (rules[payload].includes(compChoice)) {
        newState = {
          ...newState,
          score: state.score + 1,
          resultText: "you win",
        };
      } else if (payload === compChoice) {
        newState = {
          ...newState,
          resultText: "It's a draw",
        };
      } else {
        newState = {
          ...newState,
          score: state.score - 1,
          resultText: "you lose",
        };
      }
      localStorage.setItem('score', newState.score)
      return newState
    case "PLAY AGAIN":
      return {
        ...state,
        computerChoice: '',
        userChoice: '',
        showResult: false,
        resultText: "",
      };
    case "RESET SCORE":
      localStorage.setItem('score', '0')
      return state
    default:
      throw new Error('Unrecognized action type')      
  }
};
export default reducer;
