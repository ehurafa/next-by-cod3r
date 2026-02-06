import useAppData from "@/src/data/hook/useAppData"
import SwitchThemeButton from "./SwitchThemeButton"
import Title from "./Title"
import { UserAvatar } from "./UserAvatar"

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
            <div className={`flex flex-grow justify-end items-center`}>
                <SwitchThemeButton
                    theme={theme} switchTheme={switchTheme} />
                <UserAvatar className="ml-3" />
            </div>
        </div>
    )
}