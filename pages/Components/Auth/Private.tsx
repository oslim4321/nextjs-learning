import React from 'react'
import Login from './Login'
import { profileProp } from './Profile'

type privateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<profileProp>
}

const Private = ({ isLoggedIn, Component }: privateProps) => {
    if (isLoggedIn) {
        return <Component name='selim' />
    } else {
        return <Login />
    }
}

export default Private