import React from 'react'
import { useNavigate } from 'react-router-dom'
function ReturnToMenu() {
  let navigate = useNavigate();

  const handleNavigation = ()=>{
    localStorage.removeItem('computerPick');
    navigate('/');
  }
  return (
    <button className='MainMenu' onClick={handleNavigation}>
        Return to Menu
    </button>
  )
}

export default ReturnToMenu