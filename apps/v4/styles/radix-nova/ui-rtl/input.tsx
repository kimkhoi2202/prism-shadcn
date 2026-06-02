import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "h-10 w-full min-w-0 rounded-[14px] border border-border/80 bg-input/20 px-3.5 py-2 text-base text-foreground shadow-none transition-[background-color,border-color,box-shadow,color,outline-color] duration-100 outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-border/50 disabled:bg-input/10 disabled:text-muted-foreground disabled:opacity-50 aria-invalid:border-destructive/70 aria-invalid:ring-0 motion-reduce:transition-none dark:border-input/70 dark:bg-input/30 dark:aria-invalid:border-destructive/60",
  {
    variants: {
      variant: {
        default:
          "focus:border-foreground/80 focus:bg-input/30 focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_72%,transparent)] focus:outline-2 focus:outline-offset-0 focus:outline-foreground/75 focus-visible:border-foreground/85 focus-visible:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_86%,transparent)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-foreground/85 aria-invalid:focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--destructive)_75%,transparent)] aria-invalid:focus:outline-destructive/70 aria-invalid:focus-visible:shadow-[0_0_0_1px_color-mix(in_oklab,var(--destructive)_85%,transparent)] aria-invalid:focus-visible:outline-destructive/70 dark:focus:border-foreground/85 dark:focus:bg-input/38 dark:focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_82%,transparent)] dark:focus:outline-foreground/85 dark:focus-visible:border-foreground/85 dark:focus-visible:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_90%,transparent)] dark:focus-visible:outline-foreground/90 dark:aria-invalid:focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--destructive)_80%,transparent)] dark:aria-invalid:focus:outline-destructive/70 dark:aria-invalid:focus-visible:shadow-[0_0_0_1px_color-mix(in_oklab,var(--destructive)_90%,transparent)] dark:aria-invalid:focus-visible:outline-destructive/70",
        quiet:
          "focus:border-border/80 focus:bg-input/20 focus-visible:border-border/80 focus-visible:ring-0 focus-visible:outline-none dark:focus:border-input/70 dark:focus:bg-input/30 dark:focus-visible:border-input/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Input({
  className,
  type,
  variant = "default",
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant}
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
