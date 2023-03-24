import React, {SVGProps} from 'react'

type IconLightningProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconLightning = ({ size = 1, ...rest }: IconLightningProps) => {
  return <svg width={48 * size} height={48 * size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d="M3.13477 20.8571L10.4451 2H30.7769L23.4665 20.8571H34.3559L8.3129 46L11.3589 20.8571H3.13477Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <path d="M3.13477 20.8571L10.4451 2H30.7769L23.4665 20.8571H34.3559L8.3129 46L11.3589 20.8571H3.13477Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <path d="M34.3574 20.8564L8.31445 45.9993H18.823L44.866 20.8564H34.3574Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <path d="M30.7751 2L23.4648 20.8571H33.9734L41.2837 2H30.7751Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  </svg>;
}