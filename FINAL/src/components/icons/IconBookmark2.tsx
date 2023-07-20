import React, {SVGProps} from 'react'

type IconBookmark2Props = SVGProps<SVGSVGElement> & { size?: number }

export const IconBookmark2 = ({ size = 1, ...rest }: IconBookmark2Props) => {
  return <svg width={22 * size} height={24 * size} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M6.66634 4.39495V9.12829C6.66634 9.73246 6.23301 9.98662 5.70384 9.69495L4.06635 8.78245C3.89135 8.68661 3.608 8.68661 3.433 8.78245L1.79551 9.69495C1.26634 9.98662 0.833008 9.73246 0.833008 9.12829V4.39495C0.833008 3.68245 1.41634 3.09912 2.12884 3.09912H5.37051C6.08301 3.09912 6.66634 3.68245 6.66634 4.39495Z" stroke="currentColor" strokeWidth="0.75"  strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.16671 2.77825V7.51159C9.16671 8.11576 8.73338 8.36992 8.20421 8.07825L6.66671 7.21992V4.39492C6.66671 3.68242 6.08338 3.09909 5.37088 3.09909H3.33337V2.77825C3.33337 2.06575 3.9167 1.48242 4.6292 1.48242H7.87088C8.58338 1.48242 9.16671 2.06575 9.16671 2.77825Z" stroke="currentColor" strokeWidth="0.75"  strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}