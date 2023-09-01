import { Footer } from "@/components/footer/Footer";
import { SinglePage } from "@/components/singlePage/SinglePage";

export default function TravelBlog() {
  return (
    <div className="relative grid">
      <SinglePage
        headerText="Travel Blog"
        headerPositionAlign="self-end"
        headerPositionJustify="justify-self-end"
      />
      <div className="absolute place-self-center -mt-80">
        <h2 className="font-brilon text-9xl text-calicoGray-200">
          Coming Soon ...
        </h2>
      </div>
      <Footer backgroundColor="bg-calicoPeach-300" />
    </div>
  );
}
