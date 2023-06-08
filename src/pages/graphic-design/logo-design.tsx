import { PageTitle } from "@/ui/pageTitle/PageTitle"
import { Paragraph } from "@/ui/paragraph/Paragraph"

import { CMELogo } from "@/ui/logos/CMELogo"
import { AOCLogo } from "@/ui/logos/AOCLogo"

import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

type LogoDesignProps = {
    text: string
}

export default function LogoDesign(){
    return (
        <div>
            <PageTitle title="Logo Design" backgroundGradient="bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400" titleColor="text-calicoPink-400" />
            <Paragraph text="A logo grabs attention, makes a strong first impression and it is the foundation of your brand - a memorable logo will separate you from everyone else. We create professional logos from scratch based on your needs and preferences. 
            Previous work:"/>
            <div className="grid gap-4 px-5 place-items-center md:px-12 lg:px-16 xl:px-20 2xl:px-28">
                <div className="w-full lg:w-2/3">
                <CMELogo />
                <AOCLogo />
                </div>
                <div className="py-28">
                <Button variant={"orange"}>Get a Quote</Button>
                </div>
            </div>
        </div>
    )
}