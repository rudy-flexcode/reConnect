import type { ArticleType } from "../lib/definition";

const Card = ({
  card,
  changeWantedValue,
}: { card: ArticleType; changeWantedValue: (id: number) => void }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{card.nom}</h3>
        <p>{card.description}</p>
        <button type="button" onClick={() => changeWantedValue(card.id)}>
          oooooo
        </button>
      </div>
    </div>
  );
};
export default Card;
