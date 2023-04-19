import Image from "next/image"
import Invite1 from "./Assets/invite1.jpg"
import Invite2 from "./Assets/invite2.jpg"
import Invite3 from "./Assets/invite3.jpg"

export const StationaryGallery = () => {
    return (
        <div className="grid gap-8 place-items-center">
            <Image src={Invite1} alt="" width={1044} height={695}/>
            <Image src={Invite2} alt="" width={1044} height={695}/>
            <Image src={Invite3} alt="" width={1044} height={695} />
        </div>
    )
}