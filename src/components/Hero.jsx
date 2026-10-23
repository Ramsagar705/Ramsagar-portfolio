import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'>
            <div className='container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                <div className='w-full md:w-1/2 mb-2 md:mb-0 text-center md:text-left'>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-purple'>Ramsagar Chandravanshi </span>
                    </h1>
                    <h2 className='text-xl sm:text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
                    <p className='text-lg text-gray-300 mb-8'>I create stunning web experiences using modern technologies and innovative design.</p>
                    <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                        <a href="#projects" aria-label="View projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                        <a href="#contact" aria-label="Contact me" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>Contact Me</a>
                        <a href='/Ramsagar-Fullstack-Resume.pdf' download='Ramsagar-Fullstack-Resume.pdf' className='inline-flex items-center gap-2 px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 hover:-translate-y-0.5 transition duration-300'>
                            <FaDownload aria-hidden='true' />
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-70'>
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                                className='relative rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                            src={assets.profileImg} alt="Profile" />
                    </div>

                            </div>
                </div>
            </div>
        </motion.div>


  )
}

export default Hero
