import { Routes, Route } from "react-router-dom";
import Home from "./Website/Home";
import AuthForm from "./Website/Auth/AuthForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/register" element={<AuthForm />} />
    </Routes>
  );
}
