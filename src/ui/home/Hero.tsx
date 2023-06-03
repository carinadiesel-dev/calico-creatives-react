import { FunctionComponent,useState, useEffect } from 'react';
import { CCLogo } from '../logos/CCLogo';
import React from 'react';
import Image from 'next/image'
import heroImg from './Assets/HeroImg.png'
import heroLarge from './Assets/hero-large.png'

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

      const logoSize:number[] = ( screenWidth >= 1024 && screenWidth < 1280 ? [768, 400] : screenWidth >= 1280 ? [1024 , 600] : [414, 192]);
    
    return (
    //     <div className="relative bg-homeGradient bg-contain bg-center bg-no-repeat flex h-[1000px] w-screen xl:overflow-hidden">
    //         <div className='relative xl:w-[60%]'>
    //             <div className='xl:absolute xl:top-[21rem] xl:left-[6,25rem]'>
    //              <CCLogo width={logoSize[0]} height={logoSize[1]}/>
    //             </div>
    //         </div>
    //         <div className='absolute xl:top-[-7rem] xl:-right-20 xl:overflow-hidden'>
    //     <Image     
    //   src={heroImg}
    //   alt="Picture of the founder"
    // />
    //         </div>
    //     </div>

<div className="flex flex-col overflow-hidden bg-center bg-no-repeat bg-contain relative lg:flex-row bg-homeGradient lg:h-[35rem] xl:h-[40rem] 2xl:h-[50rem] items-center w-screen">
<div className='hidden lg:visible lg:w-[60%] lg:flex lg:translate-x-14 lg:translate-y-24 2xl:translate-x-16 2xl:translate-y-36'>
    <CCLogo width={logoSize[0]} height={logoSize[1]}/>
</div>

<div className='flex flex-1 lg:absolute lg:-right-7 lg:overflow-hidden lg:w-[35rem] xl:w-[40rem] 2xl:w-[50rem]'>
<Image     
src={heroLarge}
alt="Picture of the founder"
/>
</div>

</div>
    )
}