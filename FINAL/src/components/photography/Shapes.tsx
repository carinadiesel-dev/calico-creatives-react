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
const shapeWrapperClasses = `relative pt-36 lg:pt-44`;
const circleClasses = `absolute flex items-center md:justify-center lg:top-40 -translate-y-[110%] lg:translate-y-0`;
const cloudClasses = `hidden lg:block lg:absolute lg:-top-12`;
const cloudSize = 0.9;
const photoClasses = `lg:absolute lg:top-2 xl:-top-4 z-10 w-[90vw] lg:w-[30rem] xl:w-7/12 `
const textClasses = `flex items-center py-28 lg:py-12 xl:py-0`
    return (
    <div className="flex flex-col lg:justify-between xl:flex-row">
        <div className={`${shapeWrapperClasses} ${variants[variant].wrapper}`}>

        <img src={src} alt='/'
        height={717} className={`${photoClasses} ${variants[variant].photo} `}
        />
            <IconOvalFilled className="hidden lg:block"/>
            <div className={`${circleClasses} ${variants[variant].circle}`}>
                <IconCircleFilled className="hidden md:block"/>
                <span className="absolute text-5xl font-bold pt-28 md:pt-0 md:font-normal font-brilon text-calicoPink-400 md:text-calicoGray-400">{circleText}</span>
            </div>
            <div className={`${cloudClasses} ${variants[variant].cloud}`}>
                <IconCloud size={cloudSize}/>
            </div>
        </div>
        <div className={`${textClasses} ${variants[variant].mobileTextAligned}`}>
        <span className="text-2xl md:text-[2.5rem] text-center font-brilon text-calicoGray-400">Starting from R{priceText}</span>
        </div>
    </div>
    
    )
}