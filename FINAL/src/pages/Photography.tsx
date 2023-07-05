import { PageTitle } from "@/components/pageTitle/PageTitle"
import { Shapes } from "@/components/photography/Shapes"
import shapeVariants from "@/components/photography/shapeVariants"
import {Button} from "@/components/buttons/Button"
import buttonVariants from "@/components/buttons/variants"

import EngagementImg from "public/images/photography/engagements.jpg"
import LifestyleImg from "public/images/photography/lifestyle.jpg"
import NewbornImg from "public/images/photography/newborn.png"
import StudioImg from "public/images/photography/studio.jpg"
import WeddingImg from "public/images/photography/wedding.jpg"


type PhotographyProps = {
    priceText? : number
    shapeVariant?: keyof typeof shapeVariants
    variant: keyof typeof buttonVariants
    src: typeof WeddingImg | typeof StudioImg | typeof NewbornImg | typeof LifestyleImg | typeof EngagementImg 
    circleText?: string

}

export default function Photography({}:PhotographyProps) {
    return (
        <div>
            <PageTitle title="Photography" backgroundGradient="bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400" titleColor="text-calicoPeach-400" />
            <div className="px-5 md:px-12 xl:px-20 2xl:px-28">
            <div className="grid py-28 md:gap-28 lg:gap-36">
                <Shapes variant="leftAligned" circleText="Wedding" priceText={7000} src={WeddingImg}/>
                <Shapes variant="rightAligned" circleText="Engagements" priceText={750} src={EngagementImg}/>
                <Shapes variant="leftAligned" circleText="Newborn" priceText={1200} src={NewbornImg}/>
                <Shapes variant="rightAligned" circleText="Lifestyle" priceText={750} src={LifestyleImg}/>
                <Shapes variant="leftAligned" circleText="Studio" priceText={1000} src={StudioImg}/>
            </div>
            <div className="grid gap-8 py-48 place-items-center">
            <Button variant="pinkFocus" buttonText="View Gallery" />
            <Button variant="pink"  buttonText="Get a Quote"/>
            </div>
            
            </div>
        </div>
    )
}