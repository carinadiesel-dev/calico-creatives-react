import React, {SVGProps} from 'react'

type IconOvalFilledProps = SVGProps<SVGSVGElement> & { size?: number}

export const IconOvalFilled = ({ size = 1, ...rest }: IconOvalFilledProps) => {
  return <svg width={851 * size} height={553 * size} viewBox="0 0 851 553" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <ellipse cx="425" cy="275" rx="425.5" ry="276.5" fill="#f48987"></ellipse>
</svg>
}
