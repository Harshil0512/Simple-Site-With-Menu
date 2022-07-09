import { NavLink, useLocation } from "react-router-dom";

const Error404 = ()=>{
    const location =useLocation();
    return <div className="errorPage">
            <h1>404!</h1>
            <h1>Opps ! Page Not Found</h1>
            <p>Path : {location.pathname}</p>
            <NavLink className="btn btn-dark" to="/">Go Back</NavLink>
        </div>;
}

export default Error404;