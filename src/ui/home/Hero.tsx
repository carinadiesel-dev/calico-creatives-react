import { FunctionComponent,useState, useEffect } from 'react';
import { CCLogo } from '../logos/CCLogo';
import React from 'react';
import HeroImg from './Assets/HeroImg.png'

const heroImg = HeroImg;


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
        <div className="flex h-[1000px] overflow-hidden" style={{background: 'linear-gradient(135deg, #F5A892 0%, #FFFFFF 100%) 0% 0%'}}>
            <div className='relative xl:bg-cloud xl:bg-cover xl:w-2/3'>
                <div className='xl:absolute xl:top-[345px] xl:left-[190px]'>
                 <CCLogo width={logoSize[0]} height={logoSize[1]}/>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}