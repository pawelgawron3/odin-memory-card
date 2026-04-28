import { useState } from "react";
import "../styles/boardPanel.css";
import "../styles/card.css";
import Card from "./Card";

export default function BoardPanel({ cards }) {
  const [firstCard, setFirstCard] = useState(null);
  const [revealedCards, setRevealedCards] = useState([]);

  function handleClick(card) {
    if (revealedCards.includes(card.id)) return;

    setRevealedCards((prev) => [...prev, card.id]);

    if (!firstCard) {
      setFirstCard(card);
      return;
    }

    if (firstCard.pairId === card.pairId) {
      setFirstCard(null);
    } else {
      setTimeout(() => {
        setRevealedCards((prev) =>
          prev.filter((id) => id !== card.id && id !== firstCard.id),
        );
      }, 500);

      setFirstCard(null);
    }
  }

  return (
    <div className="boardPanel">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          revealed={revealedCards.includes(card.id)}
          onClick={() => handleClick(card)}
        />
      ))}
    </div>
  );
}
