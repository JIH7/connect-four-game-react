import React from 'react'

function PauseMenu() {
  return (
    <div className='absolute w-screen h-screen top-0 left-0 | flex justify-center items-center'>
        <div className='absolute w-full h-full | bg-black opacity-40 | z-[9]'></div>
        <div className='relative z-[10] | flex flex-col items-center | h-2/3 w-1/3 | rounded-3xl | bg-purple | border-2 border-b-8 border-black border-solid'>
            <h1 className='text-white text-[3.5rem]'>PAUSE</h1>
        </div>
    </div>
  )
}

export default PauseMenu
