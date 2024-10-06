"use client"
import React from 'react'
import { useRouter } from "next/navigation";
const About = () => {
    const route = useRouter()
  return (
    <>
    <div>
        <h1 className='p-5 text-purple-600 text-center  text-4xl' >This is a About Section</h1>

    </div>
    <div className="flex flex-row space-x-4 justify-center">
    <button
      className="p-4 bg-purple-700 text-white w-48 m-4 rounded-lg hover:bg-purple-400 transition duration-300"
      onClick={() => route.push('/')}
    >
      Go to Home
    </button>
    </div>
    </>
  )
}

export default About