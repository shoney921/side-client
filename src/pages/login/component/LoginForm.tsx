import React, { useState } from "react";
import axios from "axios";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

  const validateEmail = (input: string) => {
    // 간단한 이메일 형식의 정규표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input: string) => {
    return input.length >= 4;
  };

  const handleLogin = async () => {
    // 간단한 클라이언트 측 유효성 검증
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setIsValidEmail(isEmailValid);
    setIsValidPassword(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      try {
        // API 호출 및 로그인 처리
        const response = await axios.post("/api/login", { email, password });
        console.log(response.data); // 로그인 성공 시 처리
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
          {!isValidEmail && (
            <span style={{ color: "red" }}>올바른 이메일 형식이 아닙니다.</span>
          )}
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
          {!isValidPassword && (
            <span style={{ color: "red" }}>
              비밀번호는 4자리 이상이어야 합니다.
            </span>
          )}
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
