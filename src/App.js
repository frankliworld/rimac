import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Button from "./components/buttons/button";
import { Layout } from "./components/layout/layout";
import RequireAuth from "./components/RequiereAuth";
import { AppProvider } from "./context/context";
import Home from "./pages/home";
import Login from "./pages/login";
import Welcome from "./pages/welcome";

function App() {
  return (
    <Layout>
      <AppProvider>
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
      </AppProvider>
    </Layout>
  );
}

export default App;

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Not found</h1>
      <Button title="volver" onClick={handleClick} />
    </>
  );
};
