export default interface User {
    uid: string
    name: string
    email: string
    token?: string
    providerId?: string
    imageUrl?: string
}