import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Button from "./components/buttons/button";
import { Layout } from "./components/layout/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Welcome from "./pages/welcome";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          index
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/welcome"
          element={
            <RequireAuth>
              <Welcome />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
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

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    console.log("clicked");
  };
  return (
    <>
      <h1>Not found</h1>
      <Button title="volver" onClick={handleClick} />
    </>
  );
};
