import Image from "next/image"
import CellphoneMockup from './Assets/Cellphone-Mockup-IG.jpg'
import FacebookMockup from './Assets/Facebook-Mockup.jpg'

export const ImageRow = () => {
    return (
        <div className="flex flex-col items-center justify-around gap-16 lg:gap-12 lg:flex-row">
            <div>
                <Image src={CellphoneMockup} alt=""/>
            </div>
            <div>
                <Image src={FacebookMockup} alt=""/>
            </div>
        </div>
    )
}