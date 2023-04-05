import React, {SVGProps} from 'react'

type IconEmailProps = SVGProps<SVGSVGElement> & { size?: number}

export const IconEmail = ({ size = 1, ...rest }: IconEmailProps) => {
  return <svg width={95 * size} height={95 * size} viewBox="0 0 95 95" fill="black" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d="M47.347,0A47.347,47.347,0,1,0,94.694,47.348,47.347,47.347,0,0,0,47.347,0M73.122,64.364a2.88,2.88,0,0,1-2.872,2.872H24.445a2.88,2.88,0,0,1-2.872-2.872v-24.3L45.352,52.337a4.29,4.29,0,0,0,3.991,0L73.122,40.066Zm0-26.607L48.4,50.514a2.235,2.235,0,0,1-2.109,0L21.573,37.757V30.333a2.88,2.88,0,0,1,2.872-2.872H70.25a2.88,2.88,0,0,1,2.872,2.872Z" transform="translate(0 -0.001)"/>
</svg>
}

