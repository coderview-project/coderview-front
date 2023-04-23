import { useNavigate } from "react-router-dom";

function LoggedViewTest() {
    const isLogged = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate(); 
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    return(
        <>
        <div className='flex justify-center uppercase'> 
            {isLogged ? <h1> Vista loggeada </h1> : <h1> No estoy loggeado </h1>}
        </div>
        <button className="w-24 p-3 bg-orange" onClick={handleLogout}> LOG OUT </button> 
        </>
    ) 
}

export default LoggedViewTest; 