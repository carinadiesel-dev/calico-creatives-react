import { PageTitle } from "@/ui/pageTitle/PageTitle"
import { Paragraph } from "@/ui/paragraph/Paragraph"

import Image from "next/image"
import WebDesignImg from "public/images/web-design.png"

import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

type WebDesignProps = {
    text: string
}

export default function WebDesign(){
    return (
        <div>
            <PageTitle title="Web Design" backgroundGradient="bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400" titleColor="text-calicoPeach-400" />
            <Paragraph text="Websites are an essential tool for businesses to establish their credibility and build trust with their customers, You are currently viewing one of our websites. Contact us for more information."/>

            <div className="grid gap-4 place-items-center">
            <div className="px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
            <Image src={WebDesignImg} alt=""/>
            </div>
            <div className="py-28">
            <Button variant={"pink"}>Get a Quote</Button>
            </div>
            </div>
           
            
        </div>
    )
}