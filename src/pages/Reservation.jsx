import { useState, useEffect } from "react";
import { movies } from "../data/movies";
import "./Reservation.css";

function Reservation() {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [theater, setTheater] = useState("CGV 강남");
  const [countAdult, setCountAdult] = useState(0);
  const [countTeen, setCountTeen] = useState(0);
  const [countVeteran, setCountVeteran] = useState(0);
  const [reservationComplete, setReservationComplete] = useState(false);
  const [recentPeople, setRecentPeople] = useState(0);

  const selectedMovie = movies.find((m) => m.id === selectedMovieId);
  const total = countAdult * 10000 + countTeen * 8000 + countVeteran * 5000;

  useEffect(() => {
    if (reservationComplete) {
      const timer = setTimeout(() => {
        setReservationComplete(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [reservationComplete]);

  const handleReservation = () => {
    if (!selectedMovie || total === 0) {
      alert("영화와 인원을 선택해주세요.");
      return;
    }

    const peopleCount = countAdult + countTeen + countVeteran;
    setRecentPeople(peopleCount);

    const now = new Date();
    const time = now.toTimeString().slice(0, 5); // "HH:MM" 형식

    const newReservation = {
      id: Date.now(),
      movie: selectedMovie.title,
      theater,
      date: now.toISOString().slice(0, 10), // YYYY-MM-DD
      time: time,
      people: {
        adult: countAdult,
        teen: countTeen,
        veteran: countVeteran,
      },
    };

    const prev = JSON.parse(localStorage.getItem("reservations")) || [];
    localStorage.setItem("reservations", JSON.stringify([...prev, newReservation]));

    setReservationComplete(true);
    setCountAdult(0);
    setCountTeen(0);
    setCountVeteran(0);
    setSelectedMovieId(null);
  };

  return (
    <div className="container">
      <h2>🎟 영화 예매</h2>

      <section className="section">
        <h3>1️⃣ 영화를 선택하세요</h3>
        <div className="reservation-movie-grid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={`reservation-movie-card ${selectedMovieId === movie.id ? "selected" : ""}`}
              onClick={() => setSelectedMovieId(movie.id)}
            >
              <img src={movie.poster} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>2️⃣ 영화관을 선택하세요</h3>
        <select value={theater} onChange={(e) => setTheater(e.target.value)}>
          <option>CGV 강남</option>
          <option>CGV 여의도</option>
          <option>롯데시네마 홍대</option>
          <option>롯데시네마 부평</option>
          <option>메가박스 코엑스</option>
          <option>메가박스 목동</option>
        </select>
      </section>

      <section className="section count-box">
        <h3>3️⃣ 인원을 선택하세요</h3>
        <div className="ticket-type">
          성인 (₩10,000)
          <button onClick={() => setCountAdult(countAdult - 1)} disabled={countAdult === 0}>-</button>
          <span>{countAdult}</span>
          <button onClick={() => setCountAdult(countAdult + 1)}>+</button>
        </div>
        <div className="ticket-type">
          청소년 (₩8,000)
          <button onClick={() => setCountTeen(countTeen - 1)} disabled={countTeen === 0}>-</button>
          <span>{countTeen}</span>
          <button onClick={() => setCountTeen(countTeen + 1)}>+</button>
        </div>
        <div className="ticket-type">
          국가유공자 (₩5,000)
          <button onClick={() => setCountVeteran(countVeteran - 1)} disabled={countVeteran === 0}>-</button>
          <span>{countVeteran}</span>
          <button onClick={() => setCountVeteran(countVeteran + 1)}>+</button>
        </div>
      </section>

      {selectedMovie && (
        <section className="reservation-summary">
          <h3>📋 예매 요약</h3>
          <p><b>🎬 영화:</b> {selectedMovie.title}</p>
          <p><b>🏢 영화관:</b> {theater}</p>
          <p><b>👥 인원:</b> 성인 {countAdult}명 / 청소년 {countTeen}명 / 국가유공자 {countVeteran}명</p>
          <p><b>💰 총 결제 금액:</b> {total.toLocaleString()}원</p>

          <button onClick={handleReservation} className="reservation-submit">예매하기</button>
        </section>
      )}

      {reservationComplete && (
        <div className="reservation-complete">
          ✅ 예매가 완료되었습니다! 총 {recentPeople}명 예매
        </div>
      )}
    </div>
  );
}

export default Reservation;
