import useAppData from "@/src/data/hook/useAppData"
import SwitchThemeButton from "./SwitchThemeButton"
import Title from "./Title"

interface TopBarProps {
    title: string
    subtitle: string
    children?: any
}

export default function TopBar(props: TopBarProps) {

    const { theme, switchTheme } = useAppData()

    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle} />
            <div className={`flex flex-grow justify-end`}>
                <SwitchThemeButton
                    theme={theme} switchTheme={switchTheme} />
            </div>
        </div>
    )
}