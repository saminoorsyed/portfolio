// import dependencies
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
// import elements from chakra ui
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';



const SignUp = () => {
    const [show, setShow] =useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [password, setPassword]= useState("");
    const [loading, setLoading]= useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleClick = () => setShow(!show);
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
                {name, email, password},
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
                <InputRightElement width="4.5rem">
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