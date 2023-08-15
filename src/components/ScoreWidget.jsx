import React from 'react'
import PlayerOne from '../assets/images/player-one.svg'
import PlayerTwo from '../assets/images/player-two.svg'
import Human from '../assets/images/you.svg'
import CPU from '../assets/images/cpu.svg'

const ScoreWidget = ({desktop = true, styles, side='left', player='player1', score = 0}) => {
  return (
    <div className={`${desktop ? 'h-[160px] w-[141px]' : 'h-[100px] md:h-[70px] w-1/2 mx-[20px]'} flex ${desktop ? 'flex-col justify-around items-center pt-8 pb-4' : `${(side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse')} flex-col  justify-center items-center px-4`} | relative | rounded-[20px] | bg-white | border-2 border-b-8 border-black border-solid ${styles}`}>
      <img src={player === 'player1' ? PlayerOne : (player === 'player2' ? PlayerTwo : (player === 'human' ? Human : CPU))}
        className={`absolute ${desktop ? '-top-[2rem] left-0 right-0 m-auto' : (side === 'left' ? '-left-[1.8rem]' : '-right-[1.8rem]')}`}/>
        <p className='md:mx-4 '>{player === 'player1' ? 'PLAYER 1' : (player === 'player2' ? "PLAYER 2" : (player === 'human' ? "YOU" : "CPU"))}</p>
        <p className='text-[56px] leading-[2.5rem]'>{score}</p>
    </div>
  )
}

export default ScoreWidget
