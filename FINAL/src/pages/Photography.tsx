import { PageTitle } from "@/components/pageTitle/PageTitle"
import { Shapes } from "@/components/photography/Shapes"
import shapeVariants from "@/components/photography/shapeVariants"
import {CustomButton} from "@/components/buttons/Button"
import buttonVariants from "@/components/buttons/variants"
import { Footer } from "@/components/footer/Footer"

import EngagementImg from "../assets/photography/lifestyle.jpg"
import LifestyleImg from "../assets/photography/lifestyle.jpg"
import NewbornImg from "../assets/photography/newborn.png"
import StudioImg from "../assets/photography/studio.jpg"
import WeddingImg from "../assets/photography/wedding.jpg"


// type PhotographyProps = {
//     priceText? : number
//     shapeVariant?: keyof typeof shapeVariants
//     variant: keyof typeof buttonVariants
//     src: typeof WeddingImg | typeof StudioImg | typeof NewbornImg | typeof LifestyleImg | typeof EngagementImg 
//     circleText?: string

// }

export default function Photography() {
    return (
        <div>
            <PageTitle title="Photography" backgroundGradient="bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400" titleColor="text-calicoPeach-400" />
            <div className="px-5 md:px-12 xl:px-20">
            <div className="grid py-28 md:gap-28 lg:gap-36">
                <Shapes variant="leftAligned" circleText="Wedding" priceText={7000} src={WeddingImg}/>
                <Shapes variant="rightAligned" circleText="Engagements" priceText={750} src={EngagementImg}/>
                <Shapes variant="leftAligned" circleText="Newborn" priceText={1200} src={NewbornImg}/>
                <Shapes variant="rightAligned" circleText="Lifestyle" priceText={750} src={LifestyleImg}/>
                <Shapes variant="leftAligned" circleText="Studio" priceText={1000} src={StudioImg}/>
            </div>
            <div className="grid gap-8 py-48 place-items-center">
            <CustomButton variant="pinkFocus" buttonText="View Gallery" />
            <CustomButton variant="pink"  buttonText="Get a Quote"/>
            </div>
            
            </div>
            <Footer backgroundColor="bg-calicoPink-400"/>
        </div>
    )
}