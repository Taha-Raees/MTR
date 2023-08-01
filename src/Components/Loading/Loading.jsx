import React from 'react'
import Image from 'next/image'
import './/Loading.scss';

const Loading = () => {
  return (
    <div className="Loading">
      <div className="img">
      <Image src="/images/LoadingLogo.svg" alt="My SVG Image" width={350} height={350} layout='responsive'/>
      </div>
    <div className="Welcome">
      <h1>HI!</h1>
      <h3>WELCOME TO MY PORTFOLIO</h3>
    </div>
    </div>
  )
}

export default Loading