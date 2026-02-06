"use client"

import Layout from "../../components/template/Layout";
import useAppData from "@/src/data/hook/useAppData";

export default function Profile() {
    
    return (
        <Layout
            title="Perfil do usuário"
            subtitle="Aqui você gerencia suas informações de perfil"
        >
            <h1>Perfil do Usuário</h1>
        </Layout>
    )
}