import { PageTitle } from "@/ui/pageTitle/PageTitle"
import { Paragraph } from "@/ui/paragraph/Paragraph"
import { StationaryGallery } from "@/ui/stationary/StationaryGallery"
import { Button } from "@/components/ui/button"
import variants from "@/ui/buttons/variants"

type StationaryProps = {
    title: string
    titleColor: 'text-calicoPink-400'| 'text-calicoPeach-400'
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400' | 'bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400' | 'bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300'
}

export default function Stationary(){
    return (
        <div>
            <PageTitle title="Stationary & Events" backgroundGradient="bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300" titleColor="text-calicoPink-400" />
            <Paragraph text={`We offer luxury stationery for all of life’s special celebrations and events. Birthdays, Weddings, Corporate, Baby Showers`} />
            <div className="grid place-items-center">
                
            
            <div className="px-5 md:px-12 lg:w-2/3">
            <StationaryGallery />
            </div>
            <div className="px-5 py-16 lg:py-28 md:px-12 lg:px-0">
                <Button variant={"peach"}>Get a Quote</Button>
            </div>
            </div>
        </div>
    )
}