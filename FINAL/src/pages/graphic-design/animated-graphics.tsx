import { PageTitle } from "@/components/pageTitle/PageTitle"
import { Paragraph } from "@/components/paragraph/Paragraph"
import { CustomButton } from "@/components/buttons/Button";
import buttonVariants from "@/components/buttons/variants";
import { Footer } from "@/components/footer/Footer";
import video from "../../assets/video/CME-animated-logo.mp4"

export default function AnimatedGraphics(){
    return (
        <div>
            <PageTitle title="Animated Graphics" backgroundGradient="bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300" titleColor="text-calicoPink-400" />
            <Paragraph text="Animate your logo or create a flashy giff for your company! To bring a uniqueness to your logo, we can add some motion. An animated logo allows the imagination to go out of control. Previous work:"/>
            <div className="grid px-5 place-items-center md:px-12 lg:px-16 xl:px-20 2xl:px-28">
                
                <video className="w-[90vw] md:w-[75vw] xl:w-[60vw]" controls autoPlay={true} muted playsInline>
                    <source src={video} type="video/mp4"/>
                </video>
                             
                <div className="py-28">
                <CustomButton variant={'peach'} buttonText="Get a Quote"/>
                </div>
                
            </div>
            <Footer backgroundColor="bg-calicoPeach-300"/>
        </div>
    )
}