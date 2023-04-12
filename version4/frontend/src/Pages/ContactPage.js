// import dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Components from from chakra ui
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Box,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const ContactPage = () => {
  // define state variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  // set hooks
  const toast = useToast();

  // define functions
  const submitHandler = async () => {
    if (!header || !content || !name || !email) {
      toast({
        title: "Please fill out everything in the form!",
        status: "warning",
        duration: 4500,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.post("/api/messages", { header, content, name, email }, config);
    toast({
      title: "your message has been sent!",
      status: "success",
      duration: 4500,
      isClosable: true,
      position: "bottom",
    });
    return;
  };

  // load user info from browser upon mount so that messages have user attached
  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userObj);
    if (userObj) {
      setIsLoggedIn(true);
      setUser(userObj);
      setName(userObj.name);
      setEmail(userObj.email);
    }
  }, []);

  return (
    <section>
      <div className="contact">
        <a
          className="contact"
          href="https://www.linkedin.com/in/sami-noor-syed/"
        >
          <em>
            <u>linkedIn</u>
          </em>
        </a>
        <a className="contact" href="https://github.com/saminoorsyed">
          <em>
            <u>GitHub</u>
          </em>
        </a>
        <a className="contact" href="https://twitter.com/saminoorsyed">
          <em>
            <u>twitter</u>
          </em>
        </a>
        <p>email: samisyed.dev@gmail.com</p>
      </div>
      {isLoggedIn && (
        <Container
          maxW="xl"
          colorScheme="grey"
          width="500px"
          centerContent
          marginTop="20px"
        >
          <p> Send a message to Sami</p>
          <p> (checked weekly)</p>
          <Box
            padding={4}
            width="100%"
            background="white"
            margin="10px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
          >
            <VStack spacing="5px" color="black">
              <FormControl>
                <FormLabel>Header*</FormLabel>
                <Input onChange={(e) => setHeader(e.target.value)}></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Message*</FormLabel>
                <Textarea
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="if you're signed in as a guest please include your contact info so that I know who you are"
                ></Textarea>
              </FormControl>
              <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Container>
      )}
      {!isLoggedIn && (
        <p>
          {" "}
          Feel free to contact me via my social media or email address above, or
          if you'd like to contact me through this site, login or sign up to
          unlock user privileges.
        </p>
      )}
    </section>
  );
};

export default ContactPage;
