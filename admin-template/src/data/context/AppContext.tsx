"use client"

import { createContext, ReactNode } from "react"

const AppContext = createContext({
    name: null
})

interface AppProviderProps {
    children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <AppContext.Provider value={{
            name: 'Teste Context API'
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext