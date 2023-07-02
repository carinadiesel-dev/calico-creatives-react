import { FunctionComponent,useState, useEffect } from 'react';
import { CCLogo } from '../logos/CCLogo';
import React from 'react';
import heroImg from './Assets/HeroImg.png'
import heroLarge from './Assets/hero-large.png'

export default function Hero(){
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

<div className="relative flex flex-col items-center w-screen overflow-hidden bg-center bg-no-repeat bg-contain lg:flex-row bg-homeGradient">
<div className='hidden lg:visible lg:w-[60%] lg:flex lg:translate-x-14 lg:translate-y-24 2xl:translate-x-48 2xl:translate-y-36'>
    <CCLogo/>
</div>

<div className='relative flex flex-1'>
  <div className='lg:overflow-hidden'>
  <img     
src={heroLarge}
alt="Picture of the founder"
/>
  </div>

</div>

</div>
    )
}