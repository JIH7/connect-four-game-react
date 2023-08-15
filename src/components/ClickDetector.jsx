import React from 'react'

const ClickDetector = ({colNum, setHoveredCol, addToken = () => console.log("No function assigned 'addToken'")}) => {
  return (
    <div className='h-full w-[14.28%] z-[12]'
    onMouseOver={() => setHoveredCol(colNum)}
    onClick={() => {
        addToken(colNum);
    }}
    ></div>
  )
}

export default ClickDetector
