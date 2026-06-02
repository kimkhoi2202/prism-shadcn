import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york-v4/ui/button"

import { RootComponents } from "./components"

const title = "Better defaults for engineers who ship"
const description =
  "Prism ShadCN is a source-owned UI system for founders and engineers building with AI. It keeps what works about shadcn and sharpens the details users actually feel: buttons, inputs, focus states, command menus, empty states, and dark surfaces."

const proofPoints = [
  {
    title: "Source-owned",
    description:
      "The code stays in your app, understandable and ready to reshape.",
  },
  {
    title: "Opinionated defaults",
    description:
      "Components start with taste, not with another round of cleanup.",
  },
  {
    title: "Built for AI builders",
    description:
      "Move faster without accepting generic output as the final state.",
  },
]

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="h-[31px] rounded-lg">
            <Link href="/create">Customize Defaults</Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-lg">
            <Link href="/docs/components">Explore Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper flex-1 pb-6">
        <div className="container overflow-hidden">
          <section className="grid gap-3 pb-6 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-lg border bg-muted/30 p-5 text-left"
              >
                <h2 className="text-sm font-medium">{point.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </section>
          <section className="-mx-4 w-[160vw] overflow-hidden rounded-lg border border-border/50 md:hidden md:w-[150vw]">
            <Image
              src="/r/styles/new-york-v4/dashboard-01-light.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="block dark:hidden"
              priority
            />
            <Image
              src="/r/styles/new-york-v4/dashboard-01-dark.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="hidden dark:block"
              priority
            />
          </section>
          <section className="hidden theme-container md:block">
            <RootComponents />
          </section>
        </div>
      </div>
    </div>
  )
}
