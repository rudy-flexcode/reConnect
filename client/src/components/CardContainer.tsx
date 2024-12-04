import Card from "./Card";
import "../styles/CardContainer.css";
import type { ArticleType } from "../lib/definition";

const CardContainer = ({
  articles,
  changeWantedValue,
}: { articles: ArticleType[]; changeWantedValue: (id: number) => void }) => {
  return (
    <div className="card-container">
      {articles?.map((card) => (
        <Card key={card.id} changeWantedValue={changeWantedValue} card={card} />
      ))}
    </div>
  );
};

export default CardContainer;
