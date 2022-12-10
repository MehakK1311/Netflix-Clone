import React, { useState, useEffect } from "react";
import instance from "../axios";
import "../style/Row.css";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // fetch data from api
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      {/* heading */}
      <h2>{title}</h2>

      <div className="row_posters">
        {/* poster image */}
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
