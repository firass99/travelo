import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// Blocks LOGGED-IN users from visiting guest-only pages (login, register)
function GuestOnlyRoute() {
  const { isAuth, role } = useSelector((state) => state.auth);

  if (isAuth) {
    // send them somewhere sensible based on role, same logic as your login redirect
    const redirectTo = role === "ADMIN" ? "/contact" : "/blogs";
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}

export default GuestOnlyRoute;
