import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Filters from "../components/FilterBar";
import FiltersLoc from "../components/FilterLocation";
import WantedArticles from "../components/WantedArticles";
import type { ArticleType } from "../lib/definition";
import "../styles/echanges.css";

const Echanges = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isWanted, setIsWanted] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetch("https://api-re-connect-t3ln.vercel.app/api/resources")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  const changeWantedValue = (id: number) => {
    setArticles((currentArticles) =>
      currentArticles.map((wantedArticle) =>
        wantedArticle.id === id
          ? { ...wantedArticle, disponibilite: !wantedArticle.disponibilite }
          : wantedArticle,
      ),
    );
  };

  useEffect(() => {
    const wanted = articles.filter((article) => article.disponibilite);
    setIsWanted(wanted);
  }, [articles]);

  return (
    <div className="echanges-main">
      <h1 className="echanges-titre">Les Échanges Proposés</h1>
      <div className="echanges-filters">
        <Filters />
        <FiltersLoc />
      </div>
      <div className="echange-content">
        <CardContainer
          changeWantedValue={changeWantedValue}
          articles={articles}
        />
        <WantedArticles isWanted={isWanted} />
      </div>
    </div>
  );
};

export default Echanges;
