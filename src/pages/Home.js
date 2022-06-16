import React from 'react'
import MainCom from '../components/MainCom.jsx';
import { useState } from 'react';
import { clickerContext } from '../components/helper/clickerContext.js';
import FooterCom from '../components/FooterCom';
function Home() {
  const [isClicked,setIsClicked] = useState(false);
  return (
    <clickerContext.Provider value={{isClicked,setIsClicked}}>
        <MainCom />
        <FooterCom />
    </clickerContext.Provider>
  )
}

export default Home