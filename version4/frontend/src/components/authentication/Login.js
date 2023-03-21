// import dependencies
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
// import elements from chakra ui
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';

const Login = () => {
    const [show, setShow] =useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [loading, setLoading]= useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleClick = () => setShow(!show);
    const submitHandler= async()=>{
        setLoading(true);
        if(!email || !password){
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
        try {
            const config = {
                headers:{
                    "Content-type": "application/json",
                },
            };
            const {data} = await axios.post(
                "/api/user/login",
                {email, password},
                config
                );
            toast({
                title: "Login was successful",
                status: "success",
                duration: 4500,
                isClosable: true,
                position:"bottom",
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
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
    };
  return (
    <VStack spacing= '5px' color="black">
        <FormControl>
            <FormLabel>Email*</FormLabel>
            <Input
                value={email}
                placeholder='enter your email address'
                onChange={(e)=> setEmail(e.target.value)}></Input>
        </FormControl>
        <FormControl>
            <FormLabel>Password*</FormLabel>
            <InputGroup>
                <Input
                    value={password}
                    type={show? "text":"password"}
                    placeholder='enter a password'
                    onChange={(e)=> setPassword(e.target.value)}>

                </Input>
                <InputRightElement width="4.5rem">
                    <Button height="1.75rem" size = "sm" onClick = {handleClick}>
                        {show ? "Hide": "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button
            colorScheme="blue"
            width="100%"
            style = {{marginTop:15}}
            onClick={submitHandler}
            isLoading = {loading}
            >Login
        </Button>
        <Button
            variant="solid"
            colorScheme="red"
            width="100%"
            style = {{marginTop:15}}
            onClick={()=>{
                setEmail("guest@example.com");
                setPassword("123456");
            }}

            >Login as a guest
        </Button>
    </VStack>
  )
}

export default Login