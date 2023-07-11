import { PageTitle } from "@/components/pageTitle/PageTitle";
import { Paragraph } from "@/components/paragraph/Paragraph";

import WebDesignImg from "../../assets/web-design.png";

import { CustomButton } from "@/components/buttons/Button";
import buttonVariants from "@/components/buttons/variants";
import { Footer } from "@/components/footer/Footer";

type WebDesignProps = {
  text: string;
};

export default function WebDesign() {
  return (
    <div>
      <PageTitle
        title="Web Design"
        backgroundGradient="bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400"
        titleColor="text-calicoPeach-400"
      />
      <Paragraph text="Websites are an essential tool for businesses to establish their credibility and build trust with their customers, You are currently viewing one of our websites. Contact us for more information." />

      <div className="grid gap-4 place-items-center">
        <div className="w-full px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <img src={WebDesignImg} alt="" />
        </div>
        <div className="py-28">
          <CustomButton variant={"pink"} buttonText="Get a quote"/>
        </div>
      </div>
      <Footer backgroundColor="bg-calicoPink-400" />
    </div>
  );
}
