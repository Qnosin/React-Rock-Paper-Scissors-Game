import React from 'react'
import sicssors from './style/images/icon-scissors.svg';
import { useNavigate } from 'react-router-dom';
function Sicssors({inResult}) {
  let navigate = useNavigate();
  const clickHandle = (e) =>{
    let pick =  e.target.classList[1];
    navigate('/result',{state :{ playerPick : pick}})
  }
  return (
    <img onClick={(e)=> clickHandle(e)} className={`block sicssors ${inResult === true ? 'result' : ''}`} src={sicssors} alt='sicssors-icon'></img>
  )
}

export default Sicssors