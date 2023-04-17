import React, {SVGProps} from 'react'

type IconTravelProps = SVGProps<SVGSVGElement> & { size?: number}

export const IconTravel = ({ size = 1, ...rest }: IconTravelProps) => {
  return <svg width={545 * size} height={578 * size} viewBox="0 0 545 578" xmlns="http://www.w3.org/2000/svg" {...rest}>
</svg>

    }