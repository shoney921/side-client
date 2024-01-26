import React, { useState } from "react";
// import axios from "axios";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input: string) => {
    return input.length >= 4;
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setIsValidEmail(isEmailValid);
    setIsValidPassword(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      try {
        // const response = await axios.post("/api/login", { email, password });
        // console.log(response.data); // 로그인 성공 시 처리
        navigate("/board");
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    }
  };

  return (
    <div className="login-container">
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValidEmail(true); // 입력이 변경될 때마다 유효성 검증 초기화
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsValidPassword(true); // 입력이 변경될 때마다 유효성 검증 초기화
            }}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {!isValidEmail && (
        <span style={{ color: "red" }}>올바른 이메일 형식이 아닙니다.</span>
      )}
      <br />
      {!isValidPassword && (
        <span style={{ color: "red" }}>
          비밀번호는 4자리 이상이어야 합니다.
        </span>
      )}
    </div>
  );
};

export default LoginForm;
