import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const nav = {
        width: '100%',
        height: '70px',
        backgroundColor: '#ccc',
        margin: 0,
        padding: 0,
        zIndex: 2
    }
    return (
        <div>
            <nav style={nav}>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/Todo/Task'><li>Todo</li></Link>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar