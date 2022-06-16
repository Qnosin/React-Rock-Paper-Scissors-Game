import React from 'react'
import rock from './style/images/icon-rock.svg';
import { useNavigate } from 'react-router-dom';
function Rock({inResult}) {
  let navigate = useNavigate();
  const clickHandle = (e) =>{
    let pick =  e.target.classList[1];
    navigate('/result',{state :{ playerPick : pick}})
  }
  return (
    <img  onClick={(e)=> clickHandle(e)} className={`block rock ${inResult === true ? 'result' : ''}`} src={rock} alt='rock-icon'></img>
  )
}

export default Rock