import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Card from '../components/Card/Card.jsx';
import Header from '../components/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { splitText, wordVariants } from '../utils/splitextAnime.jsx';
import pattern2 from '../assets/arrow-patter.svg'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { cardData } from '../data/CardData.js';
import { dummyImages } from '../data/dummyImages.js';
gsap.registerPlugin(ScrollTrigger);

const imageSections = [
    dummyImages,
    dummyImages,
    dummyImages,
    dummyImages,
];


const Home = () => {
    const containerRef = useRef(null)
    useEffect(() => {
        document.scrollingElement.scrollTo(0, 0);
        handleScroll();
        return () => { };
    }, []);

    const handleScroll = () => {
        ScrollTrigger.defaults({
            scroller: '.scroller',
        });

        gsap.utils.toArray('section').forEach((section, index) => {
            const wrapper = section.querySelector('.wrapper');
            const [xStart, xEnd] =
                index % 2
                    ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
                    : [wrapper.scrollWidth * -1, 0];
            gsap.fromTo(
                wrapper,
                { x: xStart },
                {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 1,
                    },
                }
            );
        });
    };
    return (
        <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.5 }} watch={[]} containerRef={containerRef}>
            <main className='p-2 max-w-[100vw]' data-scroll-container ref={containerRef}>
                <Header />
                <div className='w-full flex flex-col justify-center items-center mt-5 overflow-hidden max-md:h-[73vh]'>
                    <div className='flex w-full max-md:flex-wrap max-md:gap-1 max-md:justify-center max-md:mt-12'>
                        <motion.div
                            variants={wordVariants}
                            initial="initial"
                            animate="animate"
                            className='text-[12rem] max-lg:text-[10rem] max-md:text-[8rem] max-sm:text-[3rem] font-oswald font-extrabold text-white uppercase hero-text-shadow'
                        >
                            {splitText("Creative")}
                        </motion.div>
                        <motion.div
                            variants={wordVariants}
                            initial="initial"
                            animate="animate"
                            className='text-[12rem] max-lg:text-[10rem] max-md:text-[8rem] max-sm:text-[3rem] font-oswald font-extrabold text-primary uppercase hero-text-shadow'
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
                        Inspire Your {splitText("Mind")}
                    </motion.div>
                </div>
                <div className="bg-black text-white p-8 mt-12 max-md:mt-4">
                    <img src={pattern2} alt="pattern" className="absolute right-10 w-96 h-96 bg-transparent max-md:hidden" />
                    <div className="flex items-center pl-10 max-md:flex-col max-md:pl-0">
                        <h1 className="text-9xl font-bold max-lg:text-5xl max-md:text-3xl max-md:flex max-md:gap-2">
                            <span className="block">WHAT</span>
                            <span className="block">CAN</span>
                            <span className="block">WE</span>
                        </h1>
                        <h2 className="text-6xl font-bold text-primary -ml-40 max-lg:text-4xl max-md:text-2xl max-md:-ml-0 max-md:flex max-md:gap-2">
                            <span className="block">DO FOR</span>
                            <span className="block">YOU?</span>
                        </h2>
                    </div>
                </div>
                <div className='overflow-hidden flex gap-4 flex-wrap p-2 max-md:p-4'>
                    {cardData.map((cardData, index) => (
                        <React.Fragment key={index}>
                            <Card
                                backgroundImage={cardData.backgroundImage}
                                title={cardData.title}
                                description={cardData.description}
                                number={cardData.number}
                            />
                        </React.Fragment>
                    ))}
                </div>
                <div className="scroller h-screen overflow-auto overflow-x-hidden max-md:hidden">
                    {imageSections.map((images, sectionIndex) => (
                        <section key={`section-${sectionIndex}`}>
                            <div className="wrapper flex text-[16vh] font-medium">
                                {images.map((image, imageIndex) => (
                                    <img
                                        key={`image-${imageIndex}`}
                                        className="h-60 max-md:h-32 rounded-xl m-2 transition-all hover:scale-95"
                                        src={image}
                                        alt={`Dummy ${imageIndex}`}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
                <div className='h-[60vh]'>

                </div>
            </main>
        </LocomotiveScrollProvider>
    )
}

export default Home