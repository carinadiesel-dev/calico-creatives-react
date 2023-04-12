import { FunctionComponent,useState, useEffect } from 'react';
import { CCLogo } from '../logos/CCLogo';

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

      const logoSize:number[] = (screenWidth >= 640 ? [1024 , 600] : [212, 96]);
    
    return (
        <div className="flex h-[1000px] overflow-hidden" style={{background: 'linear-gradient(135deg, #F5A892 0%, #FFFFFF 100%) 0% 0%'}}>
            <div className='bg-cloud'>
            <CCLogo width={logoSize[0]} height={logoSize[1]}/>
            </div>
            <div>

            </div>
        </div>
    )
}