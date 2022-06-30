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
                <button type="button" className="btn  px-3 me-2">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.activeStyle : style.navLink
                    }
                  >
                    <h3 className="display-6">Home</h3>
                  </NavLink>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn  px-3 me-2">
                  {isLoggedIn && (
                    <NavLink
                      to={"/phonebook"}
                      className={({ isActive }) =>
                        isActive ? style.activeStyle : style.navLink
                      }
                    >
                      <h3 className="display-6">Phonebook</h3>
                    </NavLink>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
