import React, { useContext } from 'react'
import './style/footer.css';
import Popup from './Popup';
import { clickerContext } from './helper/clickerContext';
function FooterCom() {
    const { setIsClicked } = useContext(clickerContext);
    const { isClicked} = useContext(clickerContext);
    const handleClick = () =>{
        setIsClicked(true);
    }
  return (
    <footer>
        {isClicked && <Popup></Popup> }
        <button onClick={() =>handleClick()}>Rules</button>
    </footer>
  )
}

export default FooterCom