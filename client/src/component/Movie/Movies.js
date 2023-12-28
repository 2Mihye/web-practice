import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const MovieReview = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((response) => {
        const movieData = response.data.data.movies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.rating,
          poster: movie.medium_cover_image,
        }));
        setMovies(movieData);
      })
      .catch((error) => {
        console.log("데이터 없음", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <h1 className="card-title">Movies</h1>
          <Carousel>
            {movies.map((movie) => (
              <Carousel.Item key={movie.id}>
                <MovieCard movie={movie} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default MovieReview;
