import React, { useEffect } from 'react'
import './result.scss'
import { MainContext,useContext } from './context'


export default function Result() {
  const {message}=useContext(MainContext);

console.log('mes',message)

  
  return (
    <div className='result' >
        <span className='result__message'  >{message}</span>
        <button className='result__button' >PLAY AGAIN</button>
    </div>
  )
}
