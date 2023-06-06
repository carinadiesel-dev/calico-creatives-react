import { PageTitle } from "@/ui/pageTitle/PageTitle"

type PostersAndAdsProps = {
    title: string
    titleColor: 'text-calicoPink-400'| 'text-calicoPeach-400'
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400' | 'bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400' | 'bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300'
}

export default function PostersAndAds(){
    return (
        <div>
            <PageTitle title="Posters & Ads" backgroundGradient="bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400" titleColor="text-calicoPeach-400" />
        </div>
    )
}