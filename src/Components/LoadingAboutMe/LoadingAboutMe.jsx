import React from 'react'
import Image from 'next/image'
import './/LoadingAboutMe.scss';

const LoadingAboutMe= () => {
  return (
    <div className="Loading">
      <div className="img">
      <Image src="/images/LoadingLogo.svg" alt="My SVG Image" width={350} height={350} layout='responsive'/>
      </div>
    <div className="Welcome">
      <h1>Muhammad Taha Raees</h1>
    </div>
    </div>
  )
}

export default LoadingAboutMe