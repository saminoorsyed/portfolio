import React from 'react';
import YouTube from 'react-youtube';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text} from '@chakra-ui/react';

const ProjectCard = ({project}) => {
    const videoId = project.videoId;
    return (
      <Card className="card">
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
            <Text style={{ height: "150px", overflow: "hidden"}}>{project.description}</Text>
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
      </Card>
    );
}

export default ProjectCard