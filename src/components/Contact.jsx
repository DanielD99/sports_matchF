import React from 'react'

const Contact = ({name, address, email}) => {
  return (
    <div>
        <h1>Contact us!</h1>
        <h3>{name}</h3>
        <p>{address.street}</p>
        <p>{address.town}</p>
        <p>{address.country}</p>
        <p>{email}</p>
    </div>
  )
}

export default Contact
