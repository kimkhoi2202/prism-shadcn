import * as React from "react"

import { cn } from "@/lib/utils"

type TextareaMode = "default" | "autosize"

type TextareaProps = React.ComponentProps<"textarea"> & {
  mode?: TextareaMode
}

function Textarea({ className, mode = "default", ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-mode={mode}
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-[14px] border border-border/80 bg-input/20 px-3.5 py-2.5 text-base text-foreground shadow-none transition-[background-color,border-color,box-shadow,color,outline-color] duration-100 outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground hover:border-foreground/25 hover:bg-input/30 focus:border-foreground/80 focus:bg-input/30 focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_72%,transparent)] focus:outline-2 focus:outline-offset-0 focus:outline-foreground/75 focus-visible:border-foreground/85 focus-visible:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_86%,transparent)] focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-foreground/85 disabled:cursor-not-allowed disabled:border-border/50 disabled:bg-input/10 disabled:text-muted-foreground disabled:opacity-50 aria-invalid:border-destructive/70 aria-invalid:ring-0 aria-invalid:focus:!border-transparent aria-invalid:focus:!shadow-[0_0_0_2px_color-mix(in_oklab,var(--destructive)_80%,transparent)] aria-invalid:focus:!outline-none aria-invalid:focus-visible:!border-transparent aria-invalid:focus-visible:!shadow-[0_0_0_2px_color-mix(in_oklab,var(--destructive)_85%,transparent)] aria-invalid:focus-visible:!outline-none motion-reduce:transition-none dark:border-input/70 dark:bg-input/30 dark:hover:border-foreground/25 dark:hover:bg-input/38 dark:focus:border-foreground/85 dark:focus:bg-input/38 dark:focus:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_82%,transparent)] dark:focus:outline-foreground/85 dark:focus-visible:border-foreground/85 dark:focus-visible:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_90%,transparent)] dark:focus-visible:outline-foreground/90 dark:aria-invalid:border-destructive/60 dark:aria-invalid:focus:!border-transparent dark:aria-invalid:focus:!shadow-[0_0_0_2px_color-mix(in_oklab,var(--destructive)_78%,transparent)] dark:aria-invalid:focus:!outline-none dark:aria-invalid:focus-visible:!border-transparent dark:aria-invalid:focus-visible:!shadow-[0_0_0_2px_color-mix(in_oklab,var(--destructive)_82%,transparent)] dark:aria-invalid:focus-visible:!outline-none",
        mode === "autosize" &&
          "max-h-[calc(8lh+1.25rem)] resize-none overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

export { Textarea, type TextareaProps }
