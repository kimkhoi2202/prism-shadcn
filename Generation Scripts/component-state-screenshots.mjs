import { mkdir } from "node:fs/promises"
import path from "node:path"
import puppeteer from "puppeteer"

const projectRoot = path.resolve(import.meta.dirname, "..")
const outputDir = path.join(projectRoot, "Component Screenshots")
const url = process.env.COMPONENT_STATES_URL ?? "http://localhost:3000/component-states"

await mkdir(outputDir, { recursive: true })

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 1500, deviceScaleFactor: 2 })

await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 })
await page.waitForSelector('[data-capture="button"]', { timeout: 60000 })
await page.evaluate(() => window.scrollTo(0, 0))

const captures = [
  {
    name: "Button States.png",
    selector: '[data-capture="button"]',
    setup: async () => {
      await page.focus('[data-state-target="button-focus"]')
      await page.hover('[data-state-target="button-hover"]')
    },
  },
  {
    name: "Input States.png",
    selector: '[data-capture="input"]',
    setup: async () => {
      await page.focus('[data-state-target="input-focus"]')
    },
  },
  {
    name: "Textarea States.png",
    selector: '[data-capture="textarea"]',
    setup: async () => {
      await page.focus('[data-state-target="textarea-focus"]')
    },
  },
  {
    name: "Input Group States.png",
    selector: '[data-capture="input-group"]',
    setup: async () => {
      await page.focus('[data-state-target="input-group-focus"]')
    },
  },
  {
    name: "Dropdown Menu States.png",
    selector: '[data-capture="dropdown-menu"]',
    setup: async () => {
      await page.click('[data-state-target="dropdown-trigger"]')
      await new Promise((resolve) => setTimeout(resolve, 150))
      await page.hover('[data-state-target="dropdown-hover"]')
    },
  },
]

for (const capture of captures) {
  await capture.setup()
  const target = await page.$(capture.selector)
  await target.evaluate((node) => node.scrollIntoView({ block: "center" }))
  await new Promise((resolve) => setTimeout(resolve, 150))
  await target.screenshot({ path: path.join(outputDir, capture.name) })
}

await browser.close()

console.log(`Saved ${captures.length} screenshots to ${outputDir}`)
