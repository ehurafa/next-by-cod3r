import { MoonIcon, SunIcon } from "../icons"

interface SwitchThemeButtonProps {
    theme: string
    switchTheme: () => void
}

export default function SwitchThemeButton(props: SwitchThemeButtonProps) {
    return props.theme === 'dark'
        ? (
            <div
                onClick={props.switchTheme}
                className={`
                    hidden sm:flex items-center bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 cursor-pointer rounded-full p-1`}
            >
                <div className={`
                    flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full    
                `}>{SunIcon(4)}</div>
                <div className={`hidden lg:flex items-center ml-4 text-white`}>
                    <span className="text-sm">Claro</span>
                </div>
            </div>

        )
        : (
            <div
                onClick={props.switchTheme}
                className={`
                    hidden sm:flex items-center justify-end bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 cursor-pointer rounded-full p-1`}
            >
                <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
                    <span className="text-sm">Escuro</span>
                </div>
                <div className={`
                    flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full    
                `}>{MoonIcon(4)}</div>
            </div>
        )
       
}