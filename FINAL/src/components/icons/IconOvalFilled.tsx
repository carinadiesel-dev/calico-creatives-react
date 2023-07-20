import React, {SVGProps} from 'react'

type IconOvalFilledProps = SVGProps<SVGSVGElement> & { size?: number}

export const IconOvalFilled = ({ size = 1, ...rest }: IconOvalFilledProps) => {
  return <svg width={851 * size} height={553 * size} viewBox="0 0 851 553" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <rect id="Rectangle_7" data-name="Rectangle 7" width="851" height="553" rx="276.5" fill="#f48987"/>
</svg>
}
