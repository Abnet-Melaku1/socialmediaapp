import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Feed from "./pages/Feed/Feed";
import Login from "./pages/Login";

import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
