// import dependencies
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
// import elements from chakra ui
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';



const SignUp = () => {
    const [show, setShow] =useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword]= useState();
    const [password, setPassword]= useState();
    const [pic, setPic]= useState();
    const [loading, setLoading]= useState(false);
    const [genClicked, setGenClicked] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const genPass = async(event) => {
        event.preventDefault();
        try {
            const {data} = await axios.get("/api/user/getPass");
                const pass = data["data"]["passWd"];    
                setPassword(pass);
                setConfirmPassword(pass);
                setGenClicked(true)
                console.log(password)
            }catch(error){
                console.log(error)
                toast({
                title: 'Could not generate a password',
                status: 'warning',
                duration: 4500,
                isClosable: true,
                position: "bottom",
                });
                return;
            }
    }
    const handleClick = () => setShow(!show);
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
        if(!email || !name || !password|| !confirmPassword){
            toast({
                title: "Please Fill in al the Fields",
                status: "warning",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            setLoading(false);
            return;
        }
        if (password !== confirmPassword){
            toast({
                title: "Passwords do not match",
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
                },
            };
            const {data} = await axios.post(
                "/api/user",
                {name, email, password, pic},
                config
                );
            toast({
                title: "Registration was successful",
                status: "success",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            navigate('/chats');
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
    };
  return (
    <VStack spacing= '5px' color="black">
        <FormControl>
            <FormLabel>Name*</FormLabel>
            <Input
                placeholder='enter your name'
                onChange={(e)=> setName(e.target.value)}></Input>
        </FormControl>
        <FormControl>
            <FormLabel>Email*</FormLabel>
            <Input
                placeholder='enter your email address'
                onChange={(e)=> setEmail(e.target.value)}></Input>
        </FormControl>
        <FormControl>
            <FormLabel>Password*</FormLabel>
            <InputGroup>
                <Input
                    type={show? "text":"password"}
                    placeholder='enter a password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}>

                </Input>
                <InputRightElement width="15rem">
                    <Button height="1.75rem" size = "sm" onClick = {(e)=>genPass(e)}>
                        generate password
                    </Button>
                    <Button height="1.75rem" size = "sm" onClick = {handleClick}>
                        {show ? "Hide": "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl>
            <FormLabel>Confirm Password*</FormLabel>
            <InputGroup>
                <Input
                    type={show? "text":"password"}
                    placeholder='enter a password'
                    value={confirmPassword }
                    onChange={(e)=> setConfirmPassword(e.target.value)}>

                </Input>
                <InputRightElement width="4.5rem">
                    <Button height="1.75rem" size = "sm" onClick = {handleClick}>
                        {show ? "Hide": "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id='pic'>
            <FormLabel>Upload your picture</FormLabel>
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
                SignUp!
            </Button>
    </VStack>
  )
}

export default SignUp