import axios from "axios";

/**base url to make to the movie to the db */
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});



//https://api.themoviesdb.org/3/foo-bar

export default instance;