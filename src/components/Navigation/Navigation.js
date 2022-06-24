import { NavLink, useLocation, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      {
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
          </ul>
        </nav>
      }
    </>
  );
};

export default Navigation;
