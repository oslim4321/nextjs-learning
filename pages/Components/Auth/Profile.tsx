import React from 'react'

export type profileProp = {
  name: string
}
const Profile = ({ name }: profileProp) => {
  return (
    <div>Private Profile Component. Name is {name}</div>
  )
}

export default Profile