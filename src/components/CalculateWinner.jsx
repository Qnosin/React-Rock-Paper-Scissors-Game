import React from 'react'
import { useDispatch } from 'react-redux'
import { clickerAction } from '../store/store';
function CalculateWinner ({computer,player}) {
    let dispatch = useDispatch();
    switch(player){
        case 'paper':
            if(computer === 'paper'){
                return(
                    <h1>Draw</h1>
                )
            }
            if(computer === 'rock'){
                dispatch(clickerAction.win(1))
                return(
                    <h1>You Win</h1>
                )
            }
            if(computer === 'scissor'){
                return (
                    <h1>You Lose</h1>
                )
            }
            break;
        case "rock":
            if(computer === 'rock'){
                return(
                    <h1>Draw</h1>
                )
            }
            if(computer === 'paper'){
                return (
                    <h1>You Lose</h1>
                )
            }
            if(computer === 'scissor'){
                dispatch(clickerAction.win(1))
                return(
                    <h1>You Win!</h1>
                )
            }
            break;
        case 'sicssors':
            if(computer === 'scissor'){
                return(
                    <h1>Draw</h1>
                )
            }
            if(computer === 'paper'){
                dispatch(clickerAction.win(1))
                return (
                    <h1>You Win</h1>
                )
            }
            if(computer === 'rock'){
                return(
                    <h1>You Lose</h1>
                )
            }
            break;
        default:
            return(
                <h1>Erorr</h1>
            )
    }
}

export default CalculateWinner