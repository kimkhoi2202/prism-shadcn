"use client"

import * as React from "react"
import {
  Archive,
  Calendar,
  ChevronDown,
  CircleAlert,
  Command as CommandIcon,
  Copy,
  CreditCard,
  Download,
  Mail,
  Search,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  UserRound,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/styles/base-nova/ui/alert-dialog"
import { Button } from "@/styles/base-nova/ui/button"
import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/styles/base-nova/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/styles/base-nova/ui/command"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/styles/base-nova/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-nova/ui/dialog"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"
import { Textarea } from "@/styles/base-nova/ui/textarea"

const componentOptions = [
  { label: "Button", value: "button" },
  { label: "Dialog", value: "dialog" },
  { label: "Command", value: "command" },
  { label: "Select", value: "select" },
]

const comboboxItems = [
  "Alert Dialog",
  "Checkbox",
  "Combobox",
  "Context Menu",
  "Dropdown Menu",
]

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
            High-fidelity interaction captures for the Homework 5.1 prototype
            and DP5 component flow.
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
              <Textarea placeholder="Write notes" />
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
            <StateColumn label="Autosize">
              <Textarea
                data-state-target="textarea-autosize"
                mode="autosize"
                placeholder="Write notes"
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
                  <CommandIcon />
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

        <CaptureSection id="dialog" title="Dialog">
          <div className="grid gap-5 md:grid-cols-2">
            <StateColumn label="Trigger">
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>
                  Edit profile
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Review component defaults</DialogTitle>
                    <DialogDescription>
                      Tune the saved preset before publishing it to the shared
                      design system.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3">
                    <Input defaultValue="Prism component states" />
                    <Textarea
                      data-state-target="dialog-textarea-autosize"
                      mode="autosize"
                      defaultValue="Inputs, menus, and dialogs should feel consistent across light and dark surfaces."
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose render={<Button variant="outline" />}>
                      Cancel
                    </DialogClose>
                    <Button>Save preset</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </StateColumn>
            <StateColumn label="Compact">
              <Dialog>
                <DialogTrigger render={<Button />}>Open review</DialogTrigger>
                <DialogContent className="sm:max-w-xs">
                  <DialogHeader>
                    <DialogTitle>Prototype note</DialogTitle>
                    <DialogDescription>
                      This modal keeps confirmation copy short and action
                      hierarchy clear.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter showCloseButton>
                    <Button size="sm">Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="alert-dialog" title="Alert Dialog">
          <div className="grid gap-5 md:grid-cols-2">
            <StateColumn label="Default">
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="outline" />}>
                  Show warning
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Replace saved variant?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will update the shared button state used in the
                      prototype screens.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Replace</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </StateColumn>
            <StateColumn label="Destructive">
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="destructive" />}>
                  Delete token
                </AlertDialogTrigger>
                <AlertDialogContent size="sm">
                  <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                      <Trash2 />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Delete token?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This removes the color token from the current Prism
                      preset.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction variant="destructive">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="checkbox" title="Checkbox">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StateColumn label="Default">
              <label className="flex items-center gap-2 text-sm">
                <Checkbox />
                Include hover state
              </label>
            </StateColumn>
            <StateColumn label="Checked">
              <label className="flex items-center gap-2 text-sm">
                <Checkbox defaultChecked />
                Save as preset
              </label>
            </StateColumn>
            <StateColumn label="Disabled">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <Checkbox disabled />
                Locked option
              </label>
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="combobox" title="Combobox">
          <div className="grid gap-5 md:grid-cols-2">
            <StateColumn label="Searchable">
              <Combobox items={comboboxItems}>
                <ComboboxInput
                  className="w-full"
                  placeholder="Find component"
                  showClear
                />
                <ComboboxContent>
                  <ComboboxEmpty>No components found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </StateColumn>
            <StateColumn label="Disabled">
              <Combobox items={comboboxItems}>
                <ComboboxInput
                  className="w-full"
                  disabled
                  placeholder="Component locked"
                />
              </Combobox>
            </StateColumn>
          </div>
        </CaptureSection>

        <CaptureSection id="command" title="Command">
          <Command className="max-w-md rounded-xl border border-border/70">
            <CommandInput placeholder="Search actions" />
            <CommandList>
              <CommandEmpty>No actions found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Sparkles />
                  <span>Generate state set</span>
                </CommandItem>
                <CommandItem>
                  <Calendar />
                  <span>Schedule critique</span>
                </CommandItem>
                <CommandItem disabled>
                  <CircleAlert />
                  <span>Review locked token</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserRound />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Preferences</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CaptureSection>

        <CaptureSection id="context-menu" title="Context Menu">
          <div className="min-h-[260px]">
            <ContextMenu>
              <ContextMenuTrigger className="flex aspect-video w-full max-w-sm items-center justify-center rounded-lg border border-dashed border-border/80 bg-muted/20 text-sm text-muted-foreground">
                Right click component canvas
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuGroup>
                  <ContextMenuLabel>Canvas actions</ContextMenuLabel>
                  <ContextMenuItem>
                    <Copy />
                    Duplicate
                    <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Download />
                    Export capture
                    <ContextMenuShortcut>⇧E</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuCheckboxItem checked>
                    Show guides
                  </ContextMenuCheckboxItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="dark">
                  <ContextMenuRadioItem value="light">
                    Light surface
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="dark">
                    Dark surface
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Archive />
                    Move to
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Prototype board</ContextMenuItem>
                    <ContextMenuItem>DP5 archive</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  Remove capture
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </CaptureSection>

        <CaptureSection id="select" title="Select">
          <div className="grid gap-5 md:grid-cols-3">
            <StateColumn label="Default">
              <Select items={componentOptions} defaultValue={null}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose component" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Components</SelectLabel>
                    {componentOptions.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </StateColumn>
            <StateColumn label="Selected">
              <Select items={componentOptions} defaultValue="dialog">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {componentOptions.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </StateColumn>
            <StateColumn label="Disabled">
              <Select items={componentOptions} defaultValue="command">
                <SelectTrigger className="w-full" disabled>
                  <SelectValue />
                </SelectTrigger>
              </Select>
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
