import React, {SVGProps} from 'react'

type IconCalendarEditProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconCalendarEdit = ({ size = 1, ...rest }: IconCalendarEditProps) => {
  return <svg width={22 * (24 / 22) * size} height={24 * size} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M3.33337 1.48242V2.73242" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66663 1.48242V2.73242" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.45837 4.43652H8.54171" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.00414 7.21971L6.52915 8.69471C6.47081 8.75305 6.41664 8.86138 6.40414 8.94055L6.32497 9.50305C6.29581 9.70722 6.43748 9.84889 6.64164 9.81972L7.20415 9.74055C7.28331 9.72805 7.39581 9.67388 7.44998 9.61554L8.92498 8.14055C9.17915 7.88639 9.29998 7.59055 8.92498 7.21555C8.55415 6.84472 8.2583 6.96554 8.00414 7.21971Z" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.79163 7.43213C7.91663 7.88213 8.26663 8.23213 8.71663 8.35713" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 9.81576H3.33333C1.875 9.81576 1.25 8.98242 1.25 7.73242V4.19076C1.25 2.94076 1.875 2.10742 3.33333 2.10742H6.66667C8.125 2.10742 8.75 2.94076 8.75 4.19076V5.64909" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.99816 6.35726H5.0019" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.45592 6.35726H3.45967" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.45592 7.60726H3.45967" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}