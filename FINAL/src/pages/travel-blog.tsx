import { Footer } from "@/components/footer/Footer"
import { SingleHeader } from "@/components/singlePage/SingleHeader"
import { SinglePage } from "@/components/singlePage/SinglePage"

export default function TravelBlog() {
    return (
        <div className="relative grid">
            <SinglePage headerText="Travel Blog" headerPosition="self-end"/>
            <div className="absolute mt-52 place-self-center">
           <h2 className="text-7xl font-brilon text-calicoGray-400">Coming Soon ...</h2>
            </div>
            <Footer backgroundColor="bg-calicoPeach-300"/>
        </div>
    )
}