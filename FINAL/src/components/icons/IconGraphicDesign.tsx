import React, {SVGProps} from 'react'

type IconGraphicDesignProps = SVGProps<SVGSVGElement> & { size?: number}

export const IconGraphicDesign = ({ size = 1, ...rest }: IconGraphicDesignProps) => {
  return <svg width={545 * size} height={546 * size} viewBox="0 0 545 546" xmlns="http://www.w3.org/2000/svg" className="mt-4" {...rest}>
  <defs>
    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 2104 2104">
    </pattern>
  </defs>
  <rect id="vecteezy_fashion-illustration-set-cat-laptop-smartphone-powder_9393926_Converted_" data-name="vecteezy_fashion-illustration-set-cat-laptop-smartphone-powder_9393926 [Converted]" width="545" height="546" fill="url(#pattern)"/>
</svg>

    }