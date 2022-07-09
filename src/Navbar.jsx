import {NavLink} from "react-router-dom";

const Navbar = () => {

    return <ul className="nav nav-justified bg-dark py-3 fs-4">
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive?"nav-link active":"nav-link text-light"} aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive?"nav-link active":"nav-link text-light"} to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive?"nav-link active":"nav-link text-light"} to="/imageSearch">Image Search</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive?"nav-link active":"nav-link text-light"} to="/contactus">Contact US</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive?"nav-link active":"nav-link text-light"} to="/bio/Harshil/Khamar">Bio</NavLink>
      </li>
    </ul>
}

export default Navbar;