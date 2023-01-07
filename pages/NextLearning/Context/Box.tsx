import React from 'react'
import { GlobalContextPro } from './ThemeContext'

export const Box = () => {
    const { primary, secondary } = GlobalContextPro()
    console.log(primary.main)
    return (
        <>
            <div
                style={{ background: primary.main, color: primary.text }}
            >
                Theme Primary Context Box
            </div>

            <div style={{ background: secondary.main, color: primary.text }}>
                Theme Secondary Context Box
            </div>
        </>
    )
}
