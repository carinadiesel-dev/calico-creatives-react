import { PageTitle } from "@/components/pageTitle/PageTitle"
import { PostersGallery } from "@/components/posters/PostersGallery"
import { Paragraph } from "@/components/paragraph/Paragraph"
import { CustomButton } from "@/components/buttons/Button";
import buttonVariants from "@/components/buttons/variants";
import { Footer } from "@/components/footer/Footer";
import {Link, Route, Routes} from 'react-router-dom';

type PostersAndAdsProps = {
    title: string
    titleColor: 'text-calicoPink-400'| 'text-calicoPeach-400'
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400' | 'bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400' | 'bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300'
}

export default function PostersAndAds(){
    return (
        <div>
            <PageTitle title="Posters & Ads" backgroundGradient="bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400" titleColor="text-calicoPeach-400" />
            <Paragraph text={`Turn anything into a poster. Poster advertising offers a powerful opportunity to concentrate your message and communicate it to a targeted area
            Previous Work:`} />
            <div className="grid place-items-center">

            
            <div className="px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
                <PostersGallery />
            </div>
            <div className="py-28 xl:py-36">
            <Link to="/contact"> <CustomButton variant={"peach"} buttonText="Get a Quote"/> </Link>
            </div>
            </div>
            <Footer backgroundColor="bg-calicoPeach-300" />
        </div>
    )
}