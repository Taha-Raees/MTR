"use client"
import React from 'react'
import './/Mywork.scss';
import Image from "next/image"
import { motion } from "framer-motion";

const Mywork = () => {
  return (
    <div className="Mywork">
      <motion.div className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}>
              <Image src="/images/Hero-Logo.svg" alt="My SVG Image" width={100} height={100} layout="responsive" />
            </motion.div>
      <div className="Text">
       <h1>I am currently working on this website.</h1>
       
       <h2>Please Check My work on <a href="https://taha-raees.github.io/Portfolio/#work"> https://taha-raees.github.io/Portfolio/</a></h2>
      </div>
    </div>
  )
}

export default Mywork