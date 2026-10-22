import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id='education'
    className='py-20 bg-dark-200'
  >
    <div className='container mx-auto px-6'>
      <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-purple'>Education</span></h2>
      <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>Academic background</p>

      <div className='relative max-w-3xl mx-auto pl-8 sm:pl-12 before:content-[""] before:absolute before:left-2 sm:before:left-3 before:top-0 before:h-full before:w-[2px] before:bg-purple'>
        <span className='absolute -left-1 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-purple text-white sm:left-0'>
          <FaGraduationCap aria-hidden='true' />
        </span>
        <article className='rounded-2xl bg-dark-300 p-6 sm:p-8 transition duration-300 hover:-translate-y-1'>
          <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
            <div>
              <h3 className='text-xl font-semibold'>B.Tech – Computer Science Engineering</h3>
              <p className='mt-2 text-gray-300'>Rungta College of Engineering &amp; Technology</p>
            </div>
            <span className='w-fit rounded-full bg-purple/20 px-3 py-1 text-sm text-purple'>2022 – 2026</span>
          </div>
          <div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-400'>
            <span className='inline-flex items-center gap-2'><FaMapMarkerAlt aria-hidden='true' className='text-purple' />Bhilai, Chhattisgarh</span>
            <span>CGPA: <strong className='font-semibold text-white'>7.2 / 10</strong></span>
          </div>
        </article>
      </div>
    </div>
  </motion.section>
)

export default Education