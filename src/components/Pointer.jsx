import MarkerRed from '../assets/images/marker-red.svg'
import MarkerYellow from '../assets/images/marker-yellow.svg'

const Pointer = ({hoveredCol, currentPlayer}) => {
  return (
    <img className={`h-[25px] w-[25px] md:h-auto md:w-auto | absolute z-[11] -top-2 md:-top-4 mr-2 md:mr-0 | pointer-${hoveredCol} transition-all`} src={currentPlayer === 'x' ? MarkerRed : MarkerYellow} alt="pointer" />
  )
}

export default Pointer
