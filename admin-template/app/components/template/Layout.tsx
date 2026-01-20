import Content from "./Content"
import SidebarMenu from "./SidebarMenu"
import TopBar from "./TopBar"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <SidebarMenu />
            <TopBar title={props.title} subtitle={props.subtitle} />
            <Content>
                {props.children}
            </Content>
        </div>
    )
}