import MainState from './MainState';
import Game from './Game';
import './style.scss';
import React, { useEffect } from 'react';
import Circle from './components/Circle';
import { MainContext } from './context';

function App() {
  const [step, setStep] = React.useState(1);
  const [selectedCard, setSelectedCard] = React.useState('');
  const [houseHold, setHouseHold] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [result, setResult] = React.useState(false);
  const [score, setScore] = React.useState(
    localStorage.getItem('score') ? Number(localStorage.getItem('score')) : Number(0)
  );
  
  const data = {
    selectedCard,
    houseHold,
    setSelectedCard,
    setHouseHold,
    setMessage,
    message,
    setResult,
    result,
    setStep,
    score,
    setScore
  };

  return (
    <MainContext.Provider value={data}>
      <div className='page'>
        <div className='main-container'>
          <div className='main-container__header'>
            <div className='main-container__header__logo'>
              <span>ROCK</span>
              <span>PAPER</span>
              <span>SCISSORS</span>
            </div>
            <div className='main-container__header__score-board'>
              <span>SCORE</span>
              <div className='main-container__header__score-board__score'>
                {score}
              </div>
            </div>
          </div>
        </div>
        {step === 1 ? (
          <MainState
            setStep={setStep}
            step={step}
            setSelectedCard={setSelectedCard}
            setHouseHold={setHouseHold}
          />
        ) : step === 2 ? (
          <Game
            selectedCircle={
              <Circle
                setHouseHold={setHouseHold}
                setSelectedCard={setSelectedCard}
                setStep={setStep}
                type={selectedCard}
              />
            }
            houseHoldCircle={
              <Circle
                setHouseHold={setHouseHold}
                setStep={setStep}
                setSelectedCard={setSelectedCard}
                type={houseHold}
              />
            }
            step={step}
            setStep={setStep}
          />
        ) : (
          ''
        )}
        {/* <MainState/>  */}
        {/* <Game selectedCircle={<Circle type='rock' />} houseHoldCircle={<Circle type='scissors' />} /> */}
      </div>
    </MainContext.Provider>
  );
}

export default App;
