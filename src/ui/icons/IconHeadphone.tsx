import React, {SVGProps} from 'react'

type IconBookProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconHeadphone = ({ size = 1, ...rest }: IconBookProps) => {
  return <svg width={24 * size} height={24 * size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M5.45999 18.4898V15.5698C5.45999 14.5998 6.21999 13.7298 7.29999 13.7298C8.26999 13.7298 9.13999 14.4898 9.13999 15.5698V18.3798C9.13999 20.3298 7.51999 21.9498 5.56999 21.9498C3.61999 21.9498 1.99999 20.3198 1.99999 18.3798V12.2198C1.88999 6.5998 6.32999 2.0498 11.95 2.0498C17.57 2.0498 22 6.5998 22 12.1098V18.2698C22 20.2198 20.38 21.8398 18.43 21.8398C16.48 21.8398 14.86 20.2198 14.86 18.2698V15.4598C14.86 14.4898 15.62 13.6198 16.7 13.6198C17.67 13.6198 18.54 14.3798 18.54 15.4598V18.4898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}