"use client"

import { ReactNode } from "react"
import { AppProvider } from "../data/context/AppContext"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  )
}
