import Hero from "@/components/home/Hero";
import { Cards } from "@/components/home/Cards";
import { Paragraph } from "@/components/paragraph/Paragraph";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between mx-auto overflow-hidden">
      <Hero />
      <div>
        <Paragraph text="Once upon there was a south african girly girl named Suané. She was always drawn to light and beauty, so she decided to paint with light to show off the colours this world have to offer. She studied graphic design in vancouver, canada. Never defined by a place or a thing, she always aims to try and be a master of all trades, a jack of none." />
      </div>
      <div className="w-full px-16 pb-20 md:my-20">
        <Cards />
      </div>
      <Footer backgroundColor="bg-calicoPink-400" />
    </div>
  );
}
