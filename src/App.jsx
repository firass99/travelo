import Navbar from "@/components/navbar";
import BlogsPage from "@/components/pages/blogs";
import ContactPage from "@/components/pages/contact";
import HomePage from "@/components/pages/home";
import LoginPage from "@/components/pages/login";
import RegisterPage from "@/components/pages/register";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
