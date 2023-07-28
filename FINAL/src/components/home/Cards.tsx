import React, { FunctionComponent } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

type CardRow = {
    backgroundColor : string
    image: string
    btnText: string
    link: string 
}

const cardClasses = 'flex flex-col justify-end items-center h-full lg:w-1/3 bg-contain bg-no-repeat bg-bottom';
const btnContainerClasses = 'flex w-11/12 my-4';
const buttonClasses = "bg-white/80 w-full font-brilon text-3xl md:text-[2.5rem] lg:text-3xl text-center text-calicoGray-400 py-4 rounded-full hover:bg-white";

const Card: FunctionComponent<CardRow> = ({
    backgroundColor,
    image,
    btnText,
    link
}) => {
    return (
<div className={`${cardClasses} ${backgroundColor} ${image}`}>
                    <div className={btnContainerClasses}>
                        
                        <a className={buttonClasses} 
                        href={link}>
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
    <div className="flex flex-col lg:flex-row justify-around h-[100rem] md:h-[130rem] lg:h-[27rem] xl:h-[30rem] 2xl:h-[39rem]  gap-12 lg:gap-8">
            {/* {cards.map(card =>{
                return (
                <Card {...card}/>
            )})} */}
            <div className={`${cardClasses} bg-calicoPink-400 bg-photography `}>

                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="/photography">
                            Photography</a>
                    </div>   
            </div>
                <div className={`${cardClasses} bg-calicoOrange-400 bg-graphicDesign `}>
                    <div className={btnContainerClasses}>
                    <DropdownMenu>
  <DropdownMenuTrigger className={buttonClasses}>Graphic Design</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />
    <DropdownMenuItem className={buttonClasses}><a href="/graphic-design/logo-design">Logo Design</a></DropdownMenuItem>
    <DropdownMenuItem className={buttonClasses}><a href="/graphic-design/animated-graphics">Animated Graphics</a></DropdownMenuItem>
    <DropdownMenuItem className={buttonClasses}><a href="/graphic-design/web-design">Web Design</a></DropdownMenuItem>
    <DropdownMenuItem className={buttonClasses}><a href="/graphic-design/branding-and-social-media">Branding and Social Media</a></DropdownMenuItem>
    <DropdownMenuItem className={buttonClasses}><a href="/graphic-design/stationary-and-events">Stationary and Events</a></DropdownMenuItem>
    <DropdownMenuItem className={buttonClasses}><a href="/graphic-design/posters-and-ads">Posters and Ads</a></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
 
                </div>
                </div>

                <div className={`${cardClasses} bg-calicoPeach-400 bg-travel`}>
                    <div className={btnContainerClasses}>
                        <a className={buttonClasses} 
                        href="/travel-blog">
                            Travel</a>
                    </div>   
     </div>
    
    </div>

    )
}