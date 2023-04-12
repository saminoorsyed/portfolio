import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useToast,
  Container,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const CreateProjectPage = () => {
  // set state variables for post request
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [videoId, setVideoId] = useState();
  const [github, setGithub] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [user, setUser] = useState({});
  const [isAuthor, setIsAuthor] = useState(false);

  // set hooks
  const navigate = useNavigate();
  const toast = useToast();

  const submitHandler = async () => {
    if (!genre || !title || !description || !videoId || !github) {
      toast({
        title: "Please fill in al the Fields",
        status: "warning",
        duration: 4500,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "description-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.post(
        "/api/projects",
        { title, description, genre, videoId, github, projectLink },
        config
      );

      toast({
        title: "Project Created",
        status: "success",
        duration: 4500,
        isClosable: true,
        position: "bottom",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "An error occurred!",
        description: error.response.data.message,
        status: "warning",
        duration: 4500,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };

  useEffect(() => {
    async function loadUser() {
      const userObj = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userObj);
      if (userObj.author) {
        setIsAuthor(true);
      }
    }
    loadUser();
  }, []);

  return (
    <section>
      <h1> Create a Project </h1>
      {isAuthor && (
        <Container maxW="xl" colorScheme="grey" width="500px">
          <Box
            padding={4}
            width="100%"
            background="white"
            margin="0 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
          >
            <VStack spacing="5px" color="black">
              <FormControl>
                <FormLabel>Title*</FormLabel>
                <Input
                  placeholder="enter a title"
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Genre*</FormLabel>
                <Input
                  placeholder="enter a genre"
                  onChange={(e) => setGenre(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Youtube videoId*</FormLabel>
                <Input
                  placeholder="enter the youtube videoId"
                  onChange={(e) => setVideoId(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Github Link*</FormLabel>
                <Input
                  placeholder="the git hub link"
                  onChange={(e) => setGithub(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Project Link*</FormLabel>
                <Input
                  placeholder="enter the project's link"
                  onChange={(e) => setProjectLink(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel> Text description*</FormLabel>
                <Textarea
                  placeholder="Enter description for your Project here"
                  onChange={(e) => setDescription(e.target.value)}
                ></Textarea>
              </FormControl>
              <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
              >
                Post Project
              </Button>
            </VStack>
          </Box>
        </Container>
      )}
    </section>
  );
};

export default CreateProjectPage;
