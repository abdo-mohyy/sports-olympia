import { Link, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo/Logo";
import "./auth.css";

export default function AuthForm() {
  const isRegister = useLocation().pathname === "/register";

  return (
    <div className="auth-box bg-info">
      <Header />
      <div className="auth-content">
        <div className="auth-card d-flex align-items-center justify-content-center">
          <Form
            className="custom-form bg-light rounded p-3 m-2 outline-none shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="d-flex justify-content-center flex-column">
              <Logo />
              <h2 className="text-primary text-center p-2 pb-3 mb-3 bg-primary text-light rounded">
                {isRegister ? "Register !" : "Login !"}
              </h2>
            </div>

            {isRegister && (
              <Form.Group className="mb-3" controlId="name">
                <Form.Control
                  className="w-100 p-2 p-md-3 rounded bg-info outline-none"
                  type="text"
                  placeholder="Name"
                  minLength="2"
                  required
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                className="w-100 p-2 p-md-3 rounded  bg-info"
                type="email"
                placeholder="someone@example.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="password must be more than 8 char"
                className="w-100 p-2 p-md-3 rounded bg-info"
                minLength="8"
                required
              />
            </Form.Group>

            <Button
              className="submit bg-info fw-bold text-primary hover-text-light hover-bg-primary w-100 p-1 p-md-2"
              size="md"
              type="submit"
            >
              {isRegister ? "Register !" : "Login !"}
            </Button>
            <Link
              to={isRegister ? "/login" : "/register"}
              className="text-primary fw-bold mt-2 p-1 d-inline-block hover-text-primary"
            >
              {isRegister
                ? "Already Have An Account!"
                : "Create A New Account?"}
            </Link>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
