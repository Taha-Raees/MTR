"use client"
import React from 'react'
import './/Footer.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
      <div className="Logo">
        <Image src="/images/Footer-Logo.svg" alt="My SVG Image" width={180} height={180}  />
        </div>
        <div className="middle">
                        <motion.div className='sign'
                        initial={{opacity:0 }}
                        animate={{ opacity:1}}
                        transition={{delay:0.5, duration:0.9}}
                        >
                        <Image src='/images/sign.svg' alt="My SVG Image"  width={100} height={100} layout="responsive" />
                        </motion.div>
          <div className="text">
          <p>© 2023 MTR. All rights reserved.</p>
          <hr />
          <h3>Version 0.10</h3>
          <h2>Website Designed using Next.js</h2>
          </div>
        </div>
        <div className='img'>
          <Image src='/images/Footer-Icon.svg' alt="My SVG Image"  width={100} height={100} layout="responsive" />
        </div>
      </div>
    </div>
  )
}

export default Footer