import React from 'react'

function InGameButton({text, handleClick = () => console.log("No function assigned")}) {
  return (
    <button onClick={handleClick} className='text-white bg-dark-purple hover:bg-red | rounded-2xl | text-[.8rem] | h-[2.5em] px-[1.2em]'>{text}</button>
  )
}

export default InGameButton
