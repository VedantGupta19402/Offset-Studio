import React from 'react'
import Top from './Top'

const Video = () => {
  return (
    <div className='bg-cover h-screen w-screen'>
      <video autoPlay loop muted src='\public\video.mp4'></video>
      <Top/>
    </div>
  )
}

export default Video
