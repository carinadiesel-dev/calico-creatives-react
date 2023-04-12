import React, { FunctionComponent } from "react";

type About = {

}

type AboutProps = {
    aboutText: string
    abouts: About
}
export const About = ({aboutText}: AboutProps) => {
    return (
    <div className="h-[402px]">
        <p className="text-3xl xl:text-[40px] leading-relaxed font-brilon text-calicoGray-400 text-center px-10 xl:px-28 py-20">
        Once upon there was a south african girly girl named Suané. She was always drawn to light and beauty, so she decided to paint with light to show off the colours this world have to offer. She studied graphic design in vancouver, canada. Never defined by a place or a thing, she always aims to try and be a master of all trades, a jack of none.            
        </p>
    </div>
    )
}