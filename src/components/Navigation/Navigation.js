import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";
import { Nav, Link, Navbar } from "react-bootstrap";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {
        <Navbar>
          <Navbar.Brand>Phonebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <ul className={style.list}>
                <li className={style.listItem}>
                  <Nav.Link>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? style.activeStyle : style.navLink
                      }
                    >
                      Home
                    </NavLink>
                  </Nav.Link>
                </li>

                {isLoggedIn && (
                  <li className={style.listItem}>
                    <Nav.Link>
                      <NavLink
                        to={"/phonebook"}
                        className={({ isActive }) =>
                          isActive ? style.activeStyle : style.navLink
                        }
                      >
                        Phonebook
                      </NavLink>
                    </Nav.Link>
                  </li>
                )}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      }
    </>
  );
};

export default Navigation;
