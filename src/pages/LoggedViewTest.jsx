import { useNavigate } from "react-router-dom";
import AdminView from "./AdminView";
import LoggedNavb from "../components/LoggedNavb";
import UserView from "./UserView";

function LoggedViewTest() {
    const isLogged = JSON.parse(localStorage.getItem('userData'));
    const userRol = isLogged.item2;
    console.log(userRol)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <button className="w-24 p-3 bg-orange" onClick={handleLogout}> LOG OUT </button>
                {isLogged  && userRol === 3 ? 
                  <> <LoggedNavb/> <UserView/> </> 
                : isLogged && userRol === 2 ? <> <LoggedNavb/> <AdminView/> </>
                : isLogged && userRol === 1? <h1> Vista administrador </h1> 
                : <h1> Por favor, inicie sesión </h1>
                }
            
        </>
    )
}

export default LoggedViewTest; 