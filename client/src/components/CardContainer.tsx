import type { ArticleType } from "../lib/definition";
import ArticleCard from "./ArticleCard";

const CardContainer = ({
  articles,
  changeWantedValue,
}: { articles: ArticleType[]; changeWantedValue: (id: number) => void }) => {
  return (
    <div>
      {articles?.map((a) => (
        <ArticleCard a={a} key={a.id} changeWantedValue={changeWantedValue} />
      ))}
    </div>
  );
};

export default CardContainer;
