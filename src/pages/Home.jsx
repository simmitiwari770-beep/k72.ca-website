import React from 'react'
import Video from '../components/home/Video'
import Homebottomtext from '../components/home/Homebottomtext'
import Hometoptext from '../components/home/Hometoptext'
const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
       <div className='h-screen w-screen relative  flex flex-col justify-between  '>
        <Hometoptext/>
        <Homebottomtext/>
        
      </div> 
    </div>
  )
}

export default Home 
