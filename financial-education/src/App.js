import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quizz from "./pages/quizz";

const pages = {
  quizz: "/",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pages.quizz} element={<Quizz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
