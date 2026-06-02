"use client"

import * as React from "react"
import {
  Archive,
  ChevronDown,
  Command,
  Copy,
  Download,
  Mail,
  Search,
  Settings,
  SlidersHorizontal,
  Sparkles,
  UserRound,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"
import { Input } from "@/styles/base-nova/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/styles/base-nova/ui/input-group"
import { Textarea } from "@/styles/base-nova/ui/textarea"

function CaptureSection({
  id,
  title,
  children,
  className,
}: {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      data-capture={id}
      className={cn(
        "overflow-hidden rounded-lg border border-border/70 bg-background shadow-sm",
        className
      )}
    >
      <div className="border-b border-border/70 px-5 py-4">
        <h2 className="text-base font-medium tracking-normal">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </section>
  )
}

function StateColumn({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="min-w-0 space-y-2">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      {children}
    </div>
  )
}

export function ComponentStatesBoard() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [submenuOpen, setSubmenuOpen] = React.useState(true)

  return (
    <div className="container-wrapper flex-1 py-6">
      <div className="container max-w-6xl space-y-6">
        <div className="space-y-2 pb-2">
          <h1 className="text-3xl font-medium tracking-normal">
            Prism ShadCN component states
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Button, input, textarea, input group, and dropdown menu captures for
            the Homework 5.1 prototype.
          </p>
        </div>

        <CaptureSection id="button" title="Button">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StateColumn label="Default">
              <Button data-state-target="button-default">Customize</Button>
            </StateColumn>
            <StateColumn label="Hover">
              <Button data-state-target="button-hover">Preview</Button>
            </StateColumn>
            <StateColumn label="Focus">
              <Button data-state-target="button-focus">Keyboard</Button>
            </StateColumn>
            <StateColumn label="Pressed">
              <Button data-state-target="button-active">Apply</Button>
            </StateColumn>
            <StateColumn label="Secondary">
              <Button variant="secondary">
                <Sparkles />
                Generate
              </Button>
            </StateColumn>
            <StateColumn label="Outline">
              <Button variant="outline">
                <Settings />
                Settings
              </Button>
            </StateColumn>
            <StateColumn label="Destructive">
              <Button variant="destructive">Remove</Button>
            </StateColumn>
            <StateColumn label="Disabled">
              <Button disabled>Disabled</Button>
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="input" title="Input">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <StateColumn label="Default">
              <Input placeholder="Project name" />
            </StateColumn>
            <StateColumn label="Filled">
              <Input defaultValue="Prism defaults" />
            </StateColumn>
            <StateColumn label="Focus">
              <Input
                data-state-target="input-focus"
                defaultValue="Focused field"
              />
            </StateColumn>
            <StateColumn label="Quiet">
              <Input variant="quiet" defaultValue="Quiet search" />
            </StateColumn>
            <StateColumn label="Invalid">
              <Input aria-invalid="true" defaultValue="Missing token" />
            </StateColumn>
            <StateColumn label="Disabled">
              <Input disabled defaultValue="Locked value" />
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="textarea" title="Textarea">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <StateColumn label="Default">
              <Textarea placeholder="Write component notes" />
            </StateColumn>
            <StateColumn label="Filled">
              <Textarea defaultValue="Design review notes stay clear, direct, and easy to scan." />
            </StateColumn>
            <StateColumn label="Focus">
              <Textarea
                data-state-target="textarea-focus"
                defaultValue="Focused long-form field"
              />
            </StateColumn>
            <StateColumn label="Invalid">
              <Textarea
                aria-invalid="true"
                defaultValue="This needs a clearer interaction state."
              />
            </StateColumn>
            <StateColumn label="Disabled">
              <Textarea disabled defaultValue="Commenting is disabled." />
            </StateColumn>
            <StateColumn label="Tall">
              <Textarea
                rows={5}
                defaultValue="A taller field keeps writing comfortable without losing the crisp Prism surface treatment."
              />
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="input-group" title="Input Group">
          <div className="grid gap-5 md:grid-cols-2">
            <StateColumn label="Search">
              <InputGroup>
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupInput
                  data-state-target="input-group-focus"
                  placeholder="Search components"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size="icon-xs" aria-label="Tune filters">
                    <SlidersHorizontal />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </StateColumn>
            <StateColumn label="Command">
              <InputGroup>
                <InputGroupAddon>
                  <Command />
                </InputGroupAddon>
                <InputGroupInput
                  data-state-target="input-group-command"
                  placeholder="Ask Prism"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>⌘K</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </StateColumn>
            <StateColumn label="Invalid">
              <InputGroup>
                <InputGroupAddon>
                  <Mail />
                </InputGroupAddon>
                <InputGroupInput
                  data-state-target="input-group-invalid"
                  aria-invalid="true"
                  placeholder="Enter your email here"
                />
              </InputGroup>
            </StateColumn>
            <StateColumn label="Textarea">
              <InputGroup>
                <InputGroupAddon align="block-start">
                  <InputGroupText>Prompt</InputGroupText>
                </InputGroupAddon>
                <InputGroupTextarea
                  data-state-target="input-group-prompt"
                  defaultValue="Generate a tuned default state for a new product form."
                />
                <InputGroupAddon align="block-end">
                  <InputGroupButton>Run</InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="dropdown-menu" title="Dropdown Menu">
          <div className="min-h-[620px]">
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger
                render={
                  <Button
                    data-state-target="dropdown-trigger"
                    aria-label="Open component menu"
                  />
                }
              >
                Actions
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={10}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Prism actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <UserRound />
                    Account
                    <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy />
                    Duplicate style
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem data-state-target="dropdown-hover">
                    <Download />
                    Export screenshot
                    <DropdownMenuShortcut>⇧E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuCheckboxItem checked>
                    Show focus rings
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="dark">
                  <DropdownMenuRadioItem value="light">
                    Light surfaces
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark surfaces
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub
                  open={submenuOpen}
                  onOpenChange={setSubmenuOpen}
                >
                  <DropdownMenuSubTrigger>
                    <Archive />
                    Move to
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Prototype board</DropdownMenuItem>
                    <DropdownMenuItem>Design system</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Remove component
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CaptureSection>
      </div>
    </div>
  )
}
