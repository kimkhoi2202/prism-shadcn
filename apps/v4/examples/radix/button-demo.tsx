import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/styles/radix-nova/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Primary</Button>
      <Button size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
