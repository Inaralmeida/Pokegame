import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "./reducer";

 const inicialState = {
  loading: false,
  user: {
    username: "",
    bag: {
      pokemons: [],
      itens: [],
    },
    level: 0,
  },
  history: [
    {
      date: "",
      hour: "",
      win: "",
      xp: "",
    },
  ],
};


export const GlobalState = createContext(inicialState)

export const GlobalProvider = ({children})=>{
  const [state, dispatch] = useReducer(Reducer, inicialState)

  return(
    <GlobalState.Provider value={{state, dispatch}}>
      {children}
    </GlobalState.Provider>
  )
}