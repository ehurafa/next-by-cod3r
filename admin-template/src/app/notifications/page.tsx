"use client"

import Layout from "../../components/template/Layout";
import useAppData from "@/src/data/hook/useAppData";

export default function Notifications() {
    const { switchTheme} = useAppData();
    
    return (
        <Layout
            title="Notificações"
            subtitle="Aqui você gerencia suas notificações"
        >
            { switchTheme && <button onClick={switchTheme}>Mudar tema</button> }
        </Layout>
    )
}