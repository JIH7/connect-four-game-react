import React from 'react'
import BoardWhite from '../assets/images/board-layer-white-large.svg'
import BoardBlack from '../assets/images/board-layer-black-large.svg'

function GameBoard() {
  return (
    <div className='relative | hidden md:block'>
      <img className='relative z-10' src={BoardWhite} alt="board" />
      <img className='absolute z-[2] | top-[.25rem]' src={BoardBlack} alt="board-background" />
    </div>
  )
}

export default GameBoard
