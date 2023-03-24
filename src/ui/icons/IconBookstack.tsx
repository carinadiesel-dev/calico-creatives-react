import React, {SVGProps} from 'react'

type IconBookstackProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconBookstack = ({ size = 1, ...rest }: IconBookstackProps) => {
  return <svg width={48 * size} height={48 * size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d="M44.2831 16.3789L23.4136 2.49617C22.2215 1.70324 20.6331 1.87572 19.6391 2.90603L4.00927 19.1064C3.42318 19.7139 3.00371 20.4474 2.77344 21.2375L26.2783 36.8732L44.2831 16.3789Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <path d="M44.2831 16.3789L23.4136 2.49617C22.2215 1.70324 20.6331 1.87572 19.6391 2.90603L4.00927 19.1064C3.42318 19.7139 3.00371 20.4474 2.77344 21.2375L26.2783 36.8732L44.2831 16.3789Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <path d="M22.9864 8.54663L35.1207 16.6283L30.5116 21.8425L18.3773 13.7608L22.9864 8.54663Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <path d="M2.77799 21.2397L26.28 36.8867L27.3865 45.9995L5.26132 31.26C4.08098 30.4757 3.29387 29.2236 3.09941 27.821L2.62887 23.2955C2.53223 22.5984 2.58666 21.8987 2.77799 21.2397Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  <path d="M44.2816 16.3784L45.4172 25.5188L27.3857 46.0002L26.2617 36.8758L44.2816 16.3784Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>;
}