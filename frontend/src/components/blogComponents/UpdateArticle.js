import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, useToast } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UpdateArticle = ({oldTitle, oldContent, oldGenre, oldPic, id, setUpdated}) => {
  // set state variables for post request
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent]   = useState(oldContent);
  const [genre, setGenre]       = useState(oldGenre);
  const [pic, setPic]           = useState(oldPic);
  const [user, setUser]         = useState([])
  const [loading, setLoading]   = useState(false);
  const toast                   = useToast();
  
  useEffect(()=> {
        async function loadUser (){
            const userObj = JSON.parse(localStorage.getItem("userInfo"));
            // avoid async state set for setting author info by using userObj 
            setUser(userObj)
        }
        loadUser();
        setUpdated(false);
    },[])
    
    const postDetails = (pics)=>{
        setLoading(true);
        if (pics === undefined){
            toast({
            title: 'Please choose a profile picture!',
            status: 'warning',
            duration: 4500,
            isClosable: true,
            position: "bottom",
            });
            return;
          }
        if (pics.type === "image/jpeg"|| pics.type === "image/png"){
            const data =  new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-away");
            data.append("cloud_name", "ddl7hegfw");
            fetch("https://api.cloudinary.com/v1_1/ddl7hegfw/image/upload",{
                method:"post",
                body: data,
            }).then((res) => res.json())
              .then((data) =>{
                setPic(data.url.toString());
                setLoading(false);
              }).catch((err)=>{
                console.log(err);
                setLoading(false);
              });
        }else {
            toast({
                title: "Please select a jpeg or png image file!",
                status: "warning",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            setLoading(false);
            return;
        }
    };
    
    const submitHandler= async()=>{
        try {
            const config = {
                headers:{
                    "Content-type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const response = await axios.put(
                "/api/posts",
                {id, title, content, genre, pic},
                config
                );
            
            toast({
                title: "Post Updated",
                status: "success",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });  
            console.log( response)   
            setUpdated(response.data);
        } catch (error) {
            toast({
                title: "An error occurred!",
                description: error.response.data.message,
                status: "warning",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            return;
        }
      }

  return (
    <>
    <h1> Update a Post </h1>
    
    <Container
        maxW='xl'
        colorScheme='grey'
        width = "500px">
        <Box
            padding= {4}
            width = "100%"
            background = "white"
            margin= "0 0 15px 0"
            borderRadius="lg"
            borderWidth="1px">
            <VStack spacing= '5px' color="black">
                <FormControl>
                    <FormLabel>Title*</FormLabel>
                    <Input
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Genre*</FormLabel>
                    <Input
                        value = {genre}
                        onChange={(e)=>setGenre(e.target.value)}
                        ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>HTML Content*</FormLabel>
                        <Textarea
                        value={content}
                        onChange= {(e)=>setContent(e.target.value)}>
                        </Textarea>
                </FormControl>
                <FormControl id='pic'>
                <FormLabel>Upload a post picture</FormLabel>
                <Input
                    type="file"
                    padding={1.5}
                    accept="image/*"
                    onChange={(e)=> postDetails(e.target.files[0])}
                />
                </FormControl>
                <Button
                    colorScheme="blue"
                    width="100%"
                    style = {{marginTop:15}}
                    onClick={submitHandler}
                    isLoading = {loading}>
                        Post Article
                </Button>
            </VStack>
        </Box>
    </Container>
    </>
  )
}

export default UpdateArticle