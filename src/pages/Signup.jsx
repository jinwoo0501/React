import { useState, useEffect } from "react";
import "../styles/Auth.css";

function Signup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="auth-container">
      <h2>회원가입</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          이름
          <input type="text" required placeholder="이름을 입력하세요" />
        </label>
        <label>
          이메일
          <input type="email" required placeholder="이메일을 입력하세요" />
        </label>
        <label>
          비밀번호
          <input type="password" required placeholder="비밀번호를 입력하세요" />
        </label>
        <button type="submit">회원가입</button>
      </form>

      {submitted && (
        <div className="auth-message success">🎉 회원가입되었습니다!</div>
      )}
    </div>
  );
}

export default Signup;
