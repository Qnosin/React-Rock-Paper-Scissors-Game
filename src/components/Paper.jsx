import React from 'react'
import { useNavigate } from 'react-router-dom';
import paper from './style/images/icon-paper.svg';
function Paper({inResult}) {
  let navigate = useNavigate();
  const clickHandle = (e) =>{
    let pick =  e.target.classList[1];
    console.log(pick);
    navigate('/result', {state :{ playerPick : pick}})
  }
  return (
    <img onClick={(e)=> clickHandle(e)} className={`block paper ${inResult === true ? 'result' : ''}`} src={paper} alt='paper-icon'></img>
  )
}

export default Paper