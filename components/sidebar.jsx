"use client"
import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { HiOutlineHome } from 'react-icons/hi'

const Sidebar = () => {


//Button logic
const handleClick = () => {
  
  console.log('button clicked')
}


  return (
    <div className="w-[250px] bg-black h-screen flex flex-col items-center content-center text-white">
     <div className="text-black flex flex-col justify-center text-2xl font-bold items-center content-center mt-10">
      <h1 className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-400 via-purple-600 to-blue-800 bg-clip-text text-transparent">Groove Stream</h1>
     </div>
     <button className=" bg-[#21094E]  hover:scale-125 text-slate-200 font-bold p-1 mt-5 gap-1 rounded-xl flex flex-row items-center content-center">
      <IoArrowBack /> 
      <p className="pr-1">Button</p>
    </button>
    <hr class="h-[0.5px] w-full mt-5 bg-slate-600"></hr>
    <div className = "fill-blue-800 mt-1 text-align-left flex flex-start items-center justify-start content-left gap-2 w-full pl-10 hover:bg-slate-800 h-[40px]">
      <HiOutlineHome color="white" />
      <p className ="pl-10">Home</p>
    </div>
    </div>
   
  )
}

export default Sidebar;
