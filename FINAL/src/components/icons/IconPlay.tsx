import React, {SVGProps} from 'react'

type IconPlayProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconPlay = ({ size = 1, ...rest }: IconPlayProps) => {
    return(
<svg id="Group_26" data-name="Group 26" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="147.325" height="147.325" viewBox="0 0 147.325 147.325">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_75" data-name="Rectangle 75" width="147.325" height="147.325" fill="#f5a892"/>
    </clipPath>
  </defs>
  <g id="Group_25" data-name="Group 25" clip-path="url(#clip-path)">
    <path id="Path_56" data-name="Path 56" d="M143.689,120.5l-9.756-5.632-9.755-5.632a3.827,3.827,0,0,0-5.74,3.314v22.53a3.827,3.827,0,0,0,5.74,3.314l9.755-5.632,9.756-5.632a3.827,3.827,0,0,0,0-6.628" transform="translate(-54.637 -50.147)" fill="#f5a892" fill-rule="evenodd"/>
    <path id="Path_57" data-name="Path 57" d="M73.662,0a73.663,73.663,0,1,0,73.663,73.662A73.663,73.663,0,0,0,73.662,0m0,113.763a40.1,40.1,0,1,1,40.1-40.1,40.1,40.1,0,0,1-40.1,40.1" fill="#f5a892" fill-rule="evenodd"/>
  </g>
</svg>
    )
}
