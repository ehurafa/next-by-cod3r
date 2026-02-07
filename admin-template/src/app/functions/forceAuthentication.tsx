'use client'
import Head from "next/head"
import Image from "next/image"
import loadingImage from '../../../public/images/loading.gif'
import useAuth from "@/src/data/hook/useAuth"

import { useRouter } from 'next/navigation'

export default function forceAuthentication(jsx) {

    const router = useRouter()

    const {user, loading} = useAuth()

    function contentRender() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.include('adimin-template-auth')) {
                                window.location.href = '/autenticacao'}  
                        `
                    }}>

                    </script>
                </Head>
                {jsx}
            </>
        )
    }

    function loadingRender() {
        return (
            <div className={
                ` flex justify-center items-center h-screen`
            }>
                <Image src={loadingImage} alt="Carregando..." />
            </div>
        )
    }

    if(!loading && user?.email) {
        return contentRender()
    } else if (loading) {
        return loadingRender()
    } else {
        router.push('/autenticacao')
        return null
    }
}