import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={Logo} alt="logo ReConnect" />
        <h1>Ensemble, partageons avec bienveillance.</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="bouton home">
          Home
        </Link>
        <Link to="/echanges" className="bouton echanges">
          Bien et Services
        </Link>
      </div>
    </header>
  );
};

export default Header;
