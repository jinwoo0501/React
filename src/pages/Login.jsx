import { useState, useEffect } from "react";
import "../styles/Auth.css"; 

function Login() {
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
      <h2>로그인</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          이메일
          <input type="email" required placeholder="이메일을 입력하세요" />
        </label>
        <label>
          비밀번호
          <input type="password" required placeholder="비밀번호를 입력하세요" />
        </label>
        <button type="submit">로그인</button>
      </form>

      {}
      {submitted && (
        <div className="auth-message success">✅ 로그인되었습니다!</div>
      )}
    </div>
  );
}

export default Login;
