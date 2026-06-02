"use client"

import { Button } from "@/styles/base-nova/ui/button"
import {
  AppWindowIcon,
  ArchiveIcon,
  ClockIcon,
  CopyIcon,
  GitForkIcon,
  LaptopIcon,
  MessageCirclePlusIcon,
  MoreHorizontalIcon,
  PencilIcon,
  PinIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Open chat actions" />
        }
      >
        <MoreHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PinIcon />
            Pin chat
            <DropdownMenuShortcut>⌥⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PencilIcon />
            Rename chat
            <DropdownMenuShortcut>⌥⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArchiveIcon />
            Archive chat
            <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CopyIcon />
            Copy working directory
            <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy session ID
            <DropdownMenuShortcut>⌥⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy deeplink
            <DropdownMenuShortcut>⌥⌘L</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy as Markdown
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <MessageCirclePlusIcon />
            Open side chat
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <LaptopIcon />
            Fork into local
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <GitForkIcon />
            Fork into new worktree
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <ClockIcon />
            Add automation...
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <AppWindowIcon />
            Open in mini window
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
