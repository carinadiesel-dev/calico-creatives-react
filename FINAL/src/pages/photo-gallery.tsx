import { Footer } from "@/components/footer/Footer";
import { SingleHeader } from "@/components/singlePage/SingleHeader";
import { SinglePage } from "@/components/singlePage/SinglePage";

export default function PhotoGallery() {
  return (
    <div className="relative grid">
        <SinglePage headerText="Photo Gallery" headerPositionAlign="self-end" headerPositionJustify="justify-self-end"/>
      <div className="absolute place-self-center -mt-80">
        <h2 className="text-5xl font-brilon lg:text-9xl text-calicoGray-200">
          Coming Soon ...
        </h2>
      </div>
      <Footer backgroundColor="bg-calicoPeach-300" />
    </div>
  );
}