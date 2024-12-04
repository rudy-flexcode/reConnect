import { NavLink, useLoaderData } from "react-router-dom";
import type { ArticleType } from "../lib/definition";
import "../styles/details.css";

const Details = () => {
  const article = useLoaderData() as ArticleType;
  return (
    <div className="details-main">
      <h1 className="details-h1">Details de l'Échange</h1>
      <div className="details-article">
        <img
          src={`https://api-re-connect-t3ln.vercel.app${article.image}`}
          alt="Pouette"
          className="details-img"
        />
        <div className="details-description">
          <h2 className="details-h2">{article.nom}</h2>
          <span className="details-content">{article.categorie}</span>
          <p className="details-content">{article.description}</p>
        </div>
      </div>
      <NavLink className="details-back" to="/echanges">
        RETOUR
      </NavLink>
    </div>
  );
};

export default Details;
