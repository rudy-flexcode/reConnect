import type React from "react";
import Card from "./Card";
import "./CardContainer.css";

const CardContainer: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description.",
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
