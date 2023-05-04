import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminView from "./AdminView";
import UserView from "./UserView";
import { userHandler } from "../handler/userHandler";
import RegisterInstructor from "./RegisterInstructor";


function LoggedViewTest() {
    const isLogged = JSON.parse(localStorage.getItem('userData'));
   const userRol = isLogged.item2;
   const userId = isLogged.item3;

    const [user, setUser] = useState([]);
 
    
    useEffect(() => {
        async function fetchUser() {
          const userData = await userHandler.loadUser(userId);
          setUser(userData);
        }
        fetchUser();

      }, []);
   
    return (
        <>
                {isLogged  && userRol === 3 ? 
                  <UserView user={user}/>
                : isLogged && userRol === 2 ?  <AdminView user={user}/> 
                : isLogged && userRol === 1? <RegisterInstructor/>  
                : <h1> Por favor, inicie sesión </h1>
                }
        </>
    )
}

export default LoggedViewTest; 