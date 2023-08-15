import {useState, useEffect} from 'react'

import GameBoard from './GameBoard'
import Logo from "../assets/images/logo.svg"
import MarkerYellow from "../assets/images/marker-yellow.svg"
import MarkerRed from "../assets/images/marker-red.svg"

import InGameButton from './InGameButton'
import PauseMenu from './PauseMenu';
import ScoreWidget from './ScoreWidget'

function Game({setGameState, vsCPU = false}) {
    const [paused, setPaused] = useState(false);
    const [startingPlayer, setStartingPlayer] = useState('x')
    const [currentPlayer, setCurrentPlayer] = useState('x');
    const [oppositePlayer, setOppositePlayer] = useState('o');
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);

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

    const increaseScore = (player) => {
        if(player === 'x')
            setP1Score(p1Score + 1);
        else
            setP2Score(p2Score + 1);
    }

    const [board, setBoard] = useState(blankBoard())

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if(!paused)
                setTimer((t) => t + 1);
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [])

    const resetTimer = () => {
        setTimer(0);
    }

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
        resetTimer();
        setWinner('')
    }

    const quitGame = () => {
        setGameState("mainMenu")
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-around items-center | w-full | mt-[30px] mb-10'>
                <InGameButton text={"MENU"} handleClick={togglePaused} buttonFunction={"mainMenu"}/>
                <img className='h-[52px] w-[52px]' src={Logo} alt="logo" />
                <InGameButton text={"RESTART"} handleClick={restartGame}/>
            </div>
            <div className='flex flex-col lg:flex-row lg:w-screen lg:justify-center items-center'>
                <div className='flex justify-center w-full mb-[32px] lg:hidden'>
                    <ScoreWidget score={p1Score} desktop={false} styles={'block lg:hidden'} side={'left'} player={vsCPU ? 'human' : 'player1'}/>
                    <ScoreWidget score={p2Score} desktop={false} styles={'block lg:hidden'} side={'right'} player={vsCPU ? 'cpu' : 'player2'}/>
                </div>
                <ScoreWidget score={p1Score} player={vsCPU ? 'human' : 'player1'} styles={'hidden lg:flex mx-[60px]'}/>
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
                    restartGame={restartGame}
                    timer={timer}
                    resetTimer={resetTimer}
                    increaseScore={increaseScore}
                    vsCPU={vsCPU}/>
                    <ScoreWidget score={p2Score} player={vsCPU ? 'cpu' : 'player2'} styles={'hidden lg:flex mx-[60px]'}/>
            </div>
            <div className={`absolute w-screen h-[20vh] md:h-[10vh] | bottom-0 | ${winner === '' ? 'bg-dark-purple' : (winner === 'x' ? 'bg-red' : 'bg-yellow')} rounded-t-[2rem]`}></div>
            {paused ? <PauseMenu togglePaused={togglePaused} restartGame={restartGame} quitGame={quitGame}/> : <></>}
        </div>
  )
}

export default Game
