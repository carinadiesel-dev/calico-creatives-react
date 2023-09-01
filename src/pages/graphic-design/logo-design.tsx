import { PageTitle } from "@/components/pageTitle/PageTitle";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Footer } from "@/components/footer/Footer";

import { CMELogo } from "@/components/logos/CMELogo";
import { AOCLogo } from "@/components/logos/AOCLogo";

import { CustomButton } from "@/components/buttons/Button";
import { Link } from "react-router-dom";

export default function LogoDesign() {
  return (
    <div>
      <PageTitle
        title="Logo Design"
        backgroundGradient="bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400"
        titleColor="text-calicoPink-400"
      />
      <Paragraph
        text="A logo grabs attention, makes a strong first impression and it is the foundation of your brand - a memorable logo will separate you from everyone else. We create professional logos from scratch based on your needs and preferences. 
            Previous work:"
      />
      <div className="grid gap-4 px-5 place-items-center md:px-12 lg:px-16 xl:px-20 2xl:px-28 xl:pb-16">
        <div className="w-2/3 lg:w-3/5">
          <CMELogo />
          <AOCLogo />
        </div>
        <div className="w-full py-14 lg:py-28">
          <Link to="/contact">
            {" "}
            <CustomButton buttonText="Get a Quote" variant="orange" />{" "}
          </Link>
        </div>
      </div>
      <Footer backgroundColor="bg-calicoOrange-400" />
    </div>
  );
}
