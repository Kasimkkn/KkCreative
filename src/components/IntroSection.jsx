import React from 'react'
import Card from './Card/Card'
import pattern2 from '../assets/arrow-patter.svg'

const IntroSection = () => {
    return (
        <>
            <div className="bg-black text-white h-[70vh] max-md:h-[50vh] p-8">

                <img src={pattern2} alt="pattern" className="absolute right-10 w-96 h-96 bg-transparent max-md:hidden" />
                <div className="flex items-center pl-10 max-md:flex-col">
                    <h1 className="text-9xl font-bold max-lg:text-5xl max-md:text-3xl">
                        <span className="block">WHAT</span>
                        <span className="block">CAN</span>
                        <span className="block">WE</span>
                    </h1>
                    <h2 className="text-6xl font-bold text-primary -ml-40 max-lg:text-4xl max-md:text-2xl max-md:-ml-0">
                        <span className="block">DO FOR</span>
                        <span className="block">YOU?</span>
                    </h2>
                </div>
            </div>
            <div className='overflow-hidden flex gap-4 flex-wrap'>
                <Card
                    backgroundImage="https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2024%2F01%2Fimage-314.jpg&w=640&q=75"
                    title="LOGO & BRANDING"
                    description="We blend creativity and strategy to reflect your brand’s essence, ensuring a memorable and cohesive presence across all touchpoints."
                    number={"01"}
                />
                <Card
                    backgroundImage="https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2024%2F01%2Fimage-317.jpg&w=640&q=75"
                    title="WEB DESIGNING & DEVELOPMENT"
                    description="Crafting visually stunning and highly functional websites that captivate your audience and drive results."
                    number={"02"}
                />
                <Card
                    backgroundImage="https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2024%2F01%2Fimage-316.jpg&w=640&q=75"
                    title="SOCIAL MEDIA MARKETING"
                    description="Leveraging social media platforms to boost your brand's presence, engage with your audience, and grow your online community."
                    number={"03"}
                />
                <Card
                    backgroundImage="https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2024%2F01%2Fimage-317.jpg&w=640&q=75"
                    title="UI/UX DESIGNING"
                    description="We're here to join forces with you, uncovering your goals, target audience, and the perfect recipe for a design that stands out from the crowd."
                    number={"04"}
                />
                <Card
                    backgroundImage="https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2024%2F01%2Fimage-316.jpg&w=640&q=75"
                    title="PRODUCT DEVELOPMENT"
                    description="Whether you've got a design ready to go or need us to whip one up, we'll tackle the development part with unmatched expertise and precision."
                    number={"05"}
                />
                `<Card
                    backgroundImage="https://rise2.studio/_next/image?url=https%3A%2F%2Fcms.rise2.studio%2Fwp-content%2Fuploads%2F2024%2F01%2Fimage-314.jpg&w=640&q=75"
                    title="GRAPHIC DESIGN"
                    description="Creating visually compelling designs that communicate your brand's message effectively and leave a lasting impression."
                    number={"06"}
                />`
            </div>
        </>
    )
}

export default IntroSection