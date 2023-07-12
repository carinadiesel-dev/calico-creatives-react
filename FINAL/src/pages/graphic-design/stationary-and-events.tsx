import { PageTitle } from "@/components/pageTitle/PageTitle"
import { Paragraph } from "@/components/paragraph/Paragraph"
import { StationaryGallery } from "@/components/stationary/StationaryGallery"
import { CustomButton } from "@/components/buttons/Button";
import buttonVariants from "@/components/buttons/variants";
import { Footer } from "@/components/footer/Footer";

type StationaryProps = {
    title: string
    titleColor: 'text-calicoPink-400'| 'text-calicoPeach-400'
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400' | 'bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400' | 'bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300'
}

export default function StationaryAndEvents(){
    return (
        <div>
            <PageTitle title="Stationary & Events" backgroundGradient="bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300" titleColor="text-calicoPink-400" />
            <Paragraph text={`We offer luxury stationery for all of life’s special celebrations and events. Birthdays, Weddings, Corporate, Baby Showers`} />
            <div className="grid place-items-center">
                
            
            <div className="px-5 md:px-12 lg:w-2/3">
            <StationaryGallery />
            </div>
            <div className="px-5 py-16 lg:py-28 md:px-12 lg:px-0">
                <CustomButton variant={"peach"} buttonText="Get a quote" />
            </div>
            </div>
            <Footer backgroundColor="bg-calicoPeach-300" />
        </div>
    )
}