"use client"
import React from 'react'
import { IoArrowBack} from 'react-icons/io5'

const Sidebar = () => {


//Button logic
const handleClick = () => {
  console.log('button clicked')
}


  return (
    <div className="w-[250px] bg-black-900 h-screen flex flex-col items-center content-center">
     <div className="text-black flex flex-col justify-center text-2xl font-bold items-center content-center mt-10">
      <h1 className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-400 via-purple-600 to-blue-800 bg-clip-text text-transparent">Groove Stream</h1>
     </div>
     <button className=" bg-[#21094E]  hover:scale-125 text-slate-200 font-bold p-1 mt-5 gap-1 rounded-xl flex flex-row items-center content-center">
      <IoArrowBack /> 
      <p className="pr-1">Button</p>
    </button>
    <hr class="h-[0.5px] w-full mt-5 bg-slate-600 "></hr>
    </div>
  )
}

export default Sidebar;
