import { PageTitle } from "@/components/pageTitle/PageTitle"
import { Paragraph } from "@/components/paragraph/Paragraph"
import { CustomButton } from "@/components/buttons/Button";
import buttonVariants from "@/components/buttons/variants";
import { Footer } from "@/components/footer/Footer";
import { ImageRow } from "@/components/branding/ImageRow";
import {Link, Route, Routes} from 'react-router-dom';


// type BrandingAndSocialProps = {
//     title: string
//     titleColor: 'text-calicoPink-400'| 'text-calicoPeach-400'
//     backgroundGradient: 'bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400' | 'bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400' | 'bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300'
//     paragraph: string
//     buttonText: string
// }

export default function BrandingAndSM(){
    return (
        <div className="w-screen">
                <PageTitle title="Branding & Social Media" backgroundGradient="bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400" titleColor="text-calicoPink-400" />
                <div className="flex flex-col items-center">
                <Paragraph text='Social media increases the amount of exposure a brand receives and increases traffic. Social media also helps to develop loyal fans and generates leads. Having a strong social media presence allows a brand to develop business partnerships, reduce marketing costs and improve sales. Contact us to learn more about this service.'/>
                <div className="px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
                <ImageRow />
                </div>
                <div className="py-28">
                <Link to="/contact"><CustomButton variant={"orange"} buttonText="Get a Quote" /> </Link>
                </div>
                
            </div>
            <Footer backgroundColor="bg-calicoOrange-400"/>
        </div>
    )
}