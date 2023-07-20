import React, {SVGProps} from 'react'

type IconBlockProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconBlock = ({ size = 1, ...rest }: IconBlockProps) => {
  return <svg width={48 * size} height={48 * size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d="M27.0852 2L43.4665 13.4748L20.9125 24L4.53125 12.5252L27.0852 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9125 23.9997L4.53125 12.5249V34.5249L20.9125 45.9997V23.9997Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.6875 38.1188V15.9067L31.8394 5.56911L32.0358 5.47119" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M15.1016 41.89V19.8882L37.409 9.47805L37.6238 9.37891" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M4.53125 27.4282L20.9125 38.903L43.4665 28.3779" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M4.53125 20.1221L20.9125 31.5969L43.4665 21.0717" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M43.468 13.4746L20.9141 23.9998V45.9998L43.468 35.4746V13.4746Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.6445 5.42822L36.0258 16.903V38.903" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M28.5466 42.4099V20.5973L12.1653 9.12254L12.0312 9.02441" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>;
}