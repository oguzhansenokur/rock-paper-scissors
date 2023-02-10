import React from 'react';
import Circle from './components/Circle';
import './style.scss';
import { MainContext, useContext } from './context';

export default function MainState({
  setSelectedCard,
  setHouseHold,
  setStep,
  step
}) {
  return (
    <div className='main-state-container'>
      <div className='main-state-container__row'>
        <div className='circle-1'>
          <Circle
            step={step}
            setStep={setStep}
            setSelectedCard={setSelectedCard}
            setHouseHold={setHouseHold}
            type='paper'
          />
        </div>
        <div className='circle-2'>
          <Circle
            step={step}
            setStep={setStep}
            setSelectedCard={setSelectedCard}
            setHouseHold={setHouseHold}
            type='scissors'
          />
        </div>
      </div>
      <div className='main-state-container__row'>
        <div className='circle-3'>
          <Circle
            step={step}
            setStep={setStep}
            setSelectedCard={setSelectedCard}
            setHouseHold={setHouseHold}
            type='rock'
          />
        </div>
      </div>
    </div>
  );
}

