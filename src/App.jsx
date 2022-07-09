import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
// import Error404 from "./Error404";
import Contactus from "./Contactus";
import Bio from "./Bio";
import ImageSearch from "./ImageSearch";

const App = () => {
    return <>
        <Navbar />
        <Routes>
            <Route index exact element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contactus" element={<Contactus />}></Route>
            <Route exact path="/bio/:fname/:lname" element={<Bio />}></Route>
            <Route path="/imageSearch" element={<ImageSearch />}></Route>
            {/* <Route path="/*" element={<Error404 />}></Route> */}
            <Route path= "/*" element={<Navigate to="/" />}></Route>
        </Routes>
    </>;
}


export default App;