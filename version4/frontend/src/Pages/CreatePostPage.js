import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, useToast, tokenToCSSVar } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CreatePostPage = () => {
  // set state variables for post request
  const [isAuthor, setIsAuthor] = useState(false);
  const [author, setAuthor]     = useState("");
  const [title, setTitle]       = useState("");
  const [content, setContent]   = useState("");
  const [genre, setGenre]       = useState("");
  const [pic, setPic]           = useState();
  const [loading, setLoading]   = useState(false);
  const [user, setUser]         = useState({})
  const navigate = useNavigate();
  const toast = useToast();
  
  useEffect(()=> {
        setUser(JSON.parse(localStorage.getItem("userInfo")))
        console.log(user)
        if (user.author){
          setIsAuthor(true);
          setAuthor(user._id);
        }
    },[navigate])
    
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
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-away");
            data.append("cloud_name", "ddl7hegfw");
            fetch("https://api.cloudinary.com/v1_1/ddl7hegfw/image/upload",{
                method:"post",
                body: data,
            }).then((res) => res.json())
              .then((data) =>{
                setPic(data.url.toString());
                console.log(data.url.toString());
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
        setLoading(true);
        console.log({author, title, content, genre})
        if(!author || !title || !content || !genre){
            toast({
                title: "Please fill in al the Fields",
                status: "warning",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers:{
                    "Content-type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            };
            console.log("waiting for response")
            await axios.post(
                "/api/posts",
                {title, content, author, genre, pic},
                config
                );
            
            toast({
                title: "Post Created",
                status: "success",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            setLoading(false);
            navigate('/');
        } catch (error) {
            toast({
                title: "An error occurred!",
                description: error.response.data.message,
                status: "warning",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            setLoading(false)
            return;
        }
      }

  return (
    <section>
    <h1> Create a Post </h1>
    {isAuthor &&
        
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
                          placeholder = 'enter a title'
                          onChange={(e)=>setTitle(e.target.value)}
                          ></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Genre*</FormLabel>
                        <Input
                          placeholder = 'enter a genre'
                          onChange={(e)=>setGenre(e.target.value)}
                          ></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Text content*</FormLabel>
                            <Textarea
                            placeholder='enter text content for post here'
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
        </Container>}
    </section>
  )
}

export default CreatePostPage