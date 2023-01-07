import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
       <Link href='/NinjaNextCourse/Home'><li>Home</li></Link>
       <Link href='/NinjaNextCourse/About'><li>About</li></Link>
       <Link href='/NinjaNextCourse/Ninja'> <li>Ninjas</li></Link>
    </div>
  )
}

export default Navbar