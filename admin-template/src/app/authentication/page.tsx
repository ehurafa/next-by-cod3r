"use client"

import AuthInput from "@/src/components/auth/AuthInput";
import { useState } from "react";

type mode = "login" | "register"

export default function AuthenticationPage() {
    const [mode, setMode] = useState<mode>("login")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function send() {
        if (mode === "login") {
            console.log("Logando")
        } else {
            console.log("Cadastrando")
        }
    }

    return (
        <div className={`
            flex flex-col h-screen items-center justify-center
        `}>
            <div className={`
                w-1/2
            `}>
                <h1 className={
                    `text-xl font-bold mb-5 
                    `
                }>{mode === "login" ? "Entre com a sua conta" : "Cadastre-se na plataforma"}</h1>
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
                <button
                    className={`
                        w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6 cursor-pointer
                        `}
                    onClick={send}
                >
                    {mode === "login" ? "Entrar" : "Cadastrar"}
                </button>

                <hr className={`
                    my-6 border-gray-300 w-full
                `}/>

                <button
                    className={`
                        w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 cursor-pointer
                        `}
                    onClick={send}
                >
                    Entrar com o Google
                </button>
    
            </div>
        </div>
    )
}