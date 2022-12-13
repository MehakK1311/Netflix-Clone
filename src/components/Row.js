import React, { useState, useEffect } from "react";
import instance from "../axios";
import "../style/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // fetch data from api
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

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
            onClick={() => handleClick(movie)}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          ></img>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
