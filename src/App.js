import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";

const App = () => {
  const [baseUrl] = useState("http://localhost:8000/");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home baseUrl={baseUrl} />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
