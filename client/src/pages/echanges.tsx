import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import WantedArticles from "../components/WantedArticles";
import type { ArticleType } from "../lib/definition";

const Echanges = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isWanted, setIsWanted] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetch("https://api-re-connect-t3ln.vercel.app/api/resources")
      .then((response) => response.json())
      .then((data) => setArticles(data));
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
    <div>
      <h1>POUETTE ECHANGE</h1>
      <CardContainer
        changeWantedValue={changeWantedValue}
        articles={articles}
      />
      <WantedArticles isWanted={isWanted} />
    </div>
  );
};

export default Echanges;
