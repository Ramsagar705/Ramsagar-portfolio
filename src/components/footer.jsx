import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-8 bg-dark-300'>
      <div className='container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 px-6 text-center'>
        <p className='text-gray-400'>@ 2025 Created By The Ramsagar. All right reserverd.</p>
        <a href='/resume.pdf' download='Ramsagar-Chandravanshi-Resume.pdf' className='inline-flex items-center gap-2 text-white hover:text-purple transition duration-300'>
          <FaDownload aria-hidden='true' />
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Footer
