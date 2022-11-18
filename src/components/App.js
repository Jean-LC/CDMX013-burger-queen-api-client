import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import { Login } from "./Login.js";
import Admin from "./Admin.js";


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
