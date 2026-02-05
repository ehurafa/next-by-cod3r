"use client"

import { ReactNode } from "react"
import { AppProvider } from "../data/context/AppContext"
import { AuthProvider } from "../data/context/AuthContext"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
        <AppProvider>
            {children}
        </AppProvider>
    </AuthProvider>
    
  )
}
