import { Box, Button, Container, FormControl, FormLabel, Textarea, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CreateComment = ({post_id, commentChange, setCommentChange}) => {
    const [user, setUser] = useState({});
    const [content, setContent] = useState("");
    const toast = useToast();
    
    useEffect(()=>{
        const userObj = JSON.parse(localStorage.getItem("userInfo"));
        if (userObj) setUser(userObj);
    },[])

    const createComment = async(post_id, content)=>{
        if (!post_id || !content){
          toast({
            title: "Please fill in al the Fields",
            status: "warning",
            duration: 4500,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        try{
            const config = {
                headers:{
                    "Content-type": "application/json",
                    Authorization:`Bearer ${user.token}`,
                }
            };
            await axios.post(
                "api/comments",
                {post_id, content},
                config
                );
            toast({
                title: "Comment Created Below",
                status: "success",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            setCommentChange(!commentChange)
        }catch(error){
            toast({
                title: "An error occurred!",
                description: error.response.data.message,
                status: "warning",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            console.error(error)
        }
    }
  return (
    <>
        {user &&
        <Container
            maxW='xl'
            colorScheme='grey'
            width = "500px"
            centerContent
            marginTop="20px">
            <p>Leave a comment!</p>
            <Box
                padding= {4}
                width = "100%"
                background = "white"
                margin= "10px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px">
                    <FormControl>
                        <FormLabel>Leave your comment here*</FormLabel>
                            <Textarea
                            onChange={(e)=>setContent(e.target.value)}
                            ></Textarea>
                    </FormControl>
                    <Button
                        colorScheme="blue"
                        width="100%"
                        style = {{marginTop:15}}
                        onClick = {()=>createComment(post_id, content)}
                        >Submit Comment
                    </Button>
            </Box>
        </Container>}
        {!user &&
        <p>you have to login or sign up to leave a comment</p>
        }
    </>
  )
}

export default CreateComment