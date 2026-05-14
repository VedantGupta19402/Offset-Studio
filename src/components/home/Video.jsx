import React from 'react'
import Top from './Top'

const Video = () => {
  return (
    <div className='bg-cover h-screen w-screen relative'>
      <video autoPlay loop muted src='\public\video.mp4'></video>
      <Top/>
      <div>
        <h1 className='w-screen h-20 text-9xl flex flex-between  justify-center absolute top-[30%]  uppercase text-[#F5F3EE] font-bold '>
        ideas that <br /> move brands
          <br />forward
        </h1>
      
      </div>
    </div>
  )
}

export default Video
