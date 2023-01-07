
import React from 'react'
import { ThemeContextProvider } from './ThemeContext'
import { Box } from './Box'
import { UserContextProvider } from './UserContext'
import USer from './USer'

const AppContext = () => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <Box />
                <USer />
            </UserContextProvider>
        </ThemeContextProvider>
    )
}

export default AppContext