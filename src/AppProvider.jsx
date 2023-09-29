import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext()

const getScore = () => {
    const score = Number(localStorage.getItem('score'))
    if (score !== null) {
        return score
    }
    else {
        return 0
    }
}

const initialState = {
    computerChoice: '',
    userChoice: '',
    score: getScore(),
    showResult: false,
    resultText: ''
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider

export const useGameData = () => {
    return useContext(AppContext)
}