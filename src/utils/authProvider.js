import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from 'axios';
import { useLocalStorage } from "../useLocalStorage";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user",null);
    const navigate = useNavigate();
  
    // call this function when you want to authenticate the user
    const login = async (data) => {
      

      console.log("zzzzzzzzzzzzzzzzzzzzz");
      axios.post('http://10.20.103.66:2034/security/users/login', {
        
        username: data.username,
        password: data.password

      })
        .then((response) => {
          
          if ( response.status === 200)
          {
            setUser(data);
          console.log(response.data);
        } 
          else{
             alert(response.data) 
            }
        })
        .catch((err) => {
          console.info(data.username)

          console.log(err);
          console.log(err.response);
          alert(err.response.data.error.message);
        });
     //  navigate("/dashboard/app" );
    };
  
    // call this function to sign out logged in user
    const logout = () => {
      setUser(null);
      localStorage.removeItem('user');

       navigate("/", { replace: true });
    };
  
    const value = useMemo(
      () => ({
        user,
        login,
        logout
      }),
      [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    
  };
  export const useAuth = () => {
    return useContext(AuthContext);
  };