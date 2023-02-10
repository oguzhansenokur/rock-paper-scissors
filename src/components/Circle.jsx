import React from 'react'
import './circle.scss'
import { MainContext,useContext } from '../context'

export default function Circle({type,setHouseHold,setSelectedCard,setStep}) {
  const cards=['rock','paper','scissors']
  var randomNumber=Math.floor(Math.random()*cards.length)
  const ClickHandler=()=>
  {
    setHouseHold(cards[randomNumber])
    setSelectedCard(type)
    setStep(2)
  }

  return (
    <div role={'button'} onClick={ClickHandler} className={'circle '+type} >
        <div className={"circle__inside-circle "+type}>

        </div>
    </div>
  )
}
