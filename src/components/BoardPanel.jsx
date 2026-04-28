import { useState } from "react";
import "../styles/boardPanel.css";
import "../styles/card.css";
import Card from "./Card";

export default function BoardPanel({ cards, setMatchedPairs }) {
  const [firstCard, setFirstCard] = useState(null);
  const [revealedCards, setRevealedCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  function handleClick(card) {
    if (isLocked) return;
    if (revealedCards.includes(card.id)) return;

    setRevealedCards((prev) => [...prev, card.id]);

    if (!firstCard) {
      setFirstCard(card);
      return;
    }

    if (firstCard.pairId === card.pairId) {
      setFirstCard(null);
      setMatchedPairs((prev) => prev + 1);
    } else {
      setIsLocked(true);

      setTimeout(() => {
        setRevealedCards((prev) =>
          prev.filter((id) => id !== card.id && id !== firstCard.id),
        );
        setFirstCard(null);
        setIsLocked(false);
      }, 700);
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
