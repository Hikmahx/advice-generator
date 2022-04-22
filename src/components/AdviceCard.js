import React, { useContext } from "react";
import AdviceContext from "../context/AdviceContext";
import dice from '../assets/icon-dice.svg'
import dividerMobile from '../assets/pattern-divider-mobile.svg'
import dividerDesktop from '../assets/pattern-divider-desktop.svg'

const AdviceCard = () => {
  const { advice, loading, error, errMsg, getAdvice } =
    useContext(AdviceContext);

  return (
    <div className="card p-2  bg-dark-grayish-blue rounded-2xl w-full max-w-xl text-light-cyan relative mx-4 sm:mx-6 lg:mx-0 lg:-mt-9">
      <div className={"min-h-80 flex flex-col items-center text-xl lg:text-2xl " + ((error || loading) ? 'justify-center' : 'pt-10')}>
        <h1 className="absolute w-1 h-1 overflow-hidden">Advice Generator</h1>
        {!error ? (
          <div className="advice text-center">
            {loading ? (
              <h2 className="">Loading...</h2>
            ) : ( 
              <div className="px-4 lg:px-11 pt-1">
                <h2 className="text-neon-green uppercase text-sm tracking-1 mb-5 font-normal">Advice #{advice.id}</h2>
                <blockquote className="leading-10 mb-28">"{advice.advice}"</blockquote>
              </div>
            )}
          </div>
        ) : (
          <>
            <p className="">{errMsg}. Reload page</p>
          </>
        )}
        <div className="absolute bottom-20 -mb-2">
          <img className="flex lg:hidden" src={dividerMobile} alt="mobile-divider"/>
          <img className="lg:flex hidden" src={dividerDesktop} alt="desktop-divider"/>
        </div>
        <div className="w-16 h-16 bg-neon-green flex rounded-full items-center justify-center cursor-pointer absolute -bottom-8 shadow-none hover:shadow-3xl transition-all">
          <img onClick={getAdvice} className="w-6 h-6" src={dice} alt="dice"/>
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;
