"use client"

import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import firebase from '../../app/firebase/config'
import User from '@/src/app/model/User'
import Cookies from 'js-cookie'

interface AuthContextProps {
    user: User
    loading?: boolean
    register?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    loginGoogle: () => Promise<void>
    logout: () => Promise<void>
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

function cookieManager(logged: boolean) {
    if (logged) {
        Cookies.set('admin-template-auth', 'true', { expires: 7 })
    } else {
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider(props) {
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter()

    async function sessionConfiguration(firebaseUser) {
       if(firebaseUser?.email) {
            const localUser = await standardizedUser(firebaseUser)
            setUser(localUser)
            cookieManager(true)
            setLoading(false)
            return localUser.email
       } else {
            setUser(null)
            cookieManager(false)
            setLoading(false)
            return false
       }
    }

    async function register(email: string, password: string) {
        try {
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await sessionConfiguration(resp.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string) {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
            await sessionConfiguration(resp.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            await sessionConfiguration(resp.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut() 
            await sessionConfiguration(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(sessionConfiguration)
            return () => cancel()
        } else {
            setLoading(false)
        }         
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            register,
            login,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext