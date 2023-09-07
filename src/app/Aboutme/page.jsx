"use client"
import React from 'react'
import Image from 'next/image'
import './/Aboutme.scss';
import Cube2 from '@/Components/Cube/Cube2';


const Aboutme = () => (
  <div className="Aboutme">
    <div className="Intro">
    <div className="blur">
      <Image src="/images/Blur.svg" alt="My SVG Image" width={150} height={150} layout='responsive' />
      </div>
      <div className="left">
      <h1 className="animate-text">
  <span>W</span>
  <span>e</span>
  <span>l</span>
  <span>c</span>
  <span>o</span>
  <span>m</span>
  <span>e</span>
  <span className='space'> </span>
  <span>t</span>
  <span>o</span>
  <span> </span>
  <span>M</span>
  <span>y</span>
  <span className='space'> </span>
  <span>D</span>
  <span>e</span>
  <span>s</span>
  <span>i</span>
  <span>g</span>
  <span>n</span>
  <span className='space'> </span>
  <div className="div"><span>P</span>
  <span>o</span>
  <span>r</span>
  <span>t</span>
  <span>f</span>
  <span>o</span>
  <span>l</span>
  <span>i</span>
  <span>o</span></div>
</h1>

        <div className="name"><h2>Muhammad Taha Raees</h2></div>
      </div>
      <div className="right">
      <Image src="/images/MTRImages.svg" alt="My SVG Image" width={150} height={150} layout='responsive' />
      </div>
      {/* <div className="blur2">
      <Image src="/images/Blur.svg" alt="My SVG Image" width={150} height={150} layout='responsive' />
      </div> */}
    </div>
    <div className="stack">
    <div className="Heading">
    <h1>My Development Stack</h1>
    </div>
    <div className="Cube">
      <div className="MyStack">
        <Cube2 />
      </div>
      <div className="Video">
        <video autoPlay muted loop style={{ width: '90%', height: 'auto' }}>
          <source src="/Video/My Name Is (1).mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    </div>
    <div className="WebDesign">
      <div className="left">
        <div className="text">
          <h1>WEB DESIGN</h1>
          <p>Design of personal and professional web pages for clients in the arts, photography, design, and entertainment industries</p>
        </div>
        <Image src="/images/Smiley.svg" alt="My SVG Image" width={250} height={250} />
      </div>
      <div className="middle">
        <div className="img1"><Image src="/images/AboutMe2.svg" alt="My SVG Image" width={150} height={150} layout='responsive' /></div>
        <div className="img2"><Image src="/images/AboutMe3.svg" alt="My SVG Image" width={150} height={150} layout='responsive' /></div>
      </div>
      <div className="right">
        <div className="img3"><Image src="/images/AboutMe4.svg" alt="My SVG Image" width={150} height={150} layout='responsive' /></div>
        <div className="img4"><Image src="/images/AboutMe1.svg" alt="My SVG Image" width={150} height={150} layout='responsive' /></div>
      </div>
    </div>
  </div>
)

export default Aboutme