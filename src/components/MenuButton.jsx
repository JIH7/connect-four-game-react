import React from 'react'

function MenuButton({text, image, color, handleClick, stateTrigger, noImg = false }) {
  return (
    <button className={`group relative | w-11/12 h-1/4 | my-2 | flex justify-between items-center | rounded-2xl | border-[3px] border-black hover:border-dark-purple border-solid  | ${color}`} onClick={() => handleClick(stateTrigger)}>
        <p className={`select-none ${color === "bg-white" ? "text-black" : "text-white"} text-xl sm:text-3xl font-bold | mx-4`}>{text}</p>
        <img className={`select-none mx-4 ${noImg ? "opacity-0" : ""}`} src={image} alt="button-image" />
        <div className='absolute h-full w-full | rounded-2xl | top-[.75rem] | -z-[1] | border-black bg-black group-hover:border-dark-purple group-hover:bg-dark-purple border-[3px] border-solid'></div>
    </button>
  )
}

export default MenuButton
