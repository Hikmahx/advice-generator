import React, { useContext } from "react";
import AdviceContext from "../context/AdviceContext";

const AdviceCard = () => {
  const { advice, loading, error, errMsg, getAdvice } =
    useContext(AdviceContext);

  return (
    <>
      <h1>Advice Generator</h1>
      {!error ? (
        <div className="advice">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <h2>Advice number {advice.id}</h2>
              <blockquote>"{advice.advice}"</blockquote>
            </>
          )}
        </div>
      ) : (
        <>
          <p>{errMsg}. Reload page</p>
        </>
      )}
      <div>
        <button onClick={getAdvice}>New Advice</button>
      </div>
    </>
  );
};

export default AdviceCard;
