import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
