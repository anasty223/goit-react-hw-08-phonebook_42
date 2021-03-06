import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import Layout from "./components/Layout/Layout";
import { useEffect, Suspense, lazy } from "react";
import { fetchCurrentUser } from "../src/redux/auth/auth-operation";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authSelectors from "./redux/auth/auth-selectors";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Hearts } from "react-loader-spinner";
import AppBar from "./components/AppBar/AppBar";

const Home = lazy(
  () => import("./components/Home/Home") /* webpackChunkName: "home" */
);
const RegisterView = lazy(
  () => import("./pages/RegisterView") /* webpackChunkName: "RegisterView" */
);
const LoginView = lazy(
  () => import("./pages/LoginView") /* webpackChunkName: "LoginView" */
);
const Contacts = lazy(
  () =>
    import("./components/Contacts/Contacts") /* webpackChunkName: "Contacts" */
);

function App() {
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Hearts color="#00BFFF" height="100" width="100" ariaLabel="loading" />
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<p>Donloading...</p>}>
        <Routes>
          <Route path="/" element={<PublicRoute component={<Home />} />} />

          <Route
            path="/register"
            element={
              <PublicRoute
                component={<RegisterView />}
                navigateTo="/contacts"
                restricted
              />
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute
                component={<LoginView />}
                navigateTo="/contacts"
                restricted
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} navigateTo="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
