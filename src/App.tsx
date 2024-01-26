import React, { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import BoardPage from "./pages/Board/BoardPage";
import BoardContainer from "./pages/Board/BoardContainer";

const App = (): ReactElement => {
  const boards = [
    { id: 1, title: "게시물 1", content: "내용 1" },
    { id: 2, title: "게시물 2", content: "내용 2" },
    // 추가적인 게시물 데이터
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/board" element={<BoardPage boards={boards} />}></Route>
        <Route
          path="/boards/:id"
          element={<BoardContainer boards={boards} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
