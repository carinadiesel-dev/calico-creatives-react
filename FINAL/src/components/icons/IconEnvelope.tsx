import React, {SVGProps} from 'react'

type IconEnvelopeProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconEnvelope = ({ size = 1, ...rest }: IconEnvelopeProps) => {
  return <svg width={24 * size} height={24 * size} viewBox="0 0 24 24" fill="none" stroke='black' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...rest}>
<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
}