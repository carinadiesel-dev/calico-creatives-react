import React, { FunctionComponent } from "react";

type CardRow = {
    backgroundColor : string
    // 'bg-calicoPink-400' | 'bg-calicoOrange-400' | 'bg-calicoPeach-400'
    image?: string // Testing (CHANGE BACK !!!)
    btnText: string 
}

const cardClasses = 'flex items-end h-[627px]';
const btnContainerClasses = 'w-full';
const buttonClasses = "bg-white/60 w-full font-brilon text-[40px] text-center text-calicoGray-400 py-4 rounded-3xl";

const Card: FunctionComponent<CardRow> = ({
    backgroundColor,
    // image,
    btnText
}) => {
    return (
<div className={`${cardClasses} ${backgroundColor}`}>
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
    <div className="flex flex-col xl:flex-row h-[627px] px-24 gap-8">
            {/* {cards.map(card =>{
                return (
                <Card {...cards}/>
            )})} */}
            <div className={`${cardClasses} bg-calicoPink-400`}>
                    <div className={btnContainerClasses}>
                    <img src={graphicDesign} alt="" />
                        <a className={buttonClasses} 
                        href="#">
                            Photography</a>
                    </div>   
                </div>

                <div className={`${cardClasses} bg-calicoOrange-400`}>
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Photography</a>
                    </div>   
                </div>

                <div className={`${cardClasses} bg-calicoPeach-400`}>
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Photography</a>
                    </div>   
                </div>
            
    </div>

    )
}