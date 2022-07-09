import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Bio = ()=>{
    const location = useLocation();
    const {fname,lname} = useParams();
    return <div className="pageStyle"><h1 className="text-center">Welcome {fname} {lname}</h1>
    {location.pathname === "/bio/harshil/khamar" ? <div className="text-center"><button className="btn btn-primary" onClick={()=>{alert("Welcome Admin");}}>Click Here !</button></div>:""}
    </div>;
    
}

export default Bio;