// import components
import React from "react";
// import elements from chakra UI
import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
// import components
import SignUp from "../components/authentication/SignUp";
import Login from "../components/authentication/Login";

const RegisterPage = () => {
  return (
    <Container width="600px" centerContent>
      <p style={{ marginTop: "40px" }}>
        {" "}
        Sign up or log in to comment on posts or to send a message to Sami from
        the contact page
      </p>

      <Box
        padding={4}
        width="100%"
        background="white"
        margin="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="gray">
          <TabList marginBottom="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default RegisterPage;
