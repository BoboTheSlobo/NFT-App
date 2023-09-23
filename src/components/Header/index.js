import AppLogo from "../../assets/app-logo.png";
import "./style.css";
function Header() {
  return (
    <nav className="header">
      <img className="header-logo" src={AppLogo} alt="app logo" />
      <span className="header-sign-up">Sign Up</span>
    </nav>
  );
}
export default Header;
