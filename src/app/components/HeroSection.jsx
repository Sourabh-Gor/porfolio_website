"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';


const HeroSection = () => {
  return (
        <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
                    <TypeAnimation
                        sequence={[
                            'Sourabh J Gor',
                            1000,
                            'A Developer',
                            1000,
                            'Tech-savy',
                            1000,
                            'A Team Worker',
                            1000,
                            'Innovative',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
                    Passionate B.Tech student majoring in Computer Science Engineering at Dayananda Sagar University. Dedicated to exploring innovative solutions and pushing the boundaries of technology.
                </p>
                <div>
                <Link href="#contact">
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br to-blue-500 via-purple-500 from-pink-500 hover:bg-slate-200 text-white'>Hire Me</button></Link>
                <Link href="Sourabh Gor Resume.pdf"><button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br to-blue-500 via-purple-500 from-pink-500 hover:bg-slate-800 text-white mt-4'>
                    <span className='block bg-[#121212] rounded-full hover:bg-slate-800 px-5 py-2'>Download CV</span>
                    </button></Link>
                </div>
                </motion.div>
            
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
