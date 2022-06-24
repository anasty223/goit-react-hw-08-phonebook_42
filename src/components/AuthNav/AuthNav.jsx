import { NavLink, useLocation, Outlet } from "react-router-dom";
import style from "../Navigation/Navigation.module.css";

export default function AuthNav() {
  return (
    <ul>
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
  );
}
