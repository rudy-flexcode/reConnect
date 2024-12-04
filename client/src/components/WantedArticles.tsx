import type { ArticleType } from "../lib/definition";
import "../styles/WantedArticles.css";

const WantedArticles = ({ isWanted }: { isWanted: ArticleType[] }) => {
  return (
    <div className="wanted-container">
      <div className="wanted-card">
        {isWanted?.map((w) => (
          <section key={w.id}>
            <p>{w.nom}</p>
            <p>{w.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WantedArticles;
