import Invite1 from "../../assets/stationary/invite1.jpg";
import Invite2 from "../../assets/stationary/invite2.jpg";
import Invite3 from "../../assets/stationary/invite3.jpg";

export const StationaryGallery = () => {
  return (
    <div className="grid gap-12 lg:gap-16 xl:16 place-items-center">
      <div>
        <img src={Invite1} alt="" />
      </div>
      <div>
        <img src={Invite2} alt="" />
      </div>
      <div>
        <img src={Invite3} alt="" />
      </div>
    </div>
  );
};
