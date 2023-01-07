import React from 'react'

type styleP = {
    styles: React.CSSProperties
}

const stylings: React.CSSProperties = {
    color: 'orange',
    backgroundColor: 'purple'
}
export const Styling = () => {
    return (
        <div>
            <h1 style={stylings}>I will style This</h1>
        </div>
    )
}
