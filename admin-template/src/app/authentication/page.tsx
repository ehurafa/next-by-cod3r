"use client"

import AuthInput from "@/src/components/auth/AuthInput";
import { useState } from "react";

type mode = "login" | "register"

export default function AuthenticationPage() {
    const [mode, setMode] = useState<mode>("login")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>Autenticação</h1>
            <AuthInput
                label="Email"
                type="email"
                value={email}
                changeValue={setEmail}
                required
            />
            <AuthInput
                label="Senha"
                type="password"
                value={password}
                changeValue={setPassword}
                required
            />
        </div>
    )
}