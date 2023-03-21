import { Button } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  useEffect(()=> {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        if (user){ setIsLoggedIn(true)}
        else{setIsLoggedIn(false)}
    },[navigate])
    
    const logoutHandler = () => {
        const confirmLogout = window.confirm( "are you sure you want to logout")
        console.log(confirmLogout)
        if (confirmLogout){
          localStorage.removeItem("userInfo");
          setIsLoggedIn(false)
          navigate("/");
        }
        
    }
  return (
    <nav>
        <Link to="/"> Home </Link>
        <Link to="../blog"> Blog </Link>
        <Link to= "../projects"> Projects </Link>
        <Link to= "../contact"> Contact </Link>
        {!isLoggedIn && <Link to= "../register"> Login/Signup</Link>}
        {isLoggedIn && <Button onClick={logoutHandler} colorScheme="green">logout</Button>}
    </nav>
  );
}

export default Navigation;
