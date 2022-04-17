import React from "react";
import Axios from "axios";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { configure } from "@testing-library/react";

Axios.defaults.baseURL = "http://localhost:8000";
Axios.defaults.headers.post["Conten-Type"] = "application/json"; //sama dengan postman di header ada Conten-Type dan Accept
Axios.defaults.headers.post["Accept"] = "application/json";

Axios.defaults.withCredentials = true;

Axios.interceptors.request.use(function(config){ //cara agara logout tidak Unauthenticated
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}`:'';
  return config;
})



export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login">
            {localStorage.getItem('auth_token') ? <navigate to='.'/>:<Login />}
          </Route>

          <Route path="/register">
            {localStorage.getItem('auth_token') ? <navigate to='.'/>:<Register />}
          </Route> */}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
