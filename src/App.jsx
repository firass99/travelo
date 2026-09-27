import Navbar from "@/components/navbar";
import BlogsPage from "@/components/pages/blogs";
import ContactPage from "@/components/pages/contact";
import HomePage from "@/components/pages/home";
import LoginPage from "@/components/pages/login";
import RegisterPage from "@/components/pages/register";
import { Route, Routes } from "react-router-dom";
import Destinations from "@/components/pages/destinations";
import DestinationById from "./components/pages/destinations-by-id";
import BlogsById from "./components/pages/blogsById";
import GuestOnlyRoute from "./components/route/guest-only-route";
import ProtectedRoute from "./components/route/protected-route";

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

          {/* Only ADMINs can reach contact, per your login redirect logic */}
          <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
            <Route path="contact" element={<ContactPage />} />
          </Route>

          {/* Logged-in users can't see login/register */}
          <Route element={<GuestOnlyRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

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
