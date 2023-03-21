import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const {data} = await axios.get('/api/chat');
    setChats(data)
  };
  // runs function on component mount
  useEffect(()=>{
    fetchChats()
  },[])

  return (
    <div>
      {chats.map((chat)=> (
        <div key = {chat._id}>{chat.chatName}</div>
        ))}
    </div>
  )
}

export default ChatPage