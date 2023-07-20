import React, {SVGProps} from 'react'

type IconSunProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconSun = ({ size = 1, ...rest }: IconSunProps) => {
  return <svg width={48 * size} height={48 * size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d="M21.3363 5.63086L25.422 11.0524L31.7902 8.70042L32.2963 15.4702L38.9252 16.9346L35.6909 22.9032L40.4757 27.719L34.5279 30.9916L35.9496 37.6297L29.1767 37.1672L26.7839 43.5201L21.3363 39.4693L15.8886 43.5201L13.4958 37.1672L6.72291 37.6297L8.14462 30.9916L2.19684 27.719L6.9817 22.9032L3.7474 16.9346L10.3762 15.4702L10.8823 8.70042L17.2505 11.0524L21.3363 5.63086Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M32.2953 15.4651L31.797 8.79924L31.7891 8.69989L37.3139 6.76172L37.8199 13.5315L32.2953 15.4651Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M40.4751 27.7142L35.6903 22.8985L41.2149 20.9648L45.9998 25.7806L40.052 29.0532L34.5273 30.9868L40.4751 27.7142Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M26.8606 3.69727L30.8834 9.03526L25.4217 11.0524L21.3359 5.63089L26.8606 3.69727Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M16.4075 6.76562L19.5939 7.94244L17.251 11.0512L10.8828 8.69925L16.4075 6.76562Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M33.8541 37.4893L29.178 37.1699L26.7852 43.5229L32.3098 41.5893L33.8541 37.4893Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M21.337 34.516C26.6096 34.516 30.884 30.2417 30.884 24.969C30.884 19.6963 26.6096 15.422 21.337 15.422C16.0643 15.422 11.79 19.6963 11.79 24.969C11.79 30.2417 16.0643 34.516 21.337 34.516Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M38.9257 16.9312L32.2969 15.4668L37.8215 13.5332L44.4504 14.9975L41.2161 20.9662L35.6914 22.8999L38.9257 16.9312Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
<path d="M35.9491 37.6245L34.5273 30.9864L40.052 29.0527L41.4737 35.6909L35.9491 37.6245Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
</svg>;
}