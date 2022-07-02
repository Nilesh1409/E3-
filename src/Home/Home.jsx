import React from "react";
import "./home.css"
import {Link} from "react-router-dom"

let Home = () =>{
    let [data,setData] = React.useState("")

    React.useEffect(()=>{
        fetch(`http://localhost:8080/movies`)
        .then((res) => res.json())
    .then((res) => setData(res))
    },[])
    // console.log("setDAta",data)
    // "id": 10,
    //     "title": "Jurassic World Dominion",
    //     "original_language": "en",
    //     "original_title": "Jurassic World Dominion",
    //     "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    //     "popularity": 1920.879,
    //     "poster_path": "https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    //     "release_date": "2022-06-01",
    //     "vote_average": 6.659,
    //     "vote_count": 881

    return <div className="container">
    {
        data ? data.map((movie) =>{
            return <div className="box-div" key={movie.id}>
                <img src={movie.poster_path} alt="" />
                <p>{movie.title}</p>
                <Link to={`/movie/${movie.id}`} > <p>More Details</p></Link>
            </div>
        }) : <div></div>
    }
    
    </div>
}
export default Home;