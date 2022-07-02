import React from "react";
import {useParams} from "react-router-dom"

let MovieDetails = () =>{
    
    let [data,setData] = React.useState([])
    let {id} = useParams() 

    React.useEffect(()=>{
        fetch(`http://localhost:8080/movies/${id}`)
        .then((res) => res.json())
    .then((res) => setData(res))
    },[])
    console.log(data)
    return  <>
    <p>{data}</p>
    </>
     
     
    

}
export default MovieDetails;
