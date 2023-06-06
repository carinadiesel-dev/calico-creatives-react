import { FunctionComponent,useState, useEffect } from 'react';
import { CCLogo } from '../logos/CCLogo';
import React from 'react';
import Image from 'next/image'
import heroImg from './Assets/HeroImg.png'

export const Hero = () => {
    const [screenWidth, setScreenWidth] = useState<number>(
        window.innerWidth
      );

      useEffect(() => {
        const handleWindowResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });

      const logoSize:number[] = (screenWidth >= 640 ? [1024 , 600] : [414, 192]);
    
    return (
        <div className="relative bg-homeGradient bg-contain bg-center bg-no-repeat flex h-[1000px] w-screen xl:overflow-hidden">
            <div className='relative xl:w-[60%]'>
                <div className='xl:absolute xl:top-[345px] xl:left-[100px]'>
                 <CCLogo width={logoSize[0]} height={logoSize[1]}/>
                </div>
            </div>
            <div className='absolute xl:top-[-110px] xl:-right-20 xl:overflow-hidden'>
        <Image     
      src={heroImg}
      alt="Picture of the founder"
    />
            </div>
        </div>
    )
}