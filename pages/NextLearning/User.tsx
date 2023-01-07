import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [User, setUser] = useState<AuthUser | null>()
    const handleLogin = () => {
        setUser({
            name: 'Oslim',
            email: 'adewaleselim6@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>User Name is {User?.name}</div>
            <div>User Email is {User?.email}</div>
        </div>
    )
}
