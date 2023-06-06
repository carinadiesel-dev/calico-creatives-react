import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/utils/cn"

const text = "text-calicoGray-400";
const hoverText = "hover:text-calicoWhite-400"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-colors font-brilon text-2xl xl:text-[40px] w-[605px] py-4 border-8 rounded-full",
  {
    variants: {
      variant: {
        pink: `bg-calicoPink-100 ${text} border-calicoPink-400 hover:bg-calicoPink-400 ${hoverText}`,
        pinkFocus: `bg-calicoPink-400 text-calicoWhite-400 border-calicoPink-400 hover:bg-calicoRedOrange-400 hover:text-calicoWhite-400 hover:border-calicoRedOrange-400`,
        orange: `bg-calicoWhite-400/80 ${text} border-calicoOrange-400 hover:bg-calicoOrange-400 hover:text-calicoWhite-400 ${hoverText}`,
        peach: `bg-calicoWhite-400/80 ${text} border-calicoPeach-300 hover:bg-calicoPeach-300 hover:text-calicoWhite-400 ${hoverText}`

        // default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-input hover:bg-accent hover:text-accent-foreground",
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "underline-offset-4 hover:underline text-primary",
      },
      // size: {
      //   default: "h-10 py-2 px-4",
      //   sm: "h-9 px-3 rounded-md",
      //   lg: "h-11 px-8 rounded-md",
      // },
    },
    defaultVariants: {
      variant: "pink",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
