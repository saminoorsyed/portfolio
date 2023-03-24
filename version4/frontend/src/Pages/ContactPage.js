// import dependencies
import React, {useEffect, useState} from 'react';
// import elements from chakra ui
import { VStack, FormControl, FormLabel, Input, InputGroup, Container, Button, Box, Textarea } from '@chakra-ui/react'

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
            width = "500px">
            <Box
                padding= {4}
                width = "100%"
                background = "white"
                margin= "40px 0 15px 0"
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
            <h2> to send a message to the owner of this site, you must register or log in. Please navigate to the log in tab above</h2>
        </section>}
    </>
  )
}

export default ContactPage