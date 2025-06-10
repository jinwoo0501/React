import { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"; 

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <div className="like-icon" onClick={() => setLiked(!liked)}>
        {liked ? "❤️" : "🤍"}
      </div>

      <img src={movie.poster} alt={movie.title} />
      <div className="card-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <Link to={`/movie/${movie.id}`}>
          <button className="card-btn">자세히 보기</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
