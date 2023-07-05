import React, {SVGProps} from 'react'

type IconHeartProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconHeart = ({ size = 1, ...rest }: IconHeartProps) => {
  return <svg width={48 * size} height={48 * size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d="M12.4065 7.62744C7.47153 7.19569 3.13147 10.7307 2.68665 15.815C2.46221 18.3804 3.32525 20.2823 4.79975 22.3657L18.2528 38.9133L27.0357 39.6817L43.1408 25.7201C44.9561 23.9245 46.136 22.2161 46.3603 19.6526C46.805 14.5702 43.1508 10.2209 38.2167 9.78924C35.0235 9.50987 32.6367 9.30104 29.4338 9.02083C27.9235 8.8887 26.4669 9.15893 25.1597 9.7421C23.9981 9.00093 22.6507 8.52369 21.1895 8.39585C17.9989 8.11671 15.5888 7.90585 12.4065 7.62744Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5617 18.8831C38.0063 13.8008 34.354 9.45161 29.4222 9.02013C25.4398 8.67172 21.8307 11.1234 20.3521 14.7333C19.5218 10.9219 16.3849 7.97582 12.4025 7.62741C7.46975 7.19585 3.13148 10.731 2.68667 15.8153C2.46222 18.3808 3.32481 20.2826 4.79857 22.366L18.2449 38.9129L34.3434 24.9508C36.158 23.1551 37.3374 21.4466 37.5617 18.8831Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;
}