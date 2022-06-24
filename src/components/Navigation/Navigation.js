import { NavLink, useLocation, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("/details") && (
        <nav>
          <ul className={style.list}>
            <li className={style.listItem}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.activeStyle : style.navLink
                }
              >
                Home
              </NavLink>
            </li>

            <li className={style.listItem}>
              <NavLink
                to={"/phonebook"}
                className={({ isActive }) =>
                  isActive ? style.activeStyle : style.navLink
                }
              >
                Phonebook
              </NavLink>
            </li>
            <li className={style.listItem}>
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  isActive ? style.activeStyle : style.navLink
                }
              >
                Registration
              </NavLink>
            </li>

            <li className={style.listItem}>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive ? style.activeStyle : style.navLink
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
