import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Message from '../components/blogComponents/Message';
import { Container, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const MessagesPage = () => {
    const [messages, setMessages]   =useState([]);
    const [loading, setLoading]     =useState(true);
    const [query, setQuery]         =useState("");
    const [delMessId, setDelMessId] =useState(null);

    function filterItems(items, query){
        return items.filter(items => items.email.includes(query))
    }

    function handleChange(e){
        setQuery(e.target.value)
    }

    const results = filterItems(messages, query);
    
    const deleteHandler = async(id)=>{
        const userObj = JSON.parse(localStorage.getItem("userInfo"));
        if (userObj && userObj.author){
          const config = {
            headers:{
              "Content-type": "application/json",
              Authorization: `Bearer ${userObj.token}`
            },
            data: {
              '_id':id
            }
          }
          const response = await axios.delete(`/api/messages`, config);
          alert(response.data)
          setDelMessId(id)
        }
     }

    useEffect(()=>{
        async function getMessages(){
            const userObj = JSON.parse(localStorage.getItem("userInfo"));
            if (userObj && userObj.author){
                const config = {
                    headers:{
                        "Content-type": "application/json",
                        Authorization: `Bearer ${userObj.token}`,
                    },
                }
                const response = await axios.get(`/api/messages`, config);
                setMessages(response.data);
                setLoading(false);
                }
        }
        getMessages();
    },[delMessId])
    
  return (
    <section style={{gap:"0px"}}>
            <h1 style={{fontSize: "2.5rem"}}>
                The Blog
            </h1>
            <Container width="600px" centerContent>
                <Box
                padding= {1}
                width = "100%"
                margin= "40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="black">
                    <FormControl>
                        <FormLabel>Search articles by email (case sensitive):</FormLabel>
                        <Input  id="filter_query" 
                                type="text"
                                placeholder='start typing here'
                                focusBorderColor='pink.400'
                                value={query} 
                                onChange={handleChange} 
                                borderWidth = "1px"
                                borderColor="black"
                                size="sm"></Input>
                    </FormControl>
                </Box>
            </Container>
            <article className='blog'>
                {loading && <Button isLoading = {loading}>Loading messages now...</Button>}
                {!loading && results.map((message, i)=>{
                              return(
                              <Message
                                header={message.header}
                                content={message.content}
                                name={message.name}
                                email={message.email}
                                date={message.createdAt}
                                _id={message._id}
                                key={i}
                                deleteHandler = {deleteHandler}/>
                              )
                            })}
            </article>
    </section>
  )
}

export default MessagesPage