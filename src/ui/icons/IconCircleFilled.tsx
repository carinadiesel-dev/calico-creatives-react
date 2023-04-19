import React, {SVGProps} from 'react'

type IconCircleFilledProps = SVGProps<SVGSVGElement> & { size?: number, circleText?: string }

export const IconCircleFilled = ({ size = 1, circleText = "Text", ...rest }: IconCircleFilledProps) => {
  return <svg width={369 * size} height={352 * size} viewBox="0 0 369 352" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <rect id="Rectangle_12" data-name="Rectangle 12" width="369" height="352" rx="176" fill="#facccb" opacity="0.672"/>
  <text x="145" y="190" className='text-5xl font-brilon text-calicoGray-400'>{circleText}</text>
</svg>
}
