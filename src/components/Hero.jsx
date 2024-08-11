import React from 'react';
import { motion } from 'framer-motion';
import { splitText, wordVariants } from '../utils/splitextAnime.jsx';

const Hero = () => {
    return (
        <div className='w-full h-[70%] max-md:h-[85%] flex flex-col justify-center items-center mt-5 overflow-hidden max-md:overflow-visible'>
            <div className='flex w-full max-md:flex-wrap max-md:gap-1 max-md:justify-center'>
                <motion.div
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                    className='text-[12rem] max-lg:text-[10rem] max-md:text-[8rem] max-sm:text-[4rem] font-oswald font-extrabold text-white uppercase hero-text-shadow'
                >
                    {/* {splitText("Creative")} */}Creative
                </motion.div>
                <motion.div
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                    className='text-[12rem] max-lg:text-[10rem] max-md:text-[8rem] max-sm:text-[4rem] font-oswald font-extrabold text-primary uppercase hero-text-shadow'
                >
                    {splitText("Solution")}
                </motion.div>
            </div>
            <motion.div
                variants={wordVariants}
                initial="initial"
                animate="animate"
                className='text-[5rem] max-lg:text-[4rem] max-md:text-[3rem] max-sm:text-[2rem] mt-4 font-oswald text-center w-full font-bold text-white uppercase hero-text-shadow'
            >
                {splitText("Inspire Your Mind")}
            </motion.div>
        </div>
    );
}

export default Hero;
