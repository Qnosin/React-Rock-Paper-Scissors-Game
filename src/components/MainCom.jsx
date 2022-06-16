import React from 'react'
import Paper from './Paper';
import Rock from './Rock';
import Sicssors from './Sicssors';
import './style/main.css';
function MainCom() {
  return (
    <main>
        <div className='traingle-block'>
          <Paper/>
          <Rock/>
          <Sicssors/>
          </div>
    </main>
  )
}

export default MainCom