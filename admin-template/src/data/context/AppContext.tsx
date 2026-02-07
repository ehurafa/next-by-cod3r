"use client"

import { createContext, ReactNode, useEffect, useState } from "react"

type Theme = 'light' | 'dark'

interface AppContextProps {
    theme: Theme,
    switchTheme: () => void
}

const AppContext = createContext<AppContextProps>({
    theme: 'light',
    switchTheme: () => {}
})

interface AppProviderProps {
    children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {

    const [theme, setTheme] = useState<Theme>('light')

    function switchTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const savedTheme: Theme = localStorage.getItem( 'theme') as Theme
        if(savedTheme) {
            setTheme(savedTheme)
        }
    })

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