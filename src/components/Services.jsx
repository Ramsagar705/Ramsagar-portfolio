import React from 'react'
import { motion } from 'framer-motion'
import { FaGlobe, FaShoppingCart, FaReact, FaLayerGroup, FaRobot } from 'react-icons/fa'

const services = [
  {
    title: 'Business Websites',
    description: 'Modern, responsive websites for businesses, startups and personal brands with a clean user experience.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    icon: FaGlobe,
  },
  {
    title: 'E-Commerce Applications',
    description: 'Full-stack e-commerce applications with product management, shopping cart, authentication, orders and online payments.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
    icon: FaShoppingCart,
  },
  {
    title: 'React Web Applications',
    description: 'Interactive and responsive web applications with reusable components, modern UI and smooth user experiences.',
    technologies: ['React.js', 'JavaScript', 'REST APIs'],
    icon: FaReact,
  },
  {
    title: 'Full-Stack MERN Applications',
    description: 'Complete web applications with authentication, REST APIs, database integration, admin functionality and deployment.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    icon: FaLayerGroup,
  },
  {
    title: 'AI-Powered Web Applications',
    description: 'AI-powered applications integrated with modern AI APIs to provide intelligent and useful user experiences.',
    technologies: ['React', 'Node.js', 'AI APIs', 'REST APIs'],
    icon: FaRobot,
  },
]

const Services = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id='services'
    className='py-20 bg-dark-100'
  >
    <div className='container mx-auto px-6'>
      <h2 className='text-3xl font-bold text-center mb-4'>What Can I <span className='text-purple'>Build?</span></h2>
      <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Building modern, scalable and user-friendly web applications using modern technologies.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {services.map(({ title, description, technologies, icon: Icon }) => (
          <article key={title} className='min-h-64 flex flex-col rounded-2xl bg-dark-300 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple/10'>
            <Icon aria-hidden='true' className='mb-5 h-9 w-9 text-purple' />
            <h3 className='text-xl font-semibold mb-3'>{title}</h3>
            <p className='mb-5 flex-1 text-gray-400'>{description}</p>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((technology) => (
                <span key={technology} className='rounded-full bg-dark-400 px-3 py-1 text-sm text-gray-300'>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default Services