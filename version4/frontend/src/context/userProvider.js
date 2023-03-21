import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();


// manages user provider for each page so that it does not have to be passed to each page explicitly
const UserProvider = ({children})=> {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo)
      }, [navigate])
    
    return(
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserState = () => {
    return useContext(UserContext)
}

export default UserProvider;