import React, { FunctionComponent } from "react";
import {IconPhotography} from '@/ui/icons/IconPhotography'
import {IconGraphicDesign} from '@/ui/icons/IconGraphicDesign'
import {IconTravel} from '@/ui/icons/IconTravel'

type CardRow = {
    backgroundColor : string
    // 'bg-calicoPink-400' | 'bg-calicoOrange-400' | 'bg-calicoPeach-400'
    image?: string // Testing (CHANGE BACK !!!)
    btnText: string 
}

const cardClasses = 'flex flex-col h-[627px]';
const btnContainerClasses = 'flex w-full';
const buttonClasses = "bg-white/60 font-brilon text-[40px] text-center text-calicoGray-400 py-4 rounded-3xl hover:bg-white";

const Card: FunctionComponent<CardRow> = ({
    backgroundColor,
    image,
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
    <div className="flex flex-col xl:flex-row justify-around h-[627px] gap-8">
            {/* {cards.map(card =>{
                return (
                <Card {...cards}/>
            )})} */}
            <div className={`${cardClasses} bg-calicoPink-400`}>
            
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Photography</a>
                    </div>   
                    <IconPhotography />
                </div>

                <div className={`${cardClasses} bg-calicoOrange-400 `}>
                
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Graphic Design</a>
                    </div>   
                    <IconGraphicDesign />
                </div>

                <div className={`${cardClasses} bg-calicoPeach-400`}>
                
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="#">
                            Travel</a>
                    </div>   
                    <IconTravel />
                </div>
            
    </div>

    )
}