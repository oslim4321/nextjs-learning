import React, { createContext, useContext, useState } from 'react'
import { theme } from './Theme'

type ThemeContextProps = {
    children: React.ReactNode
}

const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [state, setstate] = useState<string>('initialState')
    return <ThemeContext.Provider
        value={theme}
    >
        {children}
    </ThemeContext.Provider>
}

export const GlobalContextPro = () => {
    return useContext(ThemeContext)
}