import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    // { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-4 sm:px-8 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <a href="#home" className='text-xl sm:text-2xl lg:text-3xl font-bold text-white'>
                        Ramsagar
                        <span className='text-violet-500'> Chandravanshi</span>
                        <div className='w-4 h-4 bg-violet-500 rounded-full'></div>
                    </a>
                </div>

                <div className='hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm'>
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className='relative inline-block text-white/80 transition duration-300 hover:text-violet-500 group'>
                            <span>{item.label}</span>
                            <span className='absolute left-0 -bottom-2 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                    ))}
                </div>

                <button
                    className='lg:hidden text-white'
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label='Toggle menu'
                    aria-expanded={isMenuOpen}
                    aria-controls='mobile-navigation'
                >
                    {isMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {isMenuOpen && (
                <div id='mobile-navigation' className='mt-4 flex max-h-[70vh] flex-col space-y-3 overflow-y-auto lg:hidden'>
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className='text-white/80 hover:text-violet-500' onClick={() => setIsMenuOpen(false)}>
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
