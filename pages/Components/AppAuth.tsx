import React from 'react'
import Private from '../Components/Auth/Private'
import Profile from '../Components/Auth/Profile'
const AppAuth = () => {
    return (
        <div>
            <Private isLoggedIn={true} Component={Profile} />
        </div>
    )
}

export default AppAuth