import Travel1 from '../../assets/posters/Travel-Posters-01.jpg';
import Travel2 from '../../assets/posters/Travel-Posters-02.jpg';
import Travel3 from '../../assets/posters/Travel-Posters-03.jpg';
import Map from '../../assets/posters/map.jpg';

export const PostersGallery = () => {
    return (
        <div className="grid grid-cols-1 gap-16 lg:gap-8 lg:grid-cols-3 place-items-center">
            <img src={Travel1} alt=""/>
            <img src={Travel2} alt=""/>
            <img src={Travel3} alt=""/>

            <div className="pt-16 lg:col-span-3">
            <img src={Map} alt="" width={1446} />
            </div>
        </div>
    )
}