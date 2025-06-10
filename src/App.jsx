import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Reservation from "./pages/Reservation";
import Navbar from "./components/Navbar";  
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReservationCheck from "./pages/ReservationCheck";  

function App() {
  return (
    <Router>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation-check" element={<ReservationCheck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />     
      </Routes>
    </Router>
  );
}

export default App;


