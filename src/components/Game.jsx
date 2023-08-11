import {useState} from 'react'
import GameBoard from './GameBoard'

import Logo from "../assets/images/logo.svg"
import InGameButton from './InGameButton'
import PauseMenu from './PauseMenu';

function Game({setGameState}) {
    const [paused, setPaused] = useState(false);

    const togglePaused = () => {
        setPaused(!paused);
    }

    const restartGame = () => {
        console.log("game restarted")
        //Todo Implement restart game
    }

    const quitGame = () => {
        setGameState("mainMenu")
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-between items-center | w-full | mb-10'>
                <InGameButton text={"MENU"} handleClick={togglePaused} buttonFunction={"mainMenu"}/>
                <img src={Logo} alt="logo" />
                <InGameButton text={"RESTART"}/>
            </div>
            <GameBoard/>
            {paused ? <PauseMenu togglePaused={togglePaused} restartGame={restartGame} quitGame={quitGame}/> : <></>}
        </div>
  )
}

export default Game
