import React, {SVGProps} from 'react'

type IconPointerProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconPointer = ({ size = 1, ...rest }: IconPointerProps) => {
  return <svg width={48 * size} height={48 * size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d="M41.9173 12.1847L9.09387 3.64502L17.6336 36.4684L24.9512 26.0603L35.6165 40.5512L46 30.1677L31.5092 19.5024L41.9173 12.1847Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M9.05373 3.64502L17.627 36.4602L10.5742 40.2427L2.00098 7.42752L9.05373 3.64502Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M20.1968 32.8816L24.9778 26.0557L35.6172 40.566L28.6091 44.3545L20.1968 32.8816Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>;
}