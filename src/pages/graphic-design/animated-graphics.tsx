import { PageTitle } from "@/ui/pageTitle/PageTitle"
import { Paragraph } from "@/ui/paragraph/Paragraph"
import { Button } from "@/components/ui/button"
import variants from "@/ui/buttons/variants"

export default function AnimatedGraphics(){
    return (
        <div>
            <PageTitle title="Animated Graphics" backgroundGradient="bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300" titleColor="text-calicoPink-400" />
            <Paragraph text="Animate your logo or create a flashy giff for your company! To bring a uniqueness to your logo, we can add some motion. An animated logo allows the imagination to go out of control. Previous work:"/>
            <div className="grid h-full gap-12 place-items-center">               
                <video controls controlsList="nodownload noremoteplayback noplaybackrate foobar" autoPlay>
                    <source src={`require('../../CME-animated-logo.mp4')`} type="video/mp4"/>
                </video>
                <Button variant={'peach'}>Get a Quote</Button>
            </div>
        </div>
    )
}