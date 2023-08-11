import React from 'react'
import LargeRedCounter from '../assets/images/counter-red-large.svg'
import LargeYellowCounter from '../assets/images/counter-yellow-large.svg'

function BoardSlot({character, y, x}) {
  return (
    <div className='h-full w-full z-[9]'>
        {character && (
            <img src={character === "x" ? LargeRedCounter : LargeYellowCounter} />
        )}
    </div>
  )
}

export default BoardSlot
