import { PageTitle } from "@/ui/pageTitle/PageTitle"

export default function AnimatedGraphics(){
    return (
        <div>
            <PageTitle title="Animated Graphics" backgroundGradient="bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300" titleColor="text-calicoPink-400" />
            <div className="flex items-center justify-center px-5 md:px-12 lg:w-2/3">
                <div className="lg:py-16">
                <video src={require('./CME-animated-logo.mp4')}></video>
                </div>

            </div>
        </div>
    )
}