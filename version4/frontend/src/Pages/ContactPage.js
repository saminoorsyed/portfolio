// import dependencies
import React, {useEffect, useState} from 'react';
// import elements from chakra ui
import { VStack, FormControl, FormLabel, Input, InputGroup, Container, Button, Box, Textarea, Heading } from '@chakra-ui/react'

const ContactPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        if (user){ setIsLoggedIn(true)}
        else{setIsLoggedIn(false)}
    },[])


    // const handleClick = () => {
    // const submitHandler =() => {

    // }
    // };
  return (
    <>
    {isLoggedIn &&
        <Container
            maxW='xl'
            colorScheme='grey'
            width = "500px"
            centerContent
            marginTop="20px">
            <p> Send a message to Sami </p>
            <p> (checked weekly)</p>
            <Box
                padding= {4}
                width = "100%"
                background = "white"
                margin= "10px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px">
                <VStack spacing= '5px' color="black">
                    <FormControl>
                        <FormLabel>Header*</FormLabel>
                        <Input>
                        </Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Message*</FormLabel>
                            <Textarea>
                            </Textarea>

                    </FormControl>
                    <Button
                        colorScheme="blue"
                        width="100%"
                        style = {{marginTop:15}}
                        >Send Message
                    </Button>
                </VStack>
            </Box>
        </Container>}
        {!isLoggedIn &&
        <section>
            <h2> To send a message to Sami, you must register or log in first. Please navigate to the login/Signup tab above first.</h2>
        </section>}
    </>
  )
}

export default ContactPage