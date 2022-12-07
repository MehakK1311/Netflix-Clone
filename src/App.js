import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return <div className="App">
    <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetfilxOriginals} />
    <Row title="Trending Now" fetchURL={requests.fetchTrendingNow} />
  </div>;
  

}

export default App;