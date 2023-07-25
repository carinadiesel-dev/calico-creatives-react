import { Footer } from "@/components/footer/Footer"
import { SingleHeader } from "@/components/singlePage/SingleHeader"
import { SinglePage } from "@/components/singlePage/SinglePage"

export default function TravelBlog() {
    return (
        <div>
            <SinglePage headerText="Travel Blog" headerPosition="self-end"/>
            <Footer backgroundColor="bg-calicoPeach-300"/>
        </div>
    )
}