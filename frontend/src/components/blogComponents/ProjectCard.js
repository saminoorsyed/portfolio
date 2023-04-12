import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Card, CardHeader, CardBody, Heading, Stack, Box, Text, Button, useToast} from '@chakra-ui/react';
import UpdateProject from './UpdateProject';

const ProjectCard = ({project, isAuthor, setUpdated, updated}) => { 
  const [updateClicked, setUpdateClicked] = useState(false);
  const [user, setUser]                   = useState({});
  const toast = useToast();
    
  useEffect(()=>{
    async function loadUser() {
      const userObj = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userObj);
    // set the user to the user object stored in the browser
      }
    loadUser();
    }, []);

    const deleteHandler = async()=>{
        if (!project._id){
            toast({
                title: "This Project is missing an id",
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
              "Content-type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
            data: {
              _id: project._id,
            },
          };
          await axios.delete(`/api/projects`, config)
          setUpdated(!updated)
          toast({
                title: `${project.title} was deleted`,
                status: "success",
                duration: 4500,
                isClosable: true,
                position: "bottom",
                });
        } catch (error) {
          
        }
      }
    return (
      
      <Card className="card">
          {isAuthor && <Button onClick={deleteHandler}>Delete</Button>}
          {isAuthor && <Button onClick={()=>setUpdateClicked(!updateClicked)}>Update</Button>}
          {updateClicked && <UpdateProject project={project} updated={updated} setUpdated={setUpdated}/>}
          {!updateClicked &&
          <>
            <CardHeader>
              <Heading style={{ height: "3rem" }}>{project.title}</Heading>
            </CardHeader>
            <CardBody>
              <div className="youtube">
                <YouTube
                  videoId={project.videoId}
                  opts={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                />
              </div>
              <Stack>
                <Text className="card-text">{project.description}</Text>
                <Box>
                  <div className="tech">
                    <a href={project.github}>
                      <FontAwesomeIcon icon={faGithub} />
                      <p>Github</p>
                    </a>
                  </div>
                </Box>
              </Stack>
            </CardBody>
          </>}
      </Card>
    );
}

export default ProjectCard