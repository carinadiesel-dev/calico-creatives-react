import { PageTitle } from "@/components/pageTitle/PageTitle"
import { Paragraph } from "@/components/paragraph/Paragraph"
import { CustomButton } from "@/components/buttons/Button";
import buttonVariants from "@/components/buttons/variants";
import { Footer } from "@/components/footer/Footer";
import { ImageRow } from "@/components/branding/ImageRow";
import {Link, Route, Routes} from 'react-router-dom';


export default function BrandingAndSM(){
    return (
        <div className="w-screen">
                <PageTitle title="Branding & Social Media" backgroundGradient="bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400" titleColor="text-calicoPink-400" />
                <div className="flex flex-col items-center px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
                <Paragraph text='Social media increases the amount of exposure a brand receives and increases traffic. Social media also helps to develop loyal fans and generates leads. Having a strong social media presence allows a brand to develop business partnerships, reduce marketing costs and improve sales. Contact us to learn more about this service.'/>
              
                <ImageRow />
              
                <div className="w-full py-40">
                <Link to="/contact"><CustomButton variant={"orange"} buttonText="Get a Quote" /> </Link>
                </div>
                
            </div>
            <Footer backgroundColor="bg-calicoOrange-400"/>
        </div>
    )
}