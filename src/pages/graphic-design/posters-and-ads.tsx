import { PageTitle } from "@/ui/pageTitle/PageTitle"
import { PostersGallery } from "@/ui/posters/PostersGallery"
import { Paragraph } from "@/ui/paragraph/Paragraph"
import { Button } from "@/components/ui/button"
import variants from "@/ui/buttons/variants"

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
            <div className="py-28">
                <Button variant={"peach"}>Get a Quote</Button>
            </div>
            </div>
        </div>
    )
}