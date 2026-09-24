import Navbar from "@/components/navbar";
import BlogsPage from "@/components/pages/blogs";
import ContactPage from "@/components/pages/contact";
import HomePage from "@/components/pages/home";
import LoginPage from "@/components/pages/login";
import RegisterPage from "@/components/pages/register";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Destinations from "./components/pages/destinations";
import DestinationById from "./components/pages/destinations-by-id";
import BlogsById from "./components/pages/blogsById";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="blogs">
            <Route index element={<BlogsPage />} />
            <Route path=":id" element={<BlogsById />} />
          </Route>

          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="destinations">
            <Route index element={<Destinations />} />
            <Route path=":id" element={<DestinationById />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
