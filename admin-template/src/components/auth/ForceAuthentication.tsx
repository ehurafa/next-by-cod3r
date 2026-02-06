import Image from "next/image"
import loadingImage from '../../../public/images/loading.gif'
import useAuth from "@/src/data/hook/useAuth"

import { useRouter } from 'next/navigation'

export default function ForceAuthentication(props) {

    const router = useRouter()

    const {user, loading} = useAuth()

    function contentRender() {
        return (
            <>
                {props.children}
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