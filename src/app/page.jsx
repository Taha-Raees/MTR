"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import ".//Home.scss";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/Components/Loading/Loading";
import React from "react";

export default function Home() {
  const animationOpacity = {
    visible: {
      opacity: 1,
      transition: { duration: 0.7 , delay:0.5,},
    },
    hidden: {
      opacity: 0,

    },
  };
  const animationXLeft = {
    visible: {
      x: 0,
      transition: { duration: 0.5, delay:0, type: "spring" , stiffness:80, damping:10, },

    },
    hidden: {
      x: "-55vh",

    },
  };
  const animationXRight = {
    visible: {
      x: 0,
      transition: { duration: 0.5, delay:0, type: "spring" , stiffness:80, damping:10, },

    },
    hidden: {
      x: "65vh",

    },
  };
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <div className="home">
            {isLoading ? (
        <Loading />
      ) : (

      <><div className="Hero">
            <motion.div className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}>
              <Image src="/images/Hero-Logo.svg" alt="My SVG Image" width={100} height={100} layout="responsive" />
            </motion.div>
            <div className="right">
              <div className="canvas">
                <Canvas>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[-1, -2, 3]} />
                  <Sphere args={[1, 100, 200]} scale={2.7}>
                    <MeshDistortMaterial color="#d3d2d1" attach="material" distort={0.55} speed={1.2} />
                  </Sphere>
                </Canvas>
              </div>
            </div>
            <div className="left">
              <div className="intro">
                <motion.div initial={"hidden"}
                  animate={"visible"}
                  variants={animationOpacity} className="name">
                  <h1>MUHAMMAD</h1>
                  <h1>TAHA</h1>
                  <h1>RAEES</h1>
                  <h2>FRONT END DEVELOPER</h2>
                  <p>Are you in need of a talented and reliable front-end developer? Look no further! I am a skilled front-end developer with a passion for creating stunning and user-friendly websites. With expertise in HTML, CSS, and JavaScript.My proficiency in React allows me to efficiently build reusable and modular components, ensuring efficient code maintenance and scalability. I am well-versed in leveraging React libraries and frameworks to optimize performance and enhance user experience. </p>
                </motion.div>
                <InView triggerOnce={false}>
                  {({ inView, ref }) => (
                    <motion.div ref={ref}
                      initial={inView ? "visible" : "hidden"}
                      animate={inView ? "visible" : "hidden"}
                      variants={animationXRight} className="button">
                      <Link href="/Mywork"><span>Check My Work</span></Link>
                    </motion.div>)}</InView>
              </div>
            </div>
          </div><InView triggerOnce={false}>
              {({ inView, ref }) => (
                <div className="mycanvas">
                  <motion.div ref={ref}
                    initial={inView ? "visible" : "hidden"}
                    animate={inView ? "visible" : "hidden"}
                    variants={animationXLeft} className="left">
                    <h1>MY CANVAS</h1>
                    <hr />
                    <h2> I specialize in turning design mockups into pixel-perfect web pages.</h2>
                    <p> My proficiency in front-end frameworks like React and Next.js allows me to build dynamic and interactive interfaces that captivate users. I continuously strive to deliver exceptional user interfaces and seamless user experiences.</p>
                  </motion.div>
                  <div className="right">
                    <motion.div className="img"
                      ref={ref}
                      initial={inView ? "visible" : "hidden"}
                      animate={inView ? "visible" : "hidden"}
                      variants={animationOpacity}>
                      <Image src="/images/img1.png" alt="My SVG Image" width={100} height={100} layout="responsive" />
                    </motion.div>
                  </div>
                </div>
              )}
            </InView><InView triggerOnce={false}>
              {({ inView, ref }) => (
                <div className="mydesign">
                  <div className="left">
                    <motion.div className="img"
                      ref={ref}
                      initial={inView ? "visible" : "hidden"}
                      animate={inView ? "visible" : "hidden"}
                      variants={animationOpacity}>
                      <Image src="/images/img2.svg" alt="My SVG Image" width={100} height={100} layout="responsive" />
                    </motion.div>
                  </div>
                  <motion.div className="right" ref={ref}
                    initial={inView ? "visible" : "hidden"}
                    animate={inView ? "visible" : "hidden"}
                    variants={animationXRight}>
                    <h1>MY DESIGN</h1>
                    <hr />
                    <h2>  I excel at translating design concepts into responsive and interactive web applications.</h2>
                    <p>  I love collaborating on the development of interactive and dynamic web applications using React/Next.js. Whether it"s building a single-page application, a dashboard, or a data visualization tool, I enjoy creating seamless user experiences and incorporating modern UI/UX design principles.</p>
                  </motion.div>
                </div>
              )}
            </InView><div className="contactme">
              <div className="right">
                <h1>CONTACT ME</h1>
                <hr />
                <h2> Contact me today to discuss your project requirements and let"s get started!</h2>
                <p> I offer flexibility and adaptability, ensuring quick turnarounds and open communication throughout the project. Whether you need assistance with website development, bug fixing, or performance optimization, I am here to deliver high-quality solutions tailored to your specific needs. Let"s collaborate to bring your vision to life and create an exceptional online presence.</p>
                <div className="button">
                  <Link href="/Contact"><span>Contact Me</span></Link>
                </div>
              </div>
            </div></>)}
   </div>
  )
}
