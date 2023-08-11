import CheckMark from '../assets/images/icon-check.svg'

function Rules() {
  return (
    <div className='relative h-full w-full | flex flex-col justify-center items-center'>
        <div className='absolute top-0 left-0 | h-screen w-screen | bg-black opacity-40'></div>
        <div className='relative z-10 | border-2 border-b-[10px] border-black border-solid | bg-white | h-4/5 w-11/12 md:h-1/2 md:w-2/3 lg:h-2/3 lg:w-1/3 | rounded-3xl | flex flex-col justify-start items-start | px-8'>
            <h1 className='text-[3.5rem] text-black | self-center'>RULES</h1>
            <h2 className='text-purple text-[1.5rem]'>OBJECTIVE</h2>
            <p className='text-[1.25rem] leading-[1.625rem]'>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
            <h2 className='text-purple text-[1.5rem] | mt-6'>HOW TO PLAY</h2>
            <ol>
                <li className='text-[1.25rem] leading-[1.625rem] flex flex-start'>1<span className='ml-4'>Red goes first in the first game.</span></li>
                <li className='text-[1.25rem] leading-[1.625rem] flex flex-start'>2<span className='ml-4'>Players must alternate turns, and only one disc can be dropped on each turn.</span></li>
                <li className='text-[1.25rem] leading-[1.625rem] flex flex-start'>3<span className='ml-4'>The game ends when there is a 4-in-a-row or a stalemate.</span></li>
                <li className='text-[1.25rem] leading-[1.625rem] flex flex-start'>4<span className='ml-4'>The starter of the previous game goes second on the next game.</span></li>
            </ol>
            <button className='relative justify-self-end -bottom-2 self-center'><img src={CheckMark} alt="check-button" /></button>
        </div>
    </div>
  )
}

export default Rules
