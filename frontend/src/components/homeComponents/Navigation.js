import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setIsLoggedIn(true);
      if (user.author) {
        setIsAuthor(true);
      }
    }
  }, [navigate]);

  const logoutHandler = () => {
    const confirmLogout = window.confirm("are you sure you want to logout");
    if (confirmLogout) {
      localStorage.removeItem("userInfo");
      setIsLoggedIn(false);
      setIsAuthor(false);
      navigate("/");
    }
  };
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="../projects"> Projects </Link>
      <Link to="../blog"> Blog </Link>
      {isAuthor && <Link to="../Messages"> Messages </Link>}
      {!isAuthor && <Link to="../contact"> Contact </Link>}
      {isAuthor && <Link to="../createPost"> Create a Post</Link>}
      {isAuthor && <Link to="../createProject"> Create a Project</Link>}
      {!isLoggedIn && <Link to="../register"> Login/Signup </Link>}
      {isLoggedIn && (
        <Button onClick={logoutHandler} colorScheme="green">
          logout
        </Button>
      )}
    </nav>
  );
}

export default Navigation;
