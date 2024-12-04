import { NavLink, useLoaderData } from "react-router-dom";
import type { ArticleType } from "../lib/definition";

const Details = () => {
  const article = useLoaderData() as ArticleType;
  return (
    <div>
      <h2>{article.nom}</h2>
      <span>{article.categorie}</span>
      <p>{article.description}</p>
      <NavLink to="/echanges">RETOUR</NavLink>
    </div>
  );
};

export default Details;
