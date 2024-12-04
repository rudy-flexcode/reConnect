import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/CardContainer.css";
import type { ArticleType } from "../lib/definition";

const CardContainer = ({
  articles,
  changeWantedValue,
}: { articles: ArticleType[]; changeWantedValue: (id: number) => void }) => {
  useEffect(() => {
    fetch("https://api-re-connect-t3ln.vercel.app/api/resources")
      .then((response) => response.json())
      .then((data: ArticleType[]) => {
        const cities = Array.from(
          new Set(data.map((item) => item.localisation)),
        );
        setLocations(cities);
      })
      .catch((error) => console.error(error));
  }, []);

  const [locations, setLocations] = useState<string[]>([]);

  const [currentLocations, setCurrentLocations] = useState<string>("");

  const handleLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLocations(e.target.value);
  };

  return (
    <div className="card-container">
      <div className="card-filter">
        <select id="card-selector" onChange={handleLocation}>
          <option value="">All</option>
          {locations.length > 0 &&
            locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
        </select>
      </div>
      <div className="card-display">
        {articles
          ?.filter((card) => card.localisation.includes(currentLocations))
          .map((card) => (
            <Card
              key={card.id}
              changeWantedValue={changeWantedValue}
              card={card}
            />
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
