import { PageTitle } from "@/components/pageTitle/PageTitle"
import { Paragraph } from "@/components/paragraph/Paragraph"
import { CustomButton } from "@/components/buttons/Button";
import buttonVariants from "@/components/buttons/variants";
import { Footer } from "@/components/footer/Footer";
import video from "../../assets/video/CME-animated-logo.mp4"
import { IconPlay } from "@/components/icons/IconPlay";
import {Link, Route, Routes} from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import ReactPlayer from 'react-player'



export default function AnimatedGraphics(){
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    // Play button
    // On click,play video and hide play icon
    // When done,show icon again

    const handleToggle = () => {
        setIsPlaying((current) => !current);
        setIsVisible((current) => !current)
      };

    const showButtonClasses = isVisible ? 'block' : 'hidden';
    return (
        <div>
            <PageTitle title="Animated Graphics" backgroundGradient="bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300" titleColor="text-calicoPink-400" />
            <Paragraph text="Animate your logo or create a flashy giff for your company! To bring a uniqueness to your logo, we can add some motion. An animated logo allows the imagination to go out of control. Previous work:"/>
            <div className="relative grid px-5 place-items-center md:px-12 lg:px-16 xl:px-20 2xl:px-28">
                
                {/* <video className="w-[90vw] md:w-[75vw] xl:w-[60vw]" ref={videoRef} >
                    <source src={video} type="video/mp4"  />
                </video> */}
                <ReactPlayer url={video} playing={isPlaying}
            />
            
            <div className={`absolute ${showButtonClasses}`}>
                <button onClick={handleToggle}><IconPlay/></button>
                </div>
                
                    
            </div>
            <div className="py-28">
                <Link to="/contact"><CustomButton variant={'peach'} buttonText="Get a Quote"/></Link>
                </div>
            <Footer backgroundColor="bg-calicoPeach-300"/>
        </div>
    )
}