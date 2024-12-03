interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="card">
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Card;
