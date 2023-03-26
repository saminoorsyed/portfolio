import React from 'react'
// import elements from chakra UI
import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react';
// import components
import SignUp from '../components/authentication/SignUp';
import Login from '../components/authentication/Login';

const RegisterPage = () => {
  return (
      <Container width="600px" centerContent>
        <Box
        padding= {4}
        width = "100%"
        background = "white"
        margin= "40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
          <Tabs variant='soft-rounded' colorScheme="gray">
            <TabList
            marginBottom="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login/>
              </TabPanel>
              <TabPanel>
                <SignUp/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
  )
};

export default RegisterPage;