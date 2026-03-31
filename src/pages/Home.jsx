import React from 'react'
import Video from '../components/home/video'
import Homebottomtext from '../components/home/homebottomtext'
import Hometoptext from '../components/home/hometoptext'
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
