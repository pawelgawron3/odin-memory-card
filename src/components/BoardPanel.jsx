import "../styles/boardPanel.css";
import "../styles/card.css";
import Card from "./Card";

export default function BoardPanel({ cards }) {
  return (
    <div className="boardPanel">
      {cards.map((card) => (
        <Card key={card.id} image={card.image} />
      ))}
    </div>
  );
}
