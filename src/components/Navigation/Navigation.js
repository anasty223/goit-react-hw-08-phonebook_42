import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <div className="container-fluid">
          <div>
            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.activeStyle : style.navLink
                    }
                  >
                    Home
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/phonebook">
                  {isLoggedIn && (
                    <NavLink
                      to={"/phonebook"}
                      className={({ isActive }) =>
                        isActive ? style.activeStyle : style.navLink
                      }
                    >
                      Phonebook
                    </NavLink>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
