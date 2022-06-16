import React from 'react'
import './style/header.css';
import { useSelector } from 'react-redux';
function HeaderCom() {
  const score = useSelector((state) => state.clicker.clicker);
  return (
    <header>
      <div className='wrapper'>
        <article>
            <h2>ROCK</h2>
            <h2>PAPER</h2>
            <h2>SCISSORS</h2>
        </article>
        <article className='score'> 
            <p>Score</p>
            <p className='score__point'>{score}</p>
        </article>
        </div>
    </header>
  )
}

export default HeaderCom;