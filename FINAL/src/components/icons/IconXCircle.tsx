import React, {SVGProps} from 'react'

type IconXCircleProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconXCircle = ({ size = 1, ...rest }: IconXCircleProps) => {
  return <svg width={22 * size} height={22 * size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M6.20837 0.833496H3.79171C3.50838 0.833496 3.10837 1.00016 2.90837 1.20016L1.20004 2.9085C1.00004 3.1085 0.833374 3.5085 0.833374 3.79183V6.20849C0.833374 6.49183 1.00004 6.89182 1.20004 7.09182L2.90837 8.80016C3.10837 9.00016 3.50838 9.16683 3.79171 9.16683H6.20837C6.4917 9.16683 6.89171 9.00016 7.09171 8.80016L8.80004 7.09182C9.00004 6.89182 9.16671 6.49183 9.16671 6.20849V3.79183C9.16671 3.5085 9.00004 3.1085 8.80004 2.9085L7.09171 1.20016C6.89171 1.00016 6.4917 0.833496 6.20837 0.833496Z"stroke="currentColor" strokeWidth="0.75"  strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.54163 6.45817L6.45829 3.5415"stroke="currentColor" strokeWidth="0.75"  strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.45829 6.45817L3.54163 3.5415"stroke="currentColor" strokeWidth="0.75"  strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}