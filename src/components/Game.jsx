import {useState} from 'react'

import GameBoard from './GameBoard'
import Logo from "../assets/images/logo.svg"
import MarkerYellow from "../assets/images/marker-yellow.svg"
import MarkerRed from "../assets/images/marker-red.svg"

import InGameButton from './InGameButton'
import PauseMenu from './PauseMenu';

function Game({setGameState}) {
    const [paused, setPaused] = useState(false);
    const [startingPlayer, setStartingPlayer] = useState('x')
    const [currentPlayer, setCurrentPlayer] = useState('x');
    const [oppositePlayer, setOppositePlayer] = useState('o');
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('')

    //Returns a blank 7x6 board
    const blankBoard = () => {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const row = [];
            for (let j = 0; j < 7; j++) {
                row.push('');
            }
            rows.push(row);
        }
        return rows;
    }

    const [board, setBoard] = useState(blankBoard())
    

    const togglePaused = () => {
        setPaused(!paused);
    }

    const restartGame = () => {
        setBoard(blankBoard);
        if(startingPlayer === 'x') {
            setStartingPlayer('o');
            setCurrentPlayer('o');
            setOppositePlayer('x');
        } else {
            setStartingPlayer('x');
            setCurrentPlayer('x');
            setOppositePlayer('o')
        }
        setWinner('')
    }

    const quitGame = () => {
        setGameState("mainMenu")
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-between items-center | w-full | mt-[30px] mb-10'>
                <InGameButton text={"MENU"} handleClick={togglePaused} buttonFunction={"mainMenu"}/>
                <img className='h-[52px] w-[52px]' src={Logo} alt="logo" />
                <InGameButton text={"RESTART"} handleClick={restartGame}/>
            </div>
            <GameBoard
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                oppositePlayer={oppositePlayer}
                setOppositePlayer={setOppositePlayer}
                gameOver={gameOver}
                setGameOver={setGameOver}
                winner={winner}
                setWinner={setWinner}
                restartGame={restartGame}/>
            
            <div className={`absolute w-screen h-[20vh] md:h-[10vh] | bottom-0 | ${winner === '' ? 'bg-dark-purple' : (winner === 'x' ? 'bg-red' : 'bg-yellow')} rounded-t-[2rem]`}></div>
            {paused ? <PauseMenu togglePaused={togglePaused} restartGame={restartGame} quitGame={quitGame}/> : <></>}
        </div>
  )
}

export default Game
