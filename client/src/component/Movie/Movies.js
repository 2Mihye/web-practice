import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

// 직접 만든 화살표 아이콘 컴포넌트
const CustomPrevIcon = () => (
  <span style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
    &lt;
  </span>
);
const CustomNextIcon = () => (
  <span style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
    &gt;
  </span>
);

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
          <style>
            {`
              .carousel-indicators {
                bottom: -40px; /* 하단 바 위치 조정 */
              }
              .carousel-indicators [data-bs-target] {
              background-color: violet;
            }
            `}
          </style>
          <Carousel prevIcon={<CustomPrevIcon />} nextIcon={<CustomNextIcon />}>
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
