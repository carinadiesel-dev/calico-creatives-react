import React, {SVGProps} from 'react'

type IconHourglassProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconHourglass = ({ size = 1, ...rest }: IconHourglassProps) => {
  return <svg width={22 * size} height={24 * size} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M6.34998 0.982422H3.64998C2.08331 0.982422 1.96248 2.39076 2.80831 3.15742L7.19164 7.14076C8.03748 7.90742 7.91664 9.31576 6.34998 9.31576H3.64998C2.08331 9.31576 1.96248 7.90742 2.80831 7.14076L7.19164 3.15742C8.03748 2.39076 7.91664 0.982422 6.34998 0.982422Z" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}