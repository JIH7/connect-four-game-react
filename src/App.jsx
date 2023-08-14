import { useState } from 'react'
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import '../public/main.css'
import Rules from './components/Rules';


function App() {
  const [gameState, setGameState] = useState('mainMenu');

  return (
    <div className={`h-screen bg-purple overflow-hidden | flex flex-col ${gameState === "gamePVP" ? "justify-start" : "justify-center"} items-center`}>
      {gameState === "mainMenu" ? <MainMenu setGameState={setGameState}/> : <></>}
      {gameState === "gamePVP" ? <Game setGameState={setGameState}/> : <></>}
      {gameState === "rules" ? <Rules setGameState={setGameState}/> : <></>}
    </div>
  );
}

export default App
