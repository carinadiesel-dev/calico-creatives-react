import { PageTitle } from "@/components/pageTitle/PageTitle";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { StationaryGallery } from "@/components/stationary/StationaryGallery";
import { CustomButton } from "@/components/buttons/Button";
import { Footer } from "@/components/footer/Footer";
import { Link } from "react-router-dom";

export default function StationaryAndEvents() {
  return (
    <div>
      <PageTitle
        title="Stationary & Events"
        backgroundGradient="bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300"
        titleColor="text-calicoPink-400"
      />
      <Paragraph
        text={`We offer luxury stationery for all of life’s special celebrations and events. Birthdays, Weddings, Corporate, Baby Showers`}
      />
      <div className="grid place-items-center">
        <div className="px-5 md:px-12 lg:w-2/3">
          <StationaryGallery />
        </div>
        <div className="w-full px-5 py-14 lg:py-28 xl:py-36 md:px-12 lg:px-0">
          <Link to="/contact">
            {" "}
            <CustomButton variant={"peach"} buttonText="Get a quote" />
          </Link>
        </div>
      </div>
      <Footer backgroundColor="bg-calicoPeach-300" />
    </div>
  );
}
