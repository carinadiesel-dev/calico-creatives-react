import { useState } from "react";
import "./App.css";

import { Hero } from "@/components/home/Hero";
import { Cards } from "@/components/home/Cards";
import { Paragraph } from "@/components/paragraph/Paragraph";

function App() {
  // const [count, setCount] = useState(0)
  let card1 = {
    backgroundColor: "bg-calicoPink-400",
    image: "bg-photography",
    btnText: "Photography",
  };

  let card2 = {
    backgroundColor: "bg-calicoOrange-400",
    image: "bg-graphicDesign",
    btnText: "Graphic Design",
  };

  let card3 = {
    backgroundColor: "bg-calicoPeach-400",
    image: "bg-travel",
    btnText: "Travel",
  };

  const cards = [card1, card2, card3];
  return (
    <div>
      {/* <Layout>
      HEllo
      </Layout> */}
      <div className="flex flex-col items-center justify-between mx-auto">
        <Hero />
        <div>
          <Paragraph text="Once upon there was a south african girly girl named Suané. She was always drawn to light and beauty, so she decided to paint with light to show off the colours this world have to offer. She studied graphic design in vancouver, canada. Never defined by a place or a thing, she always aims to try and be a master of all trades, a jack of none." />
        </div>
        <div className="w-full px-16 pb-16">
          <Cards cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default App;
