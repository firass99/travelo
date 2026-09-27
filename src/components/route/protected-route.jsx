import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

// Blocks LOGGED-OUT users from visiting pages that require auth
function ProtectedRoute({ allowedRoles }) {
  const { isAuth, role } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuth) {
    // remember where they were headed, so you could redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
