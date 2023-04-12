import { Button } from '@chakra-ui/react'
import React from 'react'
const Message = ({header, content, name, email, date, _id, deleteHandler}) => {
  return (
    <>
        <Button onClick={()=>deleteHandler(_id)}>Delete Message</Button>
        <div className="messages">
            <h1>Header: {header}</h1>
            <p>from: {name} on {date}</p>
            <p>{content}</p>
            <p>{email}</p>
        </div>
    </>
  )
}

export default Message