import React, {SVGProps} from 'react'

type IconCheckmarkCircleProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconCheckmarkCircle = ({ size = 1, ...rest }: IconCheckmarkCircleProps) => {
  return <svg width={22 * size} height={24 * size} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M4.99992 9.66683C7.29159 9.66683 9.16659 7.79183 9.16659 5.50016C9.16659 3.2085 7.29159 1.3335 4.99992 1.3335C2.70825 1.3335 0.833252 3.2085 0.833252 5.50016C0.833252 7.79183 2.70825 9.66683 4.99992 9.66683Z"stroke="currentColor" strokeWidth="0.75"  strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.22925 5.49997L4.40841 6.67913L6.77091 4.3208"stroke="currentColor" strokeWidth="0.75"  strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}