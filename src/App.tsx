import { BrowserRouter, Routes, Route } from "react-router";
import GuestLayout from "@/layout/GuestLayout";
import Welcome from "@/pages/welcome";
import About from "@/pages/about";
import Receipes from "./pages/receipes";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Beranda from "./pages/dashboard/beranda/Beranda";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<GuestLayout />}>
          <Route
            index
            element={<Welcome />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='receipes'
            element={<Receipes />}
          />
        </Route>
        <Route
          path='/auth'
          element={<AuthLayout />}>
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />
        </Route>
        <Route
          path='/dashboard'
          element={<DashboardLayout />}>
          <Route
            index
            element={<Beranda />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
