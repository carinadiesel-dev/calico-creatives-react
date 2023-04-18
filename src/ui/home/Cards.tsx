import React, { FunctionComponent } from "react";

type CardRow = {
    backgroundColor : string
    image?: string // Testing (CHANGE BACK !!!)
    btnText: string 
}

const cardClasses = 'flex flex-col justify-end items-center w-1/3 bg-contain bg-no-repeat bg-bottom';
const btnContainerClasses = 'flex w-11/12 my-4';
const buttonClasses = "bg-white/80 w-full font-brilon text-[40px] text-center text-calicoGray-400 py-4 rounded-full hover:bg-white";

const Card: FunctionComponent<CardRow> = ({
    backgroundColor,
    image,
    btnText
}) => {
    return (
<div className={`${cardClasses} ${backgroundColor} ${image}`}>
                    <div className={btnContainerClasses}>
                        
                        <a className={buttonClasses} 
                        href="#">
                            {btnText}</a>
                    </div>   
                </div>
    )
}

type Card = {

}

type CardsProps = {
    cards: Card[]
}

export const Cards = ({cards}: CardsProps) => {
    return (
    <div className="flex flex-col xl:flex-row justify-around h-[627px] gap-8">
            {cards.map(card =>{
                return (
                <Card {...card}/>
            )})}
            {/* <div className={`${cardClasses} bg-calicoPink-400 bg-photography `}>

                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Photography</a>
                    </div>   
            </div>
                <div className={`${cardClasses} bg-calicoOrange-400 bg-graphicDesign `}>
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Graphic Design</a>
                    </div>   
                </div>

                <div className={`${cardClasses} bg-calicoPeach-400 bg-travel`}>
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Travel</a>
                    </div>   
            </div> */}
    </div>

    )
}