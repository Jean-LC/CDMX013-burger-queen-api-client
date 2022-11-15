import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import Login from "./components/Login.js";
import Admin from "./components/Admin.js";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
