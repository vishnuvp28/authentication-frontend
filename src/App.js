import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
// import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginSuccess from "./components/LoginSuccess";
import Profile from "./pages/Profile";
import LoginFailure from "./components/LoginFailure";

const App = () => {
  const [user, setUser] = useState(null);


  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login  setUser={setUser} />}
          />
          <Route
            exact
            path="/login/success"
            element={<LoginSuccess user={user} setUser={setUser} />}
          />
           <Route
            exact
            path="/login/failed"
            element={<LoginFailure user={user} setUser={setUser} />}
          />
          <Route exact path="/profile" component={Profile} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
