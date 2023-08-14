import {useState} from 'react'
import BoardWhite from '../assets/images/board-layer-white-large.svg'
import BoardBlack from '../assets/images/board-layer-black-large.svg'

import BoardWhiteSmall from '../assets/images/board-layer-white-small.svg'
import BoardBlackSmall from '../assets/images/board-layer-black-small.svg'

import TurnBackgroundRed from "../assets/images/turn-background-red.svg"
import TurnBackgroundYellow from "../assets/images/turn-background-yellow.svg"

import BoardSlot from './BoardSlot';
import ClickDetector from './ClickDetector'
import Pointer from './Pointer'

function GameBoard({
    board,
    setBoard = () => console.log("No setBoard function set."),
    currentPlayer = 'x',
    setCurrentPlayer = () => console.log("No setCurrentPlayer function set."),
    oppositePlayer = 'o',
    setOppositePlayer = () => console.log("No setOppositePlayer function set."),
    gameOver = '',
    setGameOver = () => console.log("No setGameOver function set.")
}) {

    const [hoveredCol, setHoveredCol] = useState(0)
    //Initialize blank 7x6 board

    const addToken = (col) => {
        let newBoard = board;
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
        }
        setBoard(newBoard.map((row) => row))
        console.log(board)
    }
    

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
                    <div className='absolute h-full w-full | px-2 | flex'>
                        {
                            board[0].map((col, i) => {
                                return <ClickDetector colNum={i} setHoveredCol={setHoveredCol} addToken={addToken}/>
                            })
                        }
                    </div>
                    <div className='h-[197px] w-[165px] z-[10] absolute -bottom-[8rem] left-0 right-0 m-auto | '>
                        <img className='origin-center' src={currentPlayer === 'x' ? TurnBackgroundRed : TurnBackgroundYellow} alt="timeMarker" />
                    </div>
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
                    <div className='absolute h-full w-full | px-2 | flex'>
                        {
                            board[0].map((col, i) => {
                                return <ClickDetector colNum={i} setHoveredCol={setHoveredCol} addToken={addToken}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
  )
}

export default GameBoard
