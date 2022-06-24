import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};
const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      <UserMenu />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
