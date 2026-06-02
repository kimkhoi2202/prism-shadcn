import { type Metadata } from "next"

import { ComponentStatesBoard } from "./component-states-board"

export const metadata: Metadata = {
  title: "Component States",
  description: "Prism ShadCN component states for the Homework 5.1 prototype.",
}

export default function ComponentStatesPage() {
  return <ComponentStatesBoard />
}
