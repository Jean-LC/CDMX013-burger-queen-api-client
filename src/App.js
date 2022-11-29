import {
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import { Login } from "./components/Views/Login.js";
import Admin from "./components/Views/Admin.js";
import ProductAdmin from "./components/ProductAdmin.js";
import Layout from "./components/Layout.js";
import Missing from "./components/Views/Missing.js";
import RequireAuth from "./components/RequireAuth.js";
import Kitchen from "./components/Views/Kitchen.js"
import Dinner from "./components/Views/Dinner.js"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        {/* protected routes */}
        <Route element={<RequireAuth allowedRole={'admin'}/>}>
            {/* <Route path="admin" element={<HeaderGeneral />} /> */}
            <Route path="admin" element={<Admin />} />
            <Route path="product-management" element={<ProductAdmin />} />
        </Route>
        <Route element={<RequireAuth allowedRole={'kitchen'} />}>
          <Route path="kitchen" element={<Kitchen />} />
        </Route>
        <Route element={<RequireAuth allowedRole={'dinner'} />}>
          <Route path="dinner" element={<Dinner />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
