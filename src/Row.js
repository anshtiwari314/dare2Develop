import React, { useState, useEffect } from 'react';
import instance from './axios';
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from "movie-trailer";
/*title destructuring inside component*/
const base_url="https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(() => {
        //if [], run once when the row loads and dont run again
        async function fetchData() {
            //console.log("helo", fetchUrl)
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
           // console.warn("request",request);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    //console.log("movies",movies);
    const opts={
        height:"390px",
        width:"100%",
        playerVars:{
            //https://developers.google.com
            autoplay:1,
        },
    };
    const handleClick=(movie)=>{
        console.log("movie", movie);
        if (trailerUrl){
            setTrailerUrl("");
        } else{
            movieTrailer(movie?.name ||movie?.title|| "")
            .then((url)=>{
                console.log("url",url)
        //https://www.youtube.com/watch?v=XtMThy80Kql
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
        //console.log("urlparam=>",urlParams.get("v"));
        })
.catch((error)=>console.log("lala",error))
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
               
                {movies.map((movie) => (
                    <img 
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path }`} 
                    alt={movie.name} />
                ))}
            </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;
