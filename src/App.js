import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import { fetchCurrentUser } from "../src/redux/auth/auth-operation";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

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
    <>
      <Layout />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/register" element={<RegisterView />} /> */}
          {/* <Route path="/login" element={<LoginView />} /> */}

          <Route path="/" element={<PublicRoute component={<Home />} />} />

          <Route
            path="/register"
            element={
              <PublicRoute
                component={<RegisterView />}
                navigateTo="/phonebook"
                restricted
              />
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute
                component={<LoginView />}
                navigateTo="/phonebook"
                restricted
              />
            }
          />

          <Route
            path="/phonebook"
            element={
              <PrivateRoute component={<Contacts />} navigateTo="/login" />
            }
          />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
