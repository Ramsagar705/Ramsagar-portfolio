import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'

const certificates = []

const Achievements = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id='achievements'
    className='py-20 bg-dark-100'
  >
    <div className='container mx-auto px-6'>
      <h2 className='text-3xl font-bold text-center mb-4'>Certifications <span className='text-purple'>&amp; Achievements</span></h2>
      <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>Verified certifications and achievements</p>

      {certificates.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {certificates.map((certificate) => (
            <article key={certificate.title} className='flex flex-col rounded-2xl bg-dark-300 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple/10'>
              <FaCertificate aria-hidden='true' className='mb-5 h-8 w-8 text-purple' />
              <h3 className='text-xl font-semibold'>{certificate.title}</h3>
              <p className='mt-2 text-gray-300'>{certificate.organization}</p>
              {certificate.date && <p className='mt-1 text-sm text-purple'>{certificate.date}</p>}
              <p className='mt-4 flex-1 text-gray-400'>{certificate.description}</p>
              {certificate.link && (
                <a href={certificate.link} target='_blank' rel='noopener noreferrer' className='mt-5 w-fit rounded-lg border border-purple px-4 py-2 font-medium text-white transition hover:bg-purple/20'>
                  View Certificate
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-400'>No certificates have been added yet.</p>
      )}
    </div>
  </motion.section>
)

export default Achievements