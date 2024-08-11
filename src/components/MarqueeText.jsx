import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarqueeText = ({ duration = 20, text = 'Hello World', direction = 'left', fontSize = 'text-base', textColor = 'text-black', bgColor = 'bg-white' }) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const animationProps = {
            xPercent: direction === 'left' ? -100 : 100,
            repeat: -1,
            duration: duration,
            ease: 'linear',
        };

        gsap.fromTo(
            marqueeRef.current,
            { xPercent: direction === 'left' ? 100 : -100 },
            {
                ...animationProps,
                delay: 2,
                onComplete: () => {
                    gsap.fromTo(
                        marqueeRef.current,
                        { xPercent: direction === 'left' ? 100 : -100 },
                        animationProps
                    );
                }
            }
        );
    }, [direction, duration]);

    return (
        <div className={`relative overflow-hidden whitespace-nowrap ${bgColor}`}>
            <div ref={marqueeRef} className={`${fontSize} ${textColor} uppercase inline-block`}>
                {`${text} `}
            </div>
        </div>
    );
};

export default MarqueeText;
