// import dependencies
import React, { useEffect, useState } from "react";
import DomPurify from "dompurify";
import axios from "axios";
// import components
import { Image, Box, Button } from "@chakra-ui/react";
import UpdateArticle from "./UpdateArticle";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

const Article = ({ title, content, genre, author, pic, date, deleteHandler, setUpdated, updated, _id}) => {
  // define variables
  const [html, setHtml] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);
  const [updateClicked, setUpdateClicked] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [user, setUser] = useState({});
  const [commentChange, setCommentChange] = useState(false);

  // define functions
  const deleteComment = async (comment_id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          _id: comment_id,
        },
      };
      await axios.delete("api/comments", config);
      setCommentChange(!commentChange);
    } catch (error) {
      console.log(error);
    }
  };
  // sanitize html content before rendering
  useEffect(() => {
    function htmlSanitizer() {
      try {
        const sanitizedHtml = DomPurify.sanitize(content);
        setHtml(sanitizedHtml);
        const userObj = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userObj);
        if (userObj && userObj.author) setIsAuthor(true);
      } catch (error) {
        console.error(error);
      }
    }
    htmlSanitizer();
  }, [content]);
  useEffect(() => {
    async function loadComments() {
      try {
        const response = await axios.get(`api/comments?post=${_id}`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    if (showComments) loadComments();
  }, [showComments, commentChange]);

  return (
    <article className="blogArticle">
      {isAuthor && (
        <div>
          <Button onClick={() => deleteHandler(_id)}>Delete Post</Button>
          <Button onClick={() => setUpdateClicked(!updateClicked)}>
            Update Post
          </Button>
        </div>
      )}
      {isAuthor && updateClicked && (
        <UpdateArticle
          oldTitle={title}
          oldContent={content}
          oldGenre={genre}
          oldPic={pic}
          id={_id}
          setUpdated={setUpdated}
          updated={updated}
        />
      )}
      <h1 style={{ fontWeight: "700", fontSize: "2.5rem" }}>{title}</h1>
      <p>
        by {author} on {date.slice(0, 10)}
      </p>
      <Box boxSize="cover">
        <Image src={pic} />
      </Box>
      {/* look into using a headless cms system */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {showComments ? (
        <Button onClick={() => setShowComments(!showComments)}>
          hide comments
        </Button>
      ) : (
        <Button onClick={() => setShowComments(!showComments)}>
          show comments
        </Button>
      )}

      {showComments &&
        (user ? (
          <CreateComment
            post_id={_id}
            setCommentChange={setCommentChange}
            commentChange={commentChange}
          />
        ) : (
          <p>To leave a comment, you must first log in or sign up.</p>
        ))}
      {showComments &&
        comments.length > 0 &&
        comments.map((comment, i) => {
          return (
            <Comment
              key={i}
              deleteComment={deleteComment}
              comment_id={comment._id}
              content={comment.content}
              username={comment.username}
              date={comment.createdAt}
              user_id={comment.user_id}
            />
          );
        })}
    </article>
  );
};

export default Article;
