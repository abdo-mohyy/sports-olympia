import { Link } from "react-router-dom";
import "./logo.css";

export default function Logo() {
  return (
    <div className="col-3 d-flex justify-content-center logo-container w-100">
      <Link to="/">
        <img
          className="logo-img pointer"
          src="/Assets/logo-transparent.png"
          alt="logo"
          width="80px"
        />
      </Link>
    </div>
  );
}
