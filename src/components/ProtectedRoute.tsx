import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  const role = user?.role;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <div className="p-10 text-center text-red-500 text-xl">Not Authorized 🚫</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
