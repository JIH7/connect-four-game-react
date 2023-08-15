import TurnBackgroundRed from "../assets/images/turn-background-red.svg"
import TurnBackgroundYellow from "../assets/images/turn-background-yellow.svg"
import InGameButton from "./InGameButton"

const Timer = ({currentPlayer, winner, restartGame = () => console.log("No restartGame function set.")}) => {
  return (
    <div className={`${winner === '' ? 'h-[197px] w-[165px] -bottom-[10rem] md:-bottom-[8rem]' : 'h-[175px] w-[280px] -bottom-[4rem] md:-bottom-[4rem]'} z-[10] absolute left-0 right-0 m-auto `}>
        {winner === '' ?
        <div>
            <img className='origin-center' src={currentPlayer === 'x' ? TurnBackgroundRed : TurnBackgroundYellow} alt="timeMarker" />
        </div>
        :
        <div className="h-full w-full : bg-white rounded-3xl | border-2 border-b-8 border-black border-solid | flex flex-col justify-center items-center">
            <p>Player {winner === 'x' ? '1' : '2'}</p>
            <h2 className="text-[56px]">WINS!</h2>
            <InGameButton text={'PLAY AGAIN'} handleClick={restartGame}/>
        </div>
        }
    </div>
  )
}

export default Timer
