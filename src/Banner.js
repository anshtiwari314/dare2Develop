import React,{useEffect,useState} from 'react'
import instance from "./axios";
import requests from "./Requests";
import "./Banner.css";

function Banner() {
    const [movie,setMovie]= useState([]);
    useEffect(()=>{
        // if i put nothing inside useEffect array [] then it loads every time when Banner loads
        
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
request.data.results[
    Math.floor(Math.random()*request.data.results.length - 1)
]
            )
            console.log();
// >> Math.floor(Math.random()*request.data.results.length - 1)
        } 
        fetchData();
    },[]);
    //console.log("moviee",movie);
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"...":str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
        "https://image.tmdb.org/t/p/original/${movie ?.backdrop_path }"
            )`
        }}
        >
            <div className="banner_contents">
                <h1 class="banner_title">
    {movie?.title|| movie?.name||movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        Play
                    </button>
                    <button className="banner_button">
                        My List
                    </button>
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>
                </div>
            </div>
            <div className="banner-fadeBottom"/>
        </header>
    )
}
//inside banner_contents if title is not found go for name if name not loads got for original_name
export default Banner;
