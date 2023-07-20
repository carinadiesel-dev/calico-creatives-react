import React, { FunctionComponent } from "react";

type CardRow = {
    backgroundColor : string
    image?: string // Testing (CHANGE BACK !!!)
    btnText: string 
}

const cardClasses = 'flex flex-col justify-end items-center h-full lg:w-1/3 bg-contain bg-no-repeat bg-bottom';
const btnContainerClasses = 'flex w-11/12 my-4';
const buttonClasses = "bg-white/80 w-full font-brilon text-[2.5rem] lg:text-3xl text-center text-calicoGray-400 py-4 rounded-full hover:bg-white";

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
}

export const Cards = ({}: CardsProps) => {
    return (
    <div className="flex flex-col lg:flex-row justify-around h-[100rem] md:h-[130rem] lg:h-[27rem] xl:h-[30rem] 2xl:h-[39rem]  gap-12 lg:gap-8">
            {/* {cards.map(card =>{
                return (
                <Card {...card}/>
            )})} */}
            <div className={`${cardClasses} bg-calicoPink-400 bg-photography `}>

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
            </div>
    </div>

    )
}