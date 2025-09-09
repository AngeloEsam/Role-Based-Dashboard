import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import UsersPage from "./pages/UsersPage";
import Layout from "./components/Layout";
import ClientsPage from "./pages/ClientsPage";
import FinancePage from "./pages/FinancePage";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LoginPage />} />

      {/* Protected */}
      <Route path="/dashboard" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute allowedRoles={["Manager", "HR", "Sales"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="users"
          element={
            <ProtectedRoute allowedRoles={["Manager", "HR"]}>
              <UsersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="clients"
          element={
            <ProtectedRoute allowedRoles={["Manager", "Sales"]}>
              <ClientsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="finance"
          element={
            <ProtectedRoute allowedRoles={["Manager", "HR"]}>
              <FinancePage />
            </ProtectedRoute>
          }
        />

      </Route>
    </Routes>
  );
}

export default App;
