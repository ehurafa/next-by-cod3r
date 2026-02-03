"use client"

import Layout from "../../components/template/Layout";
import useAppData from "@/src/data/hook/useAppData";

export default function Notifications() {
    const context = useAppData();
    
    return (
        <Layout
            title="Notificações"
            subtitle="Aqui você gerencia suas notificações"
        >
            { context && <h3>{context.name}</h3>}
        </Layout>
    )
}