import React, { FunctionComponent } from "react";

 type ParagraphProps = {
 text : string
 }

export const Paragraph = ({text}: ParagraphProps) => {
    return (
    <div className="flex flex-col h-[32rem]">
        <div>
        <p className="text-3xl xl:text-[40px] leading-relaxed font-brilon text-calicoGray-400 text-center px-10 xl:px-28 py-20">
        {text}          
        </p>
     </div>
    
    </div>

    )
}