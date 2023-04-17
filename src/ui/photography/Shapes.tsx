import { IconCircleFilled } from "../icons/IconCircleFilled";
import { IconOvalFilled } from "../icons/IconOvalFilled";
import { IconCloud } from "../icons/IconCloud";
import variants from '@/ui/photography/shapeVariants'


type ShapesProps = {
priceText? : number
 variant?: keyof typeof variants
}

export const Shapes = ({priceText,variant = "leftAligned"}: ShapesProps) => {
const shapeWrapperClasses = `relative pt-44`;
const circleClasses = `absolute top-40 `;
const cloudClasses = `absolute -top-12`;
const cloudSize = 0.9;
    return (
    <div className="flex justify-between">
        <div className={`${shapeWrapperClasses} ${variants[variant].wrapper}`}>
            <IconOvalFilled />
            <div className={`${circleClasses} ${variants[variant].circle}`}>
                <IconCircleFilled />
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