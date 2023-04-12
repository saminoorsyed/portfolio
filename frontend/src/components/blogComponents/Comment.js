import { Container, Box, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Comment = ({ content, username, date, user_id, comment_id, deleteComment }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  
  useEffect(() => {
    const loadUser = ()=>{
      const userObj = JSON.parse(localStorage.getItem("userInfo"));
      if (userObj && (userObj._id === user_id || userObj.author)) {
        setIsAuthor(true);
      }
    }
    loadUser();
  }, []);

  return (
    <Container className="comment" padding="10px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="10px"
      >
        <p>
          <em>
            {username} on {date.slice(0, 10)}
          </em>
        </p>{" "}
        {isAuthor && <Button onClick={()=>deleteComment(comment_id)} border="1px">Delete</Button>}
      </Box>
      <Box>
        <p>
          <strong>{content}</strong>
        </p>
      </Box>
    </Container>
  );
};

export default Comment;
