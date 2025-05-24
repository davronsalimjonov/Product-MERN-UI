import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthProvider, useAuth } from "./context/authContext";
import Dashboard from "./pages/Dashboard/Dashboard";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user, loading);

  if (loading) {
    
    return <div>Loading...</div>; // or a spinner
  }

  return user ? children : <Navigate to="/login" />;
};

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
