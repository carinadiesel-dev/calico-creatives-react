import { FunctionComponent, useState, useEffect } from "react";
import { CCLogo } from "../logos/CCLogo";
import React from "react";
import heroImg from "./Assets/HeroImg.png";
import heroLarge from "./Assets/hero-large.png";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center w-screen overflow-hidden bg-center bg-no-repeat bg-contain bg-homeGradient lg:flex-row">
      <div className="hidden lg:visible lg:flex lg:w-[60%] lg:translate-x-14 lg:translate-y-24 2xl:translate-x-48 2xl:translate-y-36">
        <CCLogo />
      </div>

      <div className="relative flex flex-1">
        <div className="lg:overflow-hidden">
          <img src={heroLarge} alt="Picture of the founder" />
        </div>
      </div>
    </div>
  );
}
