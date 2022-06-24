import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import RegisterView from "./pages/RegisterView";
import LoginView from "./pages/LoginView";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />

        <Route path="phonebook" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
