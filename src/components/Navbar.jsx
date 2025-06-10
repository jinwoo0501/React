import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">🎬 Movie Cinema</Link>
      </div>
      <div className="nav-links">
        <Link to="/reservation-check">예매 확인</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </nav>
  );
}

export default Navbar;
