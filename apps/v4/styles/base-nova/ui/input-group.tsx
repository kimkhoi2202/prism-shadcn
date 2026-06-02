"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/styles/base-nova/ui/button"
import { Input } from "@/styles/base-nova/ui/input"
import { Textarea } from "@/styles/base-nova/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group relative flex h-10 w-full min-w-0 items-center rounded-[14px] border border-border/80 bg-input/20 transition-[background-color,border-color,box-shadow,color,outline-color] duration-100 outline-none focus-within:border-foreground/80 focus-within:bg-input/30 focus-within:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_70%,transparent)] focus-within:outline-2 focus-within:outline-offset-0 focus-within:outline-foreground/70 hover:border-foreground/25 hover:bg-input/30 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:border-border/50 has-disabled:bg-input/10 has-disabled:opacity-60 has-[[data-slot=input-group-control]:focus-visible]:border-foreground/85 has-[[data-slot=input-group-control]:focus-visible]:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_84%,transparent)] has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot][aria-invalid=true]]:border-destructive/70 has-[[data-slot][aria-invalid=true]]:ring-0 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto motion-reduce:transition-none dark:border-input/70 dark:bg-input/30 dark:focus-within:border-foreground/85 dark:focus-within:bg-input/38 dark:focus-within:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_80%,transparent)] dark:focus-within:outline-foreground/80 dark:hover:border-foreground/25 dark:hover:bg-input/38 dark:has-[[data-slot=input-group-control]:focus-visible]:border-foreground/85 dark:has-[[data-slot=input-group-control]:focus-visible]:shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_90%,transparent)] dark:has-[[data-slot][aria-invalid=true]]:border-destructive/60 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-2 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
        "inline-end":
          "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
        "block-start":
          "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
        "block-end":
          "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset"
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 outline-none focus:border-0 focus:bg-transparent focus-visible:border-0 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:outline-none disabled:bg-transparent aria-invalid:ring-0 aria-invalid:focus-visible:outline-none dark:bg-transparent dark:focus:bg-transparent dark:focus-visible:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 outline-none focus:border-0 focus:bg-transparent focus-visible:border-0 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:outline-none disabled:bg-transparent aria-invalid:ring-0 aria-invalid:focus-visible:outline-none dark:bg-transparent dark:focus:bg-transparent dark:focus-visible:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
