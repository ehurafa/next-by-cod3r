"use client"

import useAppData from "../../data/hook/useAppData"
import Content from "./Content"
import SidebarMenu from "./SidebarMenu"
import TopBar from "./TopBar"
import forceAuthentication from "@/src/app/functions/forceAuthentication"
// import ForceAuthentication from "@/src/app/functions/ForceAuthentication"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { theme } = useAppData()    

    return forceAuthentication(
        <div className={`${theme} flex h-screen w-screen`}>
            <SidebarMenu />
            <div className={`
                flex
                flex-col
                p-7
                w-full
                bg-gray-300 dark:bg-gray-800
                `}>
                <TopBar title={props.title} subtitle={props.subtitle} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}