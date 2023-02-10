import React, { useEffect, useState } from 'react';
import './game.scss';
import './result.scss';
import { MainContext, useContext } from './context';

export default function Game({ houseHoldCircle, selectedCircle }) {
  const {
    setMessage,
    selectedCard,
    message,
    houseHold,
    setStep,
    result,
    setResult,
    setScore,
    setSelectedCard,
    setHouseHold,
    score
  } = useContext(MainContext);
  const [selectedsArray,setSelectedArray]=React.useState([houseHoldCircle,selectedCircle])

  useEffect(() => {
    if (selectedCard === houseHold) {
      setMessage('DRAW');
      localStorage.setItem('score',score)

      setSelectedCard('')
     setHouseHold('')

    } else if (
      (selectedCard === 'rock' && houseHold === 'scissors') ||
      (selectedCard === 'scissors' && houseHold === 'paper') ||
      (selectedCard === 'paper' && houseHold === 'rock')
    ) {
      setMessage('YOU WIN');
      setScore(score + 1);
      localStorage.setItem('score',score)
      setSelectedCard('')
        setHouseHold('')

    } else if (
      (houseHold === 'rock' && selectedCard === 'scissors') ||
      (houseHold === 'scissors' && selectedCard === 'paper') ||
      (houseHold === 'paper' && selectedCard === 'rock')
    ) {
      setMessage('YOU LOSE');
      if (score > 0) {
        setScore(score - 1);
        localStorage.setItem('score',score)
        setSelectedCard('')
        setHouseHold('')

      }
    }
    localStorage.setItem('score',score)
    setResult(true);
    
  }, [score]);

  const playAgain = () => {
    setStep(1);
    setScore(score)
  };

  return (
    <div className='game-area'>
      <div className='game-area__players'>
        <div className='game-area__players__player'>
          <span> YOU PICKED </span>
          <div className='game-area__players__player__circle'>
            {selectedsArray[1]}
          </div>
        </div>
        {result ? (
          <div className='result'>
            <span className='result__message'>{message}</span>
            <button className='result__button' onClick={playAgain}>
              PLAY AGAIN
            </button>
          </div>
        ) : (
          ''
        )}
        <div className='game-area__players__player'>
          <span> THE HOUSE PICKED </span>
          <div className='game-area__players__player__circle'>
            {selectedsArray[0]}
          </div>
        </div>
      </div>
    </div>
  );
}
