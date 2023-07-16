import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'

import buttonVariants from '@/components/buttons/variants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText : string 
  variant?: keyof typeof buttonVariants
  
}

export const CustomButton = ({ buttonText ="Get a quote", variant = "pink", ...rest }: ButtonProps) => {
  return <button
    className={`font-brilon text-2xl xl:text-[2.5rem] w-[605px] py-4 border-8 rounded-full
   ${buttonVariants[variant].base}
   ${buttonVariants[variant].border} 
   ${buttonVariants[variant].hover}`
    }
    {...rest}>{buttonText}</button>;
}