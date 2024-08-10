import React, { useState } from 'react';
import { motion, AnimatePresence, transform } from 'framer-motion';
import doubleright from '../assets/double-right.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const bottomHeaderVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
            },
        },
    };

    const menuVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1 + index * 0.2,
                duration: 0.3,
            },
        }),
        exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.3,
            },
        }),
        exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
    };

    return (
        <>
            {/* pc or pad header */}
            <motion.header
                className='absolute top-2 w-full z-50 bg-transparent flex justify-between px-10 py-2 max-md:hidden'
                initial="hidden"
                animate="visible"
                variants={headerVariants}
            >
                <h2 className='font-oswald text-4xl text-white font-bold flex'>Kk<span className='font-extralight text-primary'>Creative</span></h2>
                <button className='bg-primary text-black text-xl flex items-center justify-center gap-1 font-sora font-extrabold rounded-3xl px-6 py-2'>
                    CONTACT <img src={doubleright} alt="double right arrow" className='w-6 pt-1' />
                </button>
            </motion.header>

            <div className='flex w-full justify-center absolute bottom-8 max-md:hidden'>
                <motion.div
                    className='max-md:hidden flex gap-12 bg-gray-dark px-10 py-3 rounded-full border-l-4 border-r-4 border-primary'
                    initial="hidden"
                    animate="visible"
                    variants={bottomHeaderVariants}
                >
                    {['ABOUT US', 'SERVICES', 'PROJECTS'].map((item, index) => (
                        <motion.button
                            key={item}
                            className='text-white text-xl font-sora font-extrabold hover:text-primary transition duration-300'
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={menuVariants}
                        >
                            {item}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
            <header className='absolute top-2 w-full z-50 bg-transparent flex justify-between px-4 py-2 md:hidden'>
                <h2 className='font-oswald text-3xl text-white font-bold flex'>Kk<span className='font-extralight text-primary'>Creative</span></h2>
                <button onClick={toggleMenu} className={`relative z-50 p-2`}>
                    <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </header>

            {/* Overlay and Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`hidden max-md:block fixed inset-0 z-40 bg-black bg-opacity-50 transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%', transition: { duration: 0.3 } }}
                    >
                        <div className="flex flex-col justify-center items-center h-full">
                            <nav className="flex flex-col items-center gap-8">
                                {['ABOUT US', 'SERVICES', 'PROJECTS'].map((item, index) => (
                                    <motion.button
                                        key={item}
                                        className='text-white text-2xl font-sora font-extrabold hover:text-primary transition duration-300'
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={mobileMenuVariants}
                                    >
                                        {item}
                                    </motion.button>
                                ))}
                            </nav>
                            <motion.button
                                className='absolute bottom-10 bg-primary text-black text-xl flex items-center justify-center gap-1 font-sora font-extrabold rounded-3xl px-6 py-2'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                CONTACT <img src={doubleright} alt="double right arrow" className='w-6 pt-1' />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
