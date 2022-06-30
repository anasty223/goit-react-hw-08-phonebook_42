import { NavLink } from "react-router-dom";
import style from "../Navigation/Navigation.module.css";
import { Navbar } from "react-bootstrap";

export default function AuthNav() {
  return (
    <Navbar>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <div className="d-flex align-items-center">
              <button type="button" className="btn  px-3 me-2">
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive ? style.activeStyle : style.navLink
                  }
                >
                  Login
                </NavLink>
              </button>
              <button type="button" className="btn btn-info me-3">
                <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                    isActive ? style.activeStyle : style.navLink
                  }
                >
                  Sign up for free
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Navbar>
  );
}
