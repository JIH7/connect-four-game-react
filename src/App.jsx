import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainMenu from './components/MainMenu'
import '../public/main.css'

function App() {
  const [gameState, setGameState] = useState('mainMenu');

  return (
    <div className='h-screen bg-purple | flex flex-col justify-center items-center'>
      {gameState === "mainMenu" ? <MainMenu/> : <></>}
    </div>
  );
}

export default App
