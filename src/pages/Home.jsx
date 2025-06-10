import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-hero">
      <div className="hero-text">
        <h1>🎬 Movie Cinema</h1>
        <p>최신 영화 정보부터 예매까지 한 번에!</p>
        <div className="button-group">
          <Link to="/movies">
            <button>영화 보기</button>
          </Link>
          <Link to="/reservation">
            <button>예매 하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
