import React, { FunctionComponent } from "react";

type aboutCard = {
    backgroundColor : 'bg-calicoPink-400' | 'bg-calicoOrange-400' | 'bg-calicoPeach-400'
    image?: string // Testing (CHANGE BACK !!!)
    btnText: string 
}

const cardClasses = 'h-[627px] w-1/3';
const btnContainerClasses = 'bg-white/60';
const buttonClasses = "font-brilon text-[40px] text-center text-calicoGray-400 py-4 rounded-3xl";

const Card: FunctionComponent<aboutCard> = ({
    backgroundColor,
    image,
    btnText
}) => {
    return (
<div className={`${backgroundColor} ${cardClasses}`}>
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Photography</a>
                    </div>   
                </div>
    )
}



type Card = {

}

type AboutProps = {
    cards: Card[]
}
export const About = ({cards}: AboutProps) => {
    return (
    <div className="flex flex-col h-[760px]">
        <div className="">
        <p className="text-3xl xl:text-[40px] leading-relaxed font-brilon text-calicoGray-400 text-center px-10 xl:px-28 py-20">
        Once upon there was a south african girly girl named Suané. She was always drawn to light and beauty, so she decided to paint with light to show off the colours this world have to offer. She studied graphic design in vancouver, canada. Never defined by a place or a thing, she always aims to try and be a master of all trades, a jack of none.            
        </p>
     </div>
    
    
        <div className="flex gap-4">
            {cards.map(card =>{
                return (
                <Card {...card}/>
            )})}
        </div>
    </div>

    )
}