import React, { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import BoardPage from "./pages/Board/BoardPage";
import BoardContainer from "./pages/Board/BoardContainer";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/board" element={<BoardPage />}></Route>
        <Route path="/boards/:id" element={<BoardContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
