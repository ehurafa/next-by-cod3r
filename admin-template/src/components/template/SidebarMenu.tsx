'use client';

import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"
import useAuth from "@/src/data/hook/useAuth";

export default function SidebarMenu(props) {

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-colum items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Início" icon={HomeIcon} />
                <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon} />
                <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
            </ul>

            <ul>
                <MenuItem
                    onClick={logout}
                    text="Sair"
                    icon={LogoutIcon}
                    className={`text-red-600 hover:bg-red-400 dark:hover:bg-red-400 hover:text-white dark:hover:text-white`}
                />
            </ul>
        </aside>
    )
}