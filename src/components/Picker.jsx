import React from 'react'
import Rock from './Rock'
import Paper from './Paper'
import Sicssors from './Sicssors'
function Picker({value}) {
  return (
    <>
    {value === 'rock' ? <Rock inResult={true} /> : ''}
    {value === 'paper' ? <Paper inResult={true} /> : ''}
    {value === 'sicssors' ? <Sicssors inResult={true} /> : ''}
    </>
  )
}

export default Picker