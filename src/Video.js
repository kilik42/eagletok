// import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player'
import React, { useState, useEffect } from 'react';
import { createProxyMiddleware } from 'http-proxy-middleware';
function Video() {
  const [videos, setVideos] = useState([]);
  const proxy = createProxyMiddleware({
    target: 'https://flip.com',
    ws: true,
    changeOrigin: true,
  });
  return (
    <div className='video'>
            <h1>this is a video</h1>
        <video className = "video__player"src=""  autoPlay>
      {/* can we get the videos from flip grid and put them here?
      flip grid videos can be embedded in a web page or have the videos somehow be pulled into the web page */}
     <ReactPlayer url='https://flip.com/s/JVWRByqqbeoz' />

{/* https://flip.com/s/JVWRByqqbeoz */}
        </video>
        {/* video footer */}
        

        {/* video sidebar */}

    </div>
  )
}

export default Video