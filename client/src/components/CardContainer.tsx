import type React from "react";
import Card from "./Card";
import "./CardContainer.css";

const CardContainer: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description Card 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description Card 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description Card 3",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description Card 4",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Description Card 5",
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
