import Image from "next/image"
import Travel1 from './Assets/Travel-Posters-01.jpg';
import Travel2 from './Assets/Travel-Posters-02.jpg';
import Travel3 from './Assets/Travel-Posters-03.jpg';
import Map from './Assets/map.jpg';

export const PostersGallery = () => {
    return (
        <div className="grid gap-8 grid-col-3 place-items-center">
            <Image src={Travel1} alt="" width={547} height={726}/>
            <Image src={Travel2} alt="" width={547} height={726}/>
            <Image src={Travel3} alt="" width={547} height={726}/>

            <div className="col-span-3 pt-16">
            <Image src={Map} alt="" width={1446} />
            </div>
        </div>
    )
}