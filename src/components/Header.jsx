import React from 'react';
import doubleright from '../assets/double-right.svg';

const Header = () => {
    return (
        <>
            {/* pc or pad header */}
            <header className='absolute top-2 w-full z-50 bg-transparent flex justify-between px-10 py-2 max-md:hidden'>
                <h2 className='font-oswald text-4xl text-white font-bold flex'>Kk<span className='font-extralight text-primary'>Creative</span></h2>
                <button className='bg-primary text-black text-xl flex items-center justify-center gap-1 font-sora font-extrabold rounded-3xl px-6 py-2'>
                    CONTACT <img src={doubleright} alt="double right arrow" className='w-6 pt-1' />
                </button>
            </header>

            {/* Bottom Navigation Menu */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-12 bg-gray-dark px-10 py-3 rounded-full border-l-4 border-r-4 border-primary'>
                <button className='text-white text-xl font-sora font-extrabold hover:text-primary transition duration-300'>
                    ABOUT US
                </button>
                <button className='text-white text-xl font-sora font-extrabold hover:text-primary transition duration-300'>
                    SERVICES
                </button>
                <button className='text-white text-xl font-sora font-extrabold hover:text-primary transition duration-300'>
                    PROJECTS
                </button>
            </div>
        </>
    );
}

export default Header;
