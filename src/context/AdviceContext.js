import { createContext, useEffect, useReducer } from "react";
import adviceReducer from "./AdviceReducer";

const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
  useEffect(() => {
    getAdvice();
    // eslint-disable-next-line
  }, []);


  const initialState = {
    advice: {},
    loading:false,
    errMsg: '',
    error: false
  }

  const [state, dispatch] = useReducer(adviceReducer, initialState)


  const getAdvice = async () => {
    try {
      setLoading()

      const response = await fetch("https://api.adviceslip.com/advice/71");
      const data = await response.json();

      dispatch({
        type: "GET_ADVICE",
        payload: data.slip
      })
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err.message
      })
    }
  };

  // Set loading
  const setLoading = ()=>
  dispatch({
    type: "SET_LOADING"
  })

  return (
    <AdviceContext.Provider value={{
      advice: state.advice,
      loading: state.loading,
      errMsg: state.errMsg,
      error: state.error,
      getAdvice
    }}>
      {children}
    </AdviceContext.Provider>
  ) 
}


export default AdviceContext