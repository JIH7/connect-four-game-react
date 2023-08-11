import {useState} from 'react'
import BoardWhite from '../assets/images/board-layer-white-large.svg'
import BoardBlack from '../assets/images/board-layer-black-large.svg'
import BoardSlot from './BoardSlot';

function GameBoard() {
    //Initialize blank 7x6 board
    const [board, setBoard] = useState(() => {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const row = [];
            for (let j = 0; j < 7; j++) {
                row.push('x');
            }
            rows.push(row);
        }
        return rows;
    })
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [oppositePlayer, setOppositePlayer] = useState('O');
    const [gameOver, setGameOver] = useState(false);

    return (
        <div className='relative | hidden md:block'>
            <img className='relative z-10' src={BoardWhite} alt="board" />
            <img className='absolute z-[2] | top-[.25rem]' src={BoardBlack} alt="board-background" />
            <div id='board' className='absolute top-0 h-full w-full | px-[.9rem] pt-[1rem] pb-[3.5rem] | grid grid-rows-6 grid-cols-7 gap-x-[1.2rem] gap-y-4'>
                {board.map((row, i) => {
                    return row.map((character, j) => {
                        return <BoardSlot character={character} y={i} x={j}/>
                    })
                })}
            </div>
        </div>
  )
}

export default GameBoard
