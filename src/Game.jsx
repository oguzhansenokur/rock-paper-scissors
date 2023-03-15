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
  const resArr=[selectedCard,houseHold]
  useEffect(() => {
    if (resArr[0]  === resArr[1] ) {
      setMessage('DRAW');
      localStorage.setItem('score',score)

   

    } else if (
      (resArr[0] === 'rock' && resArr[1] === 'scissors') ||
      (resArr[0] === 'scissors' && resArr[1] === 'paper') ||
      (resArr[0] === 'paper' && resArr[1] === 'rock')
    ) {
      setMessage('YOU WIN');
      setScore(score + 1);
      localStorage.setItem('score',score)
     

    } else if (
      (resArr[1] === 'rock' && resArr[0]  === 'scissors') ||
      (resArr[1]  === 'scissors' && resArr[0]  === 'paper') ||
      (resArr[1]  === 'paper' && resArr[0]  === 'rock')
    ) {
      setMessage('YOU LOSE');
      if (score > 0) {
        setScore(score - 1);
        localStorage.setItem('score',score)
     

      }
    }
 
    setResult(true);
    setNewScore()
  }, []);


  const setNewScore=()=>{
   return localStorage.setItem('score',score)
  }  

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
