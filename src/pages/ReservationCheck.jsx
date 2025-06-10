import React, { useEffect, useState } from 'react';
import './Reservation.css';

function ReservationCheck() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("reservations");
    if (stored) {
      setReservations(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = reservations.filter((r) => r.id !== id);
    setReservations(updated);
    localStorage.setItem("reservations", JSON.stringify(updated));
  };

  return (
    <div className="reservation-check-container">
      <h2>📋 예매 확인</h2>
      {reservations.length === 0 ? (
        <p>예매 내역이 없습니다.</p>
      ) : (
        <ul className="reservation-list">
          {reservations.map((rsv) => (
            <li key={rsv.id} className="reservation-item">
              <strong>🎬 영화:</strong> {rsv.movie}<br />
              <strong>🏢 영화관:</strong> {rsv.theater || "정보 없음"}<br />
              <strong>📅 날짜:</strong> {rsv.date}<br />
              <strong>⏰ 시간:</strong> {rsv.time}<br />
              <strong>👥 인원:</strong>{" "}
              성인 {rsv.people?.adult ?? 0}명 / 청소년 {rsv.people?.teen ?? 0}명 / 국가유공자 {rsv.people?.veteran ?? 0}명
              <br />
              <button onClick={() => handleDelete(rsv.id)}>❌ 삭제</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReservationCheck;
