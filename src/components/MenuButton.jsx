import React from 'react'

function MenuButton({text, image, color, noImg = false }) {
  return (
    <button className={`w-11/12 h-1/5 | my-2 | flex justify-between items-center | rounded-2xl | border-2 border-black border-solid | ${color}`}>
        <p className={`select-none ${color === "bg-white" ? "text-black" : "text-white"} text-3xl font-bold | mx-4`}>{text}</p>
        <img className={`select-none mx-4 ${noImg ? "opacity-0" : ""}`} src={image} alt="button-image" />
    </button>
  )
}

export default MenuButton
