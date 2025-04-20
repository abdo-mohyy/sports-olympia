import { Button, Container } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Header() {
  const location = useLocation().pathname;
  const isAuthPage = location === "/register" || location === "/login";

  return (
    <div className="bg-primary border-bottom w-100">
      <Container>
        <div className="d-flex align-items-center justify-content-between flex-wrap py-3">
          {/* Logo */}
          <div className="col-3">
            <Logo />
          </div>
          {isAuthPage ? (
            <div className="auth-btns d-flex align-items-center justify-content-between bg-light p-2 rounded">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `every-auth-btn p-2 me-2 transition-3s rounded ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Register
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `every-auth-btn p-2 transition-3s rounded ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Login
              </NavLink>
            </div>
          ) : (
            // Normal header login button
            <div className="auth-btns col-5 col-md-3 d-flex align-items-center justify-content-end gap-4 order-md-4 order-2">
              <Link
                to="/login"
                className="bg-primary text-light rounded p-2 fs-12px fs-md-16px"
              >
                <Button variant="outline-light">Login</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
