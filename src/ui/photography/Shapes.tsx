import { IconCircleFilled } from "../icons/IconCircleFilled";
import { IconOvalFilled } from "../icons/IconOvalFilled";
import { IconCloud } from "../icons/IconCloud";
import variants from '@/ui/photography/shapeVariants'
import Image from 'next/image'
import weddingImg from './Assets/wedding.jpg'
import studioImg from './Assets/studio.jpg'
import newbornImg from './Assets/newborn.png'
import lifestyleImg from './Assets/lifestyle.jpg'
import engagementsImg from './Assets/engagements.jpg'


type ShapesProps = {
priceText? : number
variant?: keyof typeof variants
src: `${weddingImg}` | `${studioImg}` | `${newbornImg}` | `${lifestyleImg} | ${engagementsImg}` 
circleText?: string
}

export const Shapes = ({priceText,variant = "leftAligned",src, circleText}: ShapesProps) => {
const shapeWrapperClasses = `relative pt-44`;
const circleClasses = `absolute flex items-center justify-center top-40 `;
const cloudClasses = `absolute -top-12`;
const cloudSize = 0.9;
const photoClasses = `absolute top-3 z-10`
    return (
    <div className="flex justify-between">
        <div className={`${shapeWrapperClasses} ${variants[variant].wrapper}`}>

        <Image src={src} alt='/'
        height={717} className={`${photoClasses} ${variants[variant].photo} `}
        />
            <IconOvalFilled />
            <div className={`${circleClasses} ${variants[variant].circle}`}>
                <IconCircleFilled/>
                <span className="absolute text-5xl font-brilon text-calicoGray-400">{circleText}</span>
            </div>
            <div className={`${cloudClasses} ${variants[variant].cloud}`}>
                <IconCloud size={cloudSize}/>
            </div>
        </div>
        <div className="flex items-center">
        <span className="text-[40px] text-center font-brilon text-calicoGray-400">Starting from R{priceText}</span>
        </div>
    </div>
    
    )
}