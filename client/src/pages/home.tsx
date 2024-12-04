import { Link } from "react-router-dom";
import "../styles/home.css";
import imgHome from "../assets/images/imgHome.png";

function Home() {
  return (
    <div className="acceuil-container">
      <div className="content">
        <div className="image-container">
          <img src={imgHome} alt="image-solidaire" className="image" />
        </div>
        <div className="text-container">
          <p>
            ReConnect est une plateforme dédiée à la bienveillance et à
            l'entraide communautaire. Notre mission est de faciliter l'échange
            de services et d'objets entre voisins, amis, et membres de la
            communauté pour renforcer les liens sociaux et favoriser un esprit
            de solidarité. Que vous ayez besoin d'un coup de main pour des
            tâches quotidiennes, ou que vous souhaitiez donner une seconde vie à
            des objets en bon état, notre site est fait pour vous.
          </p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/echanges" className="button">
          Aller à la page des échanges
        </Link>
      </div>
    </div>
  );
}

export default Home;
