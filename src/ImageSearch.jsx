
import axios from "axios";
import { useState } from "react";
import ImgCard from "./ImgCard";

const ImageSearch = () =>{

    const [imgSearch, setImgSearch] = useState("");
    const [imgData,setImgData] = useState([]);
    const [spinner,setSpinner] = useState([false]);
    

    const loadImages = async (e)=>{
        try
        {
            setImgSearch(e.target.value);
            let apiData;
            apiData= await axios.get(`https://api.unsplash.com/search/photos?client_id=JRzfSI-BS6Ppw7CwAX9bDyfY0aqmM-UAN6qaa0sG408&query=${e.target.value}`);
            console.log(apiData.data.results);
            let spinnerData = apiData.data.results.map(()=> {return true});
            setSpinner([...spinnerData]);
            console.log(spinner);
            setImgData(apiData.data.results.length>0?apiData.data.results:[]);
        }
        catch(e){
            console.log("Image Load Failed : "+e);
        }
    };

    return <section className="container my-4">
        <div className="card mx-auto">
            <h1 className="card-header text-center">Image Search</h1>
            <div className="card-body">
                <input type="text" className="form-control w-50 mx-auto my-2" placeholder="Search Image Here" id="imgSearch" value={imgSearch} onChange={loadImages} />
            </div>
        </div>
        <div className="d-flex flex-wrap gap-1 justify-content-center">
            {imgData.map((value,i)=>{ return <ImgCard key={i} id={i}  img={value.urls.small} alt={value.alt_description} setSpinner={setSpinner} spinner={spinner} />})}
        </div>
    </section>;
}

export default ImageSearch; 