import React from 'react'
import MenuButton from './MenuButton'
import Logo from "../assets/images/logo.svg"
import PlayerVsCPU from '../assets/images/player-vs-cpu.svg'
import PlayerVsPlayer from '../assets/images/player-vs-player.svg'

function MainMenu() {
  return (
    <div className='h-full w-full | flex flex-col justify-center items-center'>
        <div className='absolute top-0 left-0 | h-screen w-screen | bg-black opacity-20'></div>
        <div className='z-10 | border-2 border-black border-solid | bg-purple | h-2/3 w-1/3 | rounded-xl | flex flex-col justify-around items-center'>
            <img src={Logo} alt="logo" className='h-1/6 w-1/6 | select-none' />
            <div className='w-full  h-3/4 | flex flex-col justify-center items-center'>
                <MenuButton text="PLAY VS CPU" image={PlayerVsCPU} color="bg-red"/>
                <MenuButton text ="PLAY VS PLAYER" image={PlayerVsPlayer} color="bg-yellow"/>
                <MenuButton text="GAME RULES" image={PlayerVsCPU} color="bg-white" noImg={true}/>
            </div>
        </div>
    </div>
  )
}

export default MainMenu
