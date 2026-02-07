"use client"

import AuthInput from "@/src/components/auth/AuthInput"
import { WarningIcon } from "@/src/components/icons"
import { useState } from "react"
import useAuth from "@/src/data/hook/useAuth"

type mode = "login" | "register"

export default function AuthenticationPage() {
    const [mode, setMode] = useState<mode>("login")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string|null>(null)

    const { register, login, loginGoogle } = useAuth()

    function showError(message: string, timeInSeconds = 5) {
        setError(message)
        setTimeout(() => setError(null), timeInSeconds * 1000)
    }

    async function send() {
        try {
            login ? await login(email, password) : await register(email, password)

        } catch(e) {
            showError(e?.message ?? 'Erro desconhecido!')
        }
    }

    return (
        <div className={`
            flex h-screen items-center justify-center
        `}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da tela de Autenticação"
                    className={`h-screen w-full object-cover`}    
                />
            </div>
            <div className={`
                w-full md:w-1/2 lg:w-1/3 m-10
            `}>
                <h1 className={
                    `text-3xl font-bold mb-5 
                    `
                    }>{mode === "login" ? "Entre com a sua conta" : "Cadastre-se na plataforma"}
                </h1>

                { error ? (
                    <div className={`
                        flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg
                    `}>
                        { WarningIcon(6) }
                        <span className="ml-3">{error}</span>

                    </div>
                ) : false }

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
                    onClick={loginGoogle}
                >
                    Entrar com o Google
                </button>

                { mode === "login" ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setMode("register")} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1">Crie uma conta gratuitamente</a>
                    </p>
                ) :  (
                     <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setMode("login")} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1">Entre com as suas credenciais</a>
                    </p>
                ) }
    
            </div>
        </div>
    )
}