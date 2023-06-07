import Image from "next/image"
import Invite1 from "./Assets/invite1.jpg"
import Invite2 from "./Assets/invite2.jpg"
import Invite3 from "./Assets/invite3.jpg"

export const StationaryGallery = () => {
    return (
        <div className="grid gap-12 lg:gap-16 xl:16 place-items-center">
            <div>
            <Image src={Invite1} alt=""/>
            </div>
            <div>
            <Image src={Invite2} alt=""/>
            </div>
            <div>
            <Image src={Invite3} alt=""/>
            </div>
        </div>
    )
}