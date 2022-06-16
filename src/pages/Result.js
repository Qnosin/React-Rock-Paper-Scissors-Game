import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'
import "../components/style/result.css";
import useComputerLogic from '../components/hooks/useComputerLogic';
import Picker from '../components/Picker';
import EmptyHouse from '../components/EmptyHouse';
import CalculateWinner from '../components/CalculateWinner';
import ReturnToMenu from '../components/ReturnToMenu';
import {motion} from 'framer-motion';
function Result() {
    const [showHouse,setShowHouse] = useState(false);
    const { state } = useLocation();
    const { playerPick } = state;
    const  { computerPick } = useComputerLogic();

    if(localStorage.getItem('computerPick')){
    }else{
        localStorage.setItem('computerPick', computerPick);
    }

    setTimeout(()=>{
        setShowHouse(true);
    },2000)

  return (
    <>
    <div className='results_main'>
        <motion.div initial={{scale:0}} animate={{scale:1}} className='player'>
            <Picker value={playerPick} />
            <p className='result-text'>Player Picked</p>
        </motion.div>
        <motion.div initial={{scale:0}} animate={{scale:1}} className='computer'>
          {showHouse === true ? <Picker value={localStorage.getItem('computerPick')} /> : <EmptyHouse /> } 
          {showHouse && <p  className='result-text'>House Picked</p>} 
        </motion.div>
    </div>
    <div className='result-area'>
      {showHouse &&  <CalculateWinner  player={playerPick} computer={localStorage.getItem('computerPick')} /> } 
      {showHouse && <ReturnToMenu />}
    </div>
    </>
    
  )
}

export default Result