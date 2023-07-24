import { IconCircleFilled } from "@/components/icons/IconCircleFilled";
import { IconOvalFilled } from "@/components/icons/IconOvalFilled";
import { IconCloud } from "../icons/IconCloud";
import variants from '@/components/photography/shapeVariants'
import WeddingImg from './Assets/wedding.jpg'
import StudioImg from './Assets/studio.jpg'
import NewbornImg from './Assets/newborn.png'
import LifestyleImg from './Assets/lifestyle.jpg'
import EngagementsImg from './Assets/engagements.jpg'


type ShapesProps = {
priceText? : number
variant?: keyof typeof variants
src: typeof WeddingImg | typeof StudioImg | typeof NewbornImg | typeof LifestyleImg | typeof EngagementsImg 
circleText?: string
}

export const Shapes = ({priceText,variant = "leftAligned",src, circleText}: ShapesProps) => {
const shapeWrapperClasses = `relative pt-44`;
const circleClasses = `absolute flex items-center justify-center top-40 `;
const cloudClasses = `absolute -top-12`;
const cloudSize = 0.9;
const photoClasses = `absolute top-3 z-10`
const textClasses = `flex items-center py-8 lg:py-12 xl:py-0`
    return (
    <div className="flex flex-col justify-between xl:flex-row">
        <div className={`${shapeWrapperClasses} ${variants[variant].wrapper}`}>

        <img src={src} alt='/'
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
        <div className={`${textClasses} ${variants[variant].mobileTextAligned}`}>
        <span className="text-[2.5rem]  text-center font-brilon text-calicoGray-400">Starting from R{priceText}</span>
        </div>
    </div>
    
    )
}