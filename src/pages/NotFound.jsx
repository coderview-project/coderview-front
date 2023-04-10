import { useRouteError, Link } from "react-router-dom";



const NotFound = () => {
    const error = useRouteError();

  
    return (
      <div className="col-auto">
            <h1>404</h1>
        <span role="img" aria-label="sad face" style={{fontSize: "30px"}}>😔</span>
        <p>{error.statusText || error.message}</p>
        
        <Link to="/">Please click here to return to the home page</Link>
        <br></br>
      </div>
    );
  };
  
  export default NotFound;
