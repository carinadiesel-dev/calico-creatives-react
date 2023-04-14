import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'
import variants from '@/ui/buttons/variants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // btnText: string
  variant?: keyof typeof variants
}
export const Button = ({ variant = "pink", ...rest }: ButtonProps) => {
  return <button
    className={`font-brilon text-[40px] w-[605px] py-4 border-8     rounded-full 
   ${variants[variant].base}
   ${variants[variant].border} 
   ${variants[variant].hover}`
    }
    {...rest}>button</button>;
}