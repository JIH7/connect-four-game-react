import {useState, useRef, useEffect} from 'react'
import BoardWhite from '../assets/images/board-layer-white-large.svg'
import BoardBlack from '../assets/images/board-layer-black-large.svg'

import BoardWhiteSmall from '../assets/images/board-layer-white-small.svg'
import BoardBlackSmall from '../assets/images/board-layer-black-small.svg'

import BoardSlot from './BoardSlot';
import ClickDetector from './ClickDetector'
import Pointer from './Pointer'
import Timer from './Timer'

import cpuMove from './CpuPlayer'

function GameBoard({
    board,
    setBoard = () => console.log("No setBoard function set."),
    currentPlayer = 'x',
    setCurrentPlayer = () => console.log("No setCurrentPlayer function set."),
    oppositePlayer = 'o',
    setOppositePlayer = () => console.log("No setOppositePlayer function set."),
    gameOver = '',
    setGameOver = () => console.log("No setGameOver function set."),
    winner = '',
    setWinner = () => console.log("No setWinner function set"),
    restartGame = () => console.log("No restartGame function set"),
    timer = 0,
    resetTimer = () => console.log("No resetTimer function set."),
    increaseScore = () => console.log("No increaseScore function set."),
    vsCPU = false
}) {

    const [hoveredCol, setHoveredCol] = useState(0)
    
    const checkForWin = (player) => {
        //Check for horizontal win
        for (let i = 0; i < 6; i++) {
            let horizontalStreak = 0;
            for (let j = 0; j < 7; j++){
                if(board[i][j] === player) {
                    horizontalStreak++;
                } else {
                    horizontalStreak = 0;
                }
                if (horizontalStreak >= 4) {
                    setWinner(player);
                    increaseScore(player);
                    return;
                }
            }
        }

        //Check for vertical win
        for (let i = 0; i < 7; i++) {
            let verticalStreak = 0;
            for (let j = 0; j < 6; j++) {
                if(board[j][i] === player) {
                    verticalStreak++;
                } else {
                    verticalStreak = 0;
                }
                if (verticalStreak >= 4) {
                    setWinner(player);
                    increaseScore(player);
                    return;
                }
            }
        }

        //Check for diagonal win
        for (let i = 0; i < 6; i++) {
            let diagonalStreak = 0;
            for (let j = 0; j < 7; j++) {
                if(board[i][j] === player) {
                    // Diagonal up + left
                    if (i >= 3 && j >= 3) {
                        for (let k = 0; k < 4; k++) {
                            const rowIndex = i - k;
                            const colIndex = j - k;
                            if (board[rowIndex][colIndex] === player) {
                                diagonalStreak++;
                            }
                        }
                        if (diagonalStreak >= 4) {
                            setWinner(player);
                            increaseScore(player);
                            return;
                        }
                    }
                    diagonalStreak = 0;

                    //Diagonal down + left
                    if (i <= 2 && j >= 3) {
                        for (let k = 0; k < 4; k++) {
                            const rowIndex = i + k;
                            const colIndex = j - k;
                            console.log(`Checking board[${rowIndex}][${colIndex}]`);
                            if (board[rowIndex][colIndex] === player) {
                                diagonalStreak++;
                                if (diagonalStreak >= 4) {
                                    setWinner(player);
                                    increaseScore(player);
                                    return;
                                }
                            } else {
                                diagonalStreak = 0; // Reset streak if not a player's token
                            }
                        }
                    }
                }
            }
        }
    }

    const addToken = (col) => {
        let newBoard = [...board];
        let highestToken = 6;

        for (let i = 0; i < 6; i++) {
            if(newBoard[i][col] !== '' && i < highestToken) {
                highestToken = i;
            }
        }
        if (highestToken > 0) {
            newBoard[highestToken - 1][col] = currentPlayer;

            const currentPlayerCopy = currentPlayer;

            setCurrentPlayer(oppositePlayer);
            setOppositePlayer(currentPlayerCopy);
            resetTimer();
        }
        setBoard(newBoard);
        checkForWin(currentPlayer);
    }

    const timerId = useRef()

    useEffect(() => {
        if (vsCPU && currentPlayer === 'o' && !timerId.current && winner === '') {
            const id = setTimeout(() => {
                const cpuCol = cpuMove(board, 'o');
                addToken(cpuCol);
                clearTimeout(timerId.current)
                timerId.current = false;
            }, ((Math.random() * 850) + 350)); //Randomize delay to make it feel more like the bot is "thinking"
            timerId.current = id;
        }
    }, [board, currentPlayer, vsCPU])


    return (
        <>
            <div className='relative | hidden md:block'>
                <Pointer currentPlayer={currentPlayer} hoveredCol={hoveredCol}/>
                <img className='relative z-10' src={BoardWhite} alt="board" />
                <img className='absolute z-[2] | top-[.25rem]' src={BoardBlack} alt="board-background" />
                <div id='board' className='absolute top-0 h-full w-full | px-[.9rem] pt-[1rem] pb-[3.5rem] | grid grid-rows-6 grid-cols-7 gap-x-[1.2rem] gap-y-4'>
                    {board.map((row, i) => {
                        return row.map((character, j) => {
                            return <BoardSlot character={character} y={i} x={j}/>
                        })
                    })}
                    {
                        winner === '' ?
                        <div className='absolute h-full w-full | px-2 | flex'>
                            {
                                !(vsCPU && currentPlayer === 'o') ?
                                board[0].map((col, i) => {
                                    return <ClickDetector colNum={i} setHoveredCol={setHoveredCol} addToken={addToken}/>
                                })
                                :
                                <></>
                            }
                        </div>
                        :
                        ''
                    }
                        
                    <Timer currentPlayer={currentPlayer} winner={winner} restartGame={restartGame} timer={timer}/>
                </div>
            </div>
            <div className='relative | block md:hidden'>
                <Pointer currentPlayer={currentPlayer} hoveredCol={hoveredCol}/>
                <img className='relative z-10' src={BoardWhiteSmall} alt="board" />
                <img className='absolute z-[2] | top-[.25rem]' src={BoardBlackSmall} alt="board-background" />
                <div id='board' className='absolute top-0 h-full w-full | px-[.7rem] pt-[.4rem] pb-[1.9rem] | grid grid-rows-6 grid-cols-7 gap-x-[.6rem] gap-y-[.6rem]'>
                    {board.map((row, i) => {
                        return row.map((character, j) => {
                            return <BoardSlot character={character} y={i} x={j}/>
                        })
                    })}
                    {
                        winner === '' ?
                        <div className='absolute h-full w-full | px-2 | flex'>
                            {
                                !(vsCPU && currentPlayer === 'o') ?
                                board[0].map((col, i) => {
                                    return <ClickDetector colNum={i} setHoveredCol={setHoveredCol} addToken={addToken}/>
                                })
                                :
                                <></>
                            }
                        </div>
                        :
                        ''
                    }
                    <Timer currentPlayer={currentPlayer} winner={winner} restartGame={restartGame} timer={timer}/>
                </div>
            </div>
        </>
  )
}

export default GameBoard
