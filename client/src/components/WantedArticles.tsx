import type { ArticleType } from "../lib/definition";

const WantedArticles = ({ isWanted }: { isWanted: ArticleType[] }) => {
  return (
    <div>
      {isWanted?.map((w) => (
        <p key={w.id}>{w.nom}</p>
      ))}
    </div>
  );
};

export default WantedArticles;
