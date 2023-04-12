import React, { useState, useEffect } from 'react'
import { useToast, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';

const UpdateProject = ({project, setUpdated, updated}) => {
    const _id                             = project._id
    const [title, setTitle]               = useState(project.title);
    const [description, setDescription]   = useState(project.description);
    const [genre, setGenre]               = useState(project.genre);
    const [videoId, setVideoId]           = useState(project.videoId);
    const [github, setGithub]             = useState(project.github);
    const [projectLink, setProjectLink]   = useState(project.projectLink);
    const [user, setUser]                 = useState({});
    const toast = useToast();
    
    useEffect(()=>{
        async function loadUser() {
          const userObj = JSON.parse(localStorage.getItem("userInfo"));
          setUser(userObj);
        // set the user to the user object stored in the browser
          }
        loadUser();
        }, []);

    const submitHandler = async()=>{
        if (!_id){
            toast({
                title: "This Project is missing an id",
                status: "warning",
                duration: 4500,
                isClosable: true,
                position: "bottom",
                });
                return;
        }
        try{
           const config = {
                headers: {
                    "description-type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            };
            await axios.put(
                "/api/projects",
                { _id, title, description, genre, videoId, github, projectLink },
                config
                );

            toast({
                title: "Project Updated",
                status: "success",
                duration: 4500,
                isClosable: true,
                position: "bottom",
                });
        setUpdated(!updated);
        }catch(error){
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
    }
  return (
    <VStack spacing="5px" color="black">
              <FormControl>
                <FormLabel>Title*</FormLabel>
                <Input
                  placeholder="enter a title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Genre*</FormLabel>
                <Input
                  placeholder="enter a genre"
                  value = {genre}
                  onChange={(e) => setGenre(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Youtube videoId*</FormLabel>
                <Input
                  placeholder="enter the youtube videoId"
                  value={videoId}
                  onChange={(e) => setVideoId(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Github Link*</FormLabel>
                <Input
                  placeholder="the git hub link"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Project Link*</FormLabel>
                <Input
                  placeholder="enter the project's link"
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel> Text description*</FormLabel>
                <Textarea
                  placeholder="Enter description for your Project here"
                  value={description}
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
  )
}

export default UpdateProject