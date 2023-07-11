import CellphoneMockup from '../../assets/branding/Cellphone-Mockup-IG.jpg'
import FacebookMockup from '../../assets/branding/Facebook-Mockup.jpg'

export const ImageRow = () => {
    return (
        <div className="flex flex-col items-center justify-around gap-16 lg:gap-12 lg:flex-row">
            <div className='w-full'>
                <img src={CellphoneMockup} alt=""/>
            </div>
            <div className='w-full'>
                <img src={FacebookMockup} alt=""/>
            </div>
        </div>
    )
}