"use client"

import { createContext, ReactNode, useState } from "react"

type Theme = 'light' | 'dark'

interface AppContextProps {
    theme: Theme,
    switchTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
    theme: 'light'
})

interface AppProviderProps {
    children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {

    const [theme, setTheme] = useState<Theme>('light')

    function switchTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <AppContext.Provider value={{
            theme,
            switchTheme
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext