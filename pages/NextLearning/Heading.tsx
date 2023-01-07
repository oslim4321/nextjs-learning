import React from 'react'

interface prop {
  children: string
}

const Heading: React.FC<prop> = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default Heading