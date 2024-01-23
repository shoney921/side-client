import React, { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BoardListContainer } from "./components/BoardListContainer";
import { LoginPage } from "./pages/login/LoginPage";

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/board" element={<BoardListContainer />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
