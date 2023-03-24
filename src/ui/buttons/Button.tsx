import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'
import variants from '@/ui/buttons/variants'

const sizes = {
  "default": "px-4 h-[40px]",
  "lg": "px-6 h-[50px]",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}
export const Button = ({ size = "default", variant = "primary", ...rest }: ButtonProps) => {
  return <button
    className={`flex items-center gap-4 rounded-full transition
      ${sizes[size]} 
      ${variants[variant].base} 
      hover:${variants[variant].hover}`
    }
    {...rest} />;
}