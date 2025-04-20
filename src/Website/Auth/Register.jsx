import { useContext } from "react";
import { WindowWidthContext } from "../../context/WindowWidthContext/WindowWidthContext";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./auth.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo/Logo";

export default function Register() {
  const windowWidth = useContext(WindowWidthContext);
  const screenSize = windowWidth.width;

  return (
    <div className="auth-box bg-info">
      <Header />
      <div className="auth-content d-flex">
        <div className="auth-card col-md-6 col-12 d-flex align-items-center justify-content-center">
          <Form
            className="custom-form bg-light rounded p-3 m-2 outline-none shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className=" d-flex justify-content-center">
              <Logo />
            </div>

            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                className="w-100 p-2 p-md-3 rounded bg-info outline-none"
                type="text"
                placeholder="Name"
                minLength="2"
                required
              />
            </Form.Group>

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
              className="submit bg-info text-primary hover-text-light hover-bg-primary w-100 p-1 p-md-2"
              size="md"
              type="submit"
            >
              Register !
            </Button>
            <Link
              to="/login"
              className="text-primary fw-bold mt-2 p-1 d-inline-block hover-text-primary"
            >
              Already Have An Account
            </Link>
          </Form>
        </div>
        {screenSize > 767 && (
          <div className="col-md-6 col-12 p-4 bg-secondary text-primary hover-text-light d-flex align-items-center">
            <div
              className="big-sentence text-center w-100"
              style={{
                fontSize:
                  screenSize > 1449
                    ? "80px"
                    : screenSize > 1115
                    ? "60px"
                    : "40px",
              }}
            >
              Lets Know Moooore!
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
