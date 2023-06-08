import Image from "next/image"
import Travel1 from './Assets/Travel-Posters-01.jpg';
import Travel2 from './Assets/Travel-Posters-02.jpg';
import Travel3 from './Assets/Travel-Posters-03.jpg';
import Map from './Assets/map.jpg';

export const PostersGallery = () => {
    return (
        <div className="grid grid-cols-1 gap-16 lg:gap-8 lg:grid-cols-3 place-items-center">
            <Image src={Travel1} alt=""/>
            <Image src={Travel2} alt=""/>
            <Image src={Travel3} alt=""/>

            <div className="pt-16 lg:col-span-3">
            <Image src={Map} alt="" width={1446} />
            </div>
        </div>
    )
}