import "../styles/Footer.css";
import facebook from "../assets//images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="reseaux-sociaux">
            <img src={facebook} alt="logo facebook" />
            <img src={instagram} alt="logo instagram" />
            <img src={linkedin} alt="logo linkedin" />
          </div>
          <div className="conditions">
            <h2>Conditions générales d'utilisation</h2>
            <p>
              ReConnect permet de publier des annonces de dons et services dans
              un esprit de solidarité. L'utilisateur s'engage à respecter les
              lois et à agir de manière bienveillante. Le site ne peut être tenu
              responsable des échanges entre utilisateurs. Pour plus
              d'informations, consultez notre politique de confidentialité.
            </p>
          </div>
        </div>
        <div className="copysight">
          <p>© ReConnect Wilders 2024 🖤</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
