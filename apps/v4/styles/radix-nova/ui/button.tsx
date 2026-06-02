import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative isolate inline-flex max-w-full shrink-0 transform-gpu cursor-pointer items-center justify-center rounded-[14px] border border-transparent font-medium whitespace-nowrap shadow-none transition-[background-color,border-color,color,box-shadow,transform] duration-100 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 active:not-aria-[haspopup]:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 motion-reduce:transition-none dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--primary-foreground)_12%)] aria-expanded:bg-[color-mix(in_oklab,var(--primary)_88%,var(--primary-foreground)_12%)] aria-expanded:text-primary-foreground [a]:hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--primary-foreground)_12%)]",
        outline:
          "border-border/80 bg-transparent text-foreground hover:bg-foreground/12 aria-expanded:bg-foreground/12 aria-expanded:text-foreground",
        secondary:
          "bg-foreground/10 text-primary hover:bg-foreground/18 aria-expanded:bg-foreground/18 aria-expanded:text-primary",
        ghost:
          "bg-transparent text-foreground shadow-none hover:bg-foreground/12 hover:text-foreground aria-expanded:bg-foreground/12 aria-expanded:text-foreground",
        destructive:
          "bg-destructive text-white hover:bg-[color-mix(in_oklab,var(--destructive)_88%,white_12%)] focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:text-white dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-4 text-base has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-8 gap-1 rounded-[12px] px-3 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 rounded-[13px] px-3.5 text-sm in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 rounded-[16px] px-5 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-10 rounded-[14px] p-0 text-base",
        "icon-xs":
          "size-8 rounded-[12px] p-0 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-9 rounded-[13px] p-0 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-11 rounded-[16px] p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
