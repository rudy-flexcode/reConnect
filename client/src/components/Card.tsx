import type { ArticleType } from "../lib/definition";

const Card = ({
  card,
  changeWantedValue,
}: {
  card: ArticleType;
  changeWantedValue: (id: number) => void;
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{card.nom}</h3>
        <p>{card.description}</p>

        {card.image && (
          <img
            src={`https://api-re-connect-t3ln.vercel.app${card.image}`}
            alt={`Img de ${card.nom}`}
            className="card-image"
          />
        )}

        <button
          className="validate"
          type="button"
          onClick={() => changeWantedValue(card.id)}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default Card;
