import { PageTitle } from "@/ui/pageTitle/PageTitle"
import { Paragraph } from "@/ui/paragraph/Paragraph"
import { Button } from "@/components/ui/button"
import variants from "@/ui/buttons/variants"
import { ImageRow } from "@/ui/branding/ImageRow"

type BrandingAndSocialProps = {
    title: string
    titleColor: 'text-calicoPink-400'| 'text-calicoPeach-400'
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400' | 'bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400' | 'bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300'
    paragraph: string
    buttonText: string
}

export default function BrandingAndSocial(buttonText = "Get a Quote"){
    return (
        <div>
                <PageTitle title="Branding & Social Media" backgroundGradient="bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400" titleColor="text-calicoPink-400" />
                <div className="flex flex-col items-center">
                <Paragraph text='Social media increases the amount of exposure a brand receives and increases traffic. Social media also helps to develop loyal fans and generates leads. Having a strong social media presence allows a brand to develop business partnerships, reduce marketing costs and improve sales. Contact us to learn more about this service.'/>
                <ImageRow />
                <div className="py-28">
                <Button variant={"orange"}>Get a Quote</Button>
                </div>
                
            </div>
        </div>
    )
}