import type { ArticleType } from "../lib/definition";

const ArticleCard = ({
  a,
  changeWantedValue,
}: { a: ArticleType; changeWantedValue: (id: number) => void }) => {
  const { id, nom, description, categorie, disponibilite, localisation } = a;

  return (
    <div>
      <p>{id}</p>
      <p>{nom}</p>
      <p>{description}</p>
      <p>{categorie}</p>
      <p>{disponibilite && "Pouette"}</p>
      <p>{localisation}</p>
      <button type="button" onClick={() => changeWantedValue(a.id)}>
        oooooo
      </button>
    </div>
  );
};

export default ArticleCard;
