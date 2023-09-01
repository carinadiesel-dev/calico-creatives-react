import { PageTitle } from "@/components/pageTitle/PageTitle";
import { PostersGallery } from "@/components/posters/PostersGallery";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { CustomButton } from "@/components/buttons/Button";
import { Footer } from "@/components/footer/Footer";
import { Link } from "react-router-dom";

export default function PostersAndAds() {
  return (
    <div>
      <PageTitle
        title="Posters & Ads"
        backgroundGradient="bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400"
        titleColor="text-calicoPeach-400"
      />
      <Paragraph
        text={`Turn anything into a poster. Poster advertising offers a powerful opportunity to concentrate your message and communicate it to a targeted area
            Previous Work:`}
      />
      <div className="grid px-5 place-items-center md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div>
          <PostersGallery />
        </div>
        <div className="w-full py-14 lg:py-28 xl:py-36">
          <Link to="/contact">
            {" "}
            <CustomButton variant={"peach"} buttonText="Get a Quote" />{" "}
          </Link>
        </div>
      </div>
      <Footer backgroundColor="bg-calicoPeach-300" />
    </div>
  );
}
