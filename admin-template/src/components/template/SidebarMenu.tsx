import { BellIcon, HomeIcon, SettingsIcon } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function SidebarMenu(props) {
    return (
        <aside>
            <div className={`
                flex flex-colum items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo />
            </div>
            <ul>
                <MenuItem url="/" text="Início" icon={HomeIcon} />
                <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon} />
                <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
            </ul>
        </aside>
    )
}