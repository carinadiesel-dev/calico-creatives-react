import React, {SVGProps} from 'react'

type IconCircleFilledProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconCircleFilled = ({ size = 1, ...rest }: IconCircleFilledProps) => {
  return <svg width={369 * size} height={352 * size} viewBox="0 0 369 352" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <ellipse cx="425" cy="275" rx="184.5" ry="176" fill="#f48987"></ellipse>
</svg>
}
