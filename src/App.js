import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [baseUrl] = useState("http://localhost:8000/");
  const [currentUser, setCurrentUser] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home baseUrl={baseUrl} currentUser={currentUser} search={search} />
          }
        />
        <Route
          path="/post"
          element={
            localStorage.getItem("currentUser") ? (
              <CreatePost baseUrl={baseUrl} currentUser={currentUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            localStorage.getItem("currentUser") ? (
              <Profile currentUser={currentUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            localStorage.getItem("currentUser") ? (
              <Navigate to="/" />
            ) : (
              <Login
                setCurrentUser={setCurrentUser}
                baseUrl={baseUrl}
                currentUser={currentUser}
              />
            )
          }
        />
        <Route
          path="/signup"
          element={
            localStorage.getItem("currentUser") ? (
              <Navigate to="/" />
            ) : (
              <Signup
                setCurrentUser={setCurrentUser}
                baseUrl={baseUrl}
                currentUser={currentUser}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
