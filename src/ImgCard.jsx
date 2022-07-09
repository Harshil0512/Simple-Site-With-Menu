const ImgCard = ({id,img,alt,spinner,setSpinner})=>{
   
    return <>{spinner[id] && <div className="spinner-border text-primary m-4" style={{width : "16rem", height: "16rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>}
        <div className={`card m-4 ${spinner[id]?"d-none":""}`} style={{width: "18 rem"}}>
            <img src={img} className="card-img-top img-fluid" alt={alt} style={{width: "16rem",height: '18rem'}} onLoad={(e)=>{return setSpinner([...spinner].splice(id,1,spinner[id]))}}/>
        </div>
  </>;
}

export default ImgCard;