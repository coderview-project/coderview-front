import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminView from "./AdminView";
import LoggedNavb from "../components/LoggedNavb";
import UserView from "./UserView";
import { userHandler } from "../handler/userHandler";


function LoggedViewTest() {
    const isLogged = JSON.parse(localStorage.getItem('userData'));
    const userRol = isLogged.item2;
    const userId = isLogged.item3;
    console.log(userRol)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    const [user, setUser] = useState([]);
    
    useEffect(() => {
        async function fetchUser() {
          const userData = await userHandler.loadUser(userId);
          console.log(userData)
          setUser(userData);
        }
        fetchUser();
      }, []);
   
    return (
        <>
            <button className="w-24 p-3 bg-orange" onClick={handleLogout}> LOG OUT </button>
                {isLogged  && userRol === 3 ? 
                  <> <LoggedNavb/> <UserView/> </> 
                : isLogged && userRol === 2 ?  <AdminView user={user}/> 
                : isLogged && userRol === 1? <h1> Vista administrador </h1> 
                : <h1> Por favor, inicie sesión </h1>
                }
            
        </>
    )
}

export default LoggedViewTest; 