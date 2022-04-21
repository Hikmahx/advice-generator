import { createContext, useEffect, useState } from "react";

const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
  useEffect(() => {
    getAdvice();
  }, []);

  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [error, setError] = useState(false);


  const getAdvice = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip);

      setLoading(false);
    } catch (err) {
      setError(true);
      setErrMsg(err.message);
    }
  };
  return (
    <AdviceContext.Provider value={{
      advice,
      loading,
      errMsg,
      error,
      getAdvice
    }}>
      {children}
    </AdviceContext.Provider>
  ) 
}


export default AdviceContext