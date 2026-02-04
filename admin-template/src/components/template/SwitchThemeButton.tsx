import { MoonIcon, SunIcon } from "../icons"

interface SwitchThemeButtonProps {
    theme: string
    switchTheme: () => void
}

export default function SwitchThemeButton(props: SwitchThemeButtonProps) {
    return props.theme === 'dark'
        ? (
            <div onClick={props.switchTheme}>
                <div>{SunIcon}</div>
                <div>
                    <span>Claro</span>
                </div>
            </div>

        )
        : (
            <div onClick={props.switchTheme}>
                <div>{MoonIcon}</div>
                <div>
                    <span>Escuro</span>
                </div>
            </div>
        )
       
}