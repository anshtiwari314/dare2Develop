import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav"
import Login from "./Login";
import Signup from './Signup';

function App() {
    // Initialize Firebase 
  return (<div className ="app">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;
