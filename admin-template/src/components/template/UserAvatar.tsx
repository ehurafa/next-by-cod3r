import useAuth from "@/src/data/hook/useAuth"
import Link from "next/link"

interface UserAvatarProps {
    className?: string
}

export const UserAvatar = (props: UserAvatarProps) => {
    const { user } = useAuth()
    return (
        <Link href="/profile">
            <img
                src={user?.imageUrl ?? '/images/avatar.svg'}
                alt="Avatar"
                className={`w-10 h-10 rounded-full cursor-pointer ${props.className ?? ''}`}
            />
        </Link>
    )
}