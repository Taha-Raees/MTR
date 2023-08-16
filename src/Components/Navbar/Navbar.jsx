"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './/Navbar.scss';
const Navbar = () => {
    const navigation = [
        {
            id:1,
            Title:'Home',
            img:'/images/5.svg',
            url:'/'
        },

        {
            id:2,
            Title:'About Me',
            img:'/images/4.svg',
            url:'/Aboutme'
        },
        {
            id:3,
            Title:'My Work',
            img:'/images/3.svg',
            url:'/Mywork'
        },
        {
            id:4,
            Title:'Contact',
            img:'/images/2.svg',
            url:'/Contact'
        },
    ];
    const admin = [
        {
            id:1,
            Title:'Dashboard',
            img:'/images/6.svg',
            url:'/Loading'
        },
        {
            id:2,
            Title:'Admin',
            img:'/images/7.svg',
            url:'/Register'
        }
    ]

  const commonAnimation = {
    initial:{ y: -250 },
    animate:{ y: 0 },
    transition:{delay:0, type:'spring', stiffness:80 },
  };
  return (
    <div className='NavBar'>
       <div className="cont">
       <div className="Nav">
                {navigation.map((nav) => {
                    return (
                    <div key={nav.id} className="nav-item">
                        <motion.div
                        {...commonAnimation}
                        >
                            <Link href={nav.url}> <Image className='img'  src={nav.img} alt="My SVG Image" width={30} height={30}/>{nav.Title}</Link>
                        </motion.div>
                    </div>
                )})}
            </div>
       <motion.div
         {...commonAnimation}
         className="Logo">
         <Image src="/images/1.svg" alt="My SVG Image" width={80} height={80} />
        </motion.div>
            <div className="Nav2">
                {admin.map((ad) => {
                    return (
                    <div key={ad.id} className="nav-item">
                        <motion.div 
                        {...commonAnimation}>
                             <Link href={ad.url}><Image className='img' src={ad.img} alt="My SVG Image" width={30} height={30} />{ad.Title}</Link>
                        </motion.div>
                    </div>
                )})}
            </div>
        </div>
    </div>
  )
}

export default Navbar