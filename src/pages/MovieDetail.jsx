import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div>영화를 찾을 수 없습니다.</div>;

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p><b>감독:</b> {movie.director}</p>
      <p><b>출연:</b> {movie.cast}</p>
      <p><b>장르:</b> {movie.genre}</p>
      <p><b>개봉일:</b> {movie.date}</p>
      <p><b>상영 시간:</b> {movie.duration}</p>
      <p><b>관람 등급:</b> {movie.rating}</p>

      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}

export default MovieDetail;
