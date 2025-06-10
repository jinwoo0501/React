import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import "./MovieList.css"; 

function MovieList() {
  return (
    <div className="container">
      <h2>전체 영화 목록</h2>
      <div className="card-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="reservation-button-wrapper">
        <Link to="/reservation">
          <button className="reservation-button">예매하기</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieList;
