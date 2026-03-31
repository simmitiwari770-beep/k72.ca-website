import React from 'react'
import { Link } from 'react-router-dom'



const Homebottomtext = () => {
  return (
    
     <div className='font-[font2]  flex item-center justify-center gap-2   ' >
      <div className='border-3 h-44  top-[-20px] hover:border-[#D3FD50] hover:text-[#D3FD50] flex item-center px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw]  mt-6 ' to='/projects'>Projects</Link>
      </div>
      <div className='border-3 h-44  top-[-20px] hover:border-[#D3FD50] hover:text-[#D3FD50] flex item-center px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] mt-6 ' to='/agence'>Agence</Link>
      </div>
    </div>
  )

}

export default Homebottomtext
