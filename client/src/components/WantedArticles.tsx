import type { ArticleType } from "../lib/definition";
import "../styles/WantedArticles.css";

const WantedArticles = ({ isWanted }: { isWanted: ArticleType[] }) => {
  return (
    <div className="wanted-container">
      {isWanted?.map((w) => (
        <section className="wanted-card" key={w.id}>
          <h3 className="wanted-titlecard">{w.nom}</h3>
          <p>{w.description}</p>
        </section>
      ))}
    </div>
  );
};

export default WantedArticles;
