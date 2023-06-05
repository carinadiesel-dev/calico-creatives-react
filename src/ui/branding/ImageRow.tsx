import Image from "next/image"
import CellphoneMockup from './Assets/Cellphone-Mockup-IG.jpg'
import FacebookMockup from './Assets/Facebook-Mockup.jpg'

export const ImageRow = () => {
    return (
        <div className="flex items-center justify-around gap-4 xl:flex-row">
            <Image src={CellphoneMockup} alt="" width={612} height={816}/>
            <Image src={FacebookMockup} alt="" width={874} height={585}/>
        </div>
    )
}