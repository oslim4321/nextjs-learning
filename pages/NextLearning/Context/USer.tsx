import React from 'react'
import { GlobalUserContext } from './UserContext';


const USer = () => {
    const { User, setUser } = GlobalUserContext()
    const handleLogin = () => {
        setUser({
            name: 'olsim',
            email: 'adewale@gmail.com'
        })
    };
    const handleLogout = () => {
        setUser(null)
    }
    const button = {
        padding: '10px 20px'
    }
    return (
        <div>
            <button style={button} onClick={handleLogin}>Login</button>
            <button style={button} onClick={handleLogout}>Logout</button>
            <h4>User name is {User?.name}</h4>
            <h4>User email is {User?.email}</h4>
        </div>
    )
}

export default USer