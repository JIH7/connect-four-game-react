import React from 'react'

function Rules() {
  return (
    <div className='h-full w-full | flex flex-col justify-center items-center'>
        <div className='absolute top-0 left-0 | h-screen w-screen | bg-black opacity-40'></div>
        <div className='z-10 | border-2 border-black border-solid | bg-white | h-4/5 w-11/12 md:h-1/2 md:w-2/3 lg:h-2/3 lg:w-1/3 | rounded-3xl | flex flex-col justify-start items-start | px-8'>
            <h1 className='text-[3.5rem] text-black | self-center'>RULES</h1>
            <h2 className='text-purple text-[1.5rem]'>OBJECTIVE</h2>
            <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
        </div>
    </div>
  )
}

export default Rules
