import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Welcome from "./pages/welcome";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;

const RequireAuth = ({ children }) => {
  let auth = window.localStorage.getItem("auth") || false;
  console.log("auth", auth);
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
