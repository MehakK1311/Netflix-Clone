import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetfilxOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Comedy Movie" fetchURL={requests.fetchComedyMovie} />
      <Row title="Horror Movie" fetchURL={requests.fetchHorrorMovie} />
      <Row title="Romance Movie" fetchURL={requests.fetchRomanceMovie} />
      <Row
        title="Documentaries Movie"
        fetchURL={requests.fetchDocumentariesMovie}
      />
    </div>
  );
}

export default App;
