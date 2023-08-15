import React from 'react'
import MenuButton from './MenuButton'
import Logo from "../assets/images/logo.svg"
import PlayerVsCPU from '../assets/images/player-vs-cpu.svg'
import PlayerVsPlayer from '../assets/images/player-vs-player.svg'

function MainMenu({setGameState}) {
  return (
    <div className='h-full w-full | flex flex-col justify-center items-center'>
        <div className='absolute top-0 left-0 | h-screen w-screen | bg-black opacity-40'></div>
        <div className='z-10 | border-2 border-b-8 border-black border-solid | bg-purple | h-full w-full md:h-1/2 md:w-2/3 lg:h-2/3 lg:w-1/3 | md:rounded-3xl | flex flex-col justify-around items-center'>
            <img src={Logo} alt="logo" className='h-1/6 w-1/6 | my-14 | select-none' />
            <div className='w-full md:w-11/12  h-3/4 | flex flex-col justify-center items-center'>
                <MenuButton text="PLAY VS CPU" image={PlayerVsCPU} color="bg-red" handleClick={setGameState} stateTrigger={"gameCPU"}/>
                <MenuButton text ="PLAY VS PLAYER" image={PlayerVsPlayer} color="bg-yellow" handleClick={setGameState} stateTrigger={"gamePVP"}/>
                <MenuButton text="GAME RULES" image={PlayerVsCPU} color="bg-white" handleClick={setGameState} stateTrigger={"rules"} noImg={true}/>
            </div>
        </div>
    </div>
  )
}

export default MainMenu
