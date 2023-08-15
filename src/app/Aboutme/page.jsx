"use client"
import React from 'react'
import Image from 'next/image'
import './/Aboutme.scss';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube2 from '@/Components/Cube/Cube2';


const Aboutme = () => (
  <div className="Aboutme">
    <div className="Heading">
    <h1>My Development Stack</h1>
    </div>
    <div className="Intro">
      <div className="MyStack">
        <Cube2 />
      </div>
      <div className="Video">
        <video autoPlay muted loop style={{ width: '90%', height: 'auto' }}>
          <source src="/Video/My Name Is (1).mp4" type="video/mp4" />
        </video>
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