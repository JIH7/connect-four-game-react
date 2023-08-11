import React from 'react'
import GameBoard from './GameBoard'

import Logo from "../assets/images/logo.svg"
import InGameButton from './InGameButton'

function Game() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-between items-center | w-full | mb-10'>
            <InGameButton text={"MENU"}/>
            <img src={Logo} alt="logo" />
            <InGameButton text={"RESTART"}/>
        </div>
        <GameBoard/>
    </div>
  )
}

export default Game
