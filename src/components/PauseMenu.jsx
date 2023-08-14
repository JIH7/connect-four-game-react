import React from 'react'
import PauseMenuButton from './PauseMenuButton'

function PauseMenu({togglePaused, restartGame, quitGame}) {
  return (
    <div className='absolute w-screen h-screen top-0 left-0 | flex justify-center items-center'>
        <div className='absolute w-full h-full | bg-black opacity-40 | z-[19]'></div>
        <div className='relative z-[20] | flex flex-col items-center justify-around | w-11/12 h-[60%] md:w-3/4 md:h-3/4 lg:h-2/3 lg:w-1/3 | rounded-3xl | bg-purple | border-2 border-b-8 border-black border-solid'>
            <h1 className='text-white text-[3.5rem] | mt-12 mb-6 lg:mb-10'>PAUSE</h1>
            <PauseMenuButton text={"CONTINUE GAME"} color={"bg-white"} handleClick={togglePaused}/>
            <PauseMenuButton text={"RESTART"} color={"bg-white"} handleClick={restartGame}/>
            <PauseMenuButton text={"QUIT GAME"} color={"bg-red"} handleClick={quitGame}/>
        </div>
    </div>
  )
}

export default PauseMenu
