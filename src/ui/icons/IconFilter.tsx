import React, {SVGProps} from 'react'

type IconFilterProps = SVGProps<SVGSVGElement> & { size?: number }

export const IconFilter = ({ size = 1, ...rest }: IconFilterProps) => {
  return <svg width={20 * size} height={21 * size} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.0616 0.5H0.938589C0.105855 0.5 -0.31434 1.51039 0.275699 2.10043L7.49999 9.32582V17.375C7.49999 17.6809 7.64925 17.9676 7.89988 18.143L11.0249 20.3298C11.6414 20.7613 12.5 20.3239 12.5 19.5617V9.32582L19.7245 2.10043C20.3133 1.51156 19.896 0.5 19.0616 0.5Z" fill="currentColor"/>
  </svg>;
}