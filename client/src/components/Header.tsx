import Logo from "../assets/images/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={Logo} alt="logo ReConnect" />
        <h1>ReConnect</h1>
      </div>
      <div className="nav-links">
        <h2>Accueil</h2>
        <h2>Biens et services</h2>
      </div>
    </header>
  );
};

export default Header;
