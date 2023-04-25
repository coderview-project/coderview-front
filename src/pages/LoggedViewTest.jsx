import { useNavigate } from "react-router-dom";
import AdminView from "./AdminView";

function LoggedViewTest() {
    const isLogged = JSON.parse(localStorage.getItem('userData'));
    const userRol = isLogged.item2;
    console.log(userRol)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    // const userRol = userData.filter((rol) => rol.userItem.userIdRol);

    return (
        <>
            <div className='flex justify-center uppercase'>
                {isLogged  && userRol === 3 ? 
                  <h1> Vista loggeada usuario </h1>
                : isLogged && userRol === 2 ? <h1> Vista loggeada formador </h1>  
                : <h1> Vista administrador </h1> 
                }
            </div>
            <button className="w-24 p-3 bg-orange" onClick={handleLogout}> LOG OUT </button>
        </>
    )
}

export default LoggedViewTest; 