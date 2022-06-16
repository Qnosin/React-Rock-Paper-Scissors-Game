import React, { useContext } from 'react'
import './style/popup.css';
import { clickerContext } from './helper/clickerContext';
import {motion} from 'framer-motion';
function Popup() {
  const {setIsClicked} = useContext(clickerContext);
  const handleClick = () =>{
    setIsClicked(false);
  }
  return (
    <motion.div animate={{scale:1}} initial={{scale:0,top:'50%',left:'50%',translateX:'-50%',translateY:'-50%'}}  className='Popup'>
      <div className='exit' onClick={() => handleClick()}></div>
      <div className='sign'>Rules</div>
    </motion.div>
  )
}

export default Popup