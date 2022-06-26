import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import { fetchCurrentUser } from "../src/redux/auth/auth-operation";
import PrivateRoute from "./components/PrivateRoute";

const Home = lazy(() => import("./components/Home/Home"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const RegisterView = lazy(() => import("./pages/RegisterView"));
const LoginView = lazy(() => import("./pages/LoginView"));
const Contacts = lazy(() => import("./components/Contacts/Contacts"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<p>Загружаем...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />

          {/* <Route path="phonebook" element={<Contacts />} /> */}
          <Route
            path="phonebook"
            element={
              <PrivateRoute component={<Contacts />} navigateTo="/login" />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
