"use client"

import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react'
import firebase from '../../app/firebase/config'
import User from '@/src/app/model/User'

interface AuthContextProps {
    user: User
    loginGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function standardizedUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()
    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        providerId: firebaseUser.providerData[0].providerId,
        imageUrl: firebaseUser.photoURL
    }
}

export function AuthProvider(props) {
    const [user, setUser] = useState<User>(null)
    const router = useRouter()

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        if (resp.user?.email) {
            const localUser = await standardizedUser(resp.user)
            setUser(localUser)
            router.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext