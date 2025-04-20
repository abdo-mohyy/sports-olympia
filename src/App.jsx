import { Routes, Route } from "react-router-dom";
import Home from "./Website/Home";
import Login from "./Website/Auth/Login";
import Register from "./Website/Auth/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
