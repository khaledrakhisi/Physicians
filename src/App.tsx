import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import { TodayPage } from "./pages/TodayPage";

import "./scss/App.scss";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<TodayPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
