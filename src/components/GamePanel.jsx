import { useEffect, useState } from "react";
import BoardPanel from "./BoardPanel";

export default function GamePanel() {
  const [cards, setCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const totalPairs = cards.length / 2;
  const hasWon = matchedPairs === totalPairs;

  // Fisher–Yates
  function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }

  async function generateCards() {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=10",
    );
    const data = await res.json();

    const images = data.map((img) => ({
      image: img.url,
      pairId: crypto.randomUUID(),
    }));

    const paired = [...images, ...images].map((item) => ({
      ...item,
      id: crypto.randomUUID(),
    }));

    return shuffleArray(paired);
  }

  useEffect(() => {
    generateCards().then(setCards);
  }, []);

  return (
    <>
      <div className="gamePanel">
        <button
          className="new_game_btn"
          onClick={() => {
            generateCards().then(setCards);
          }}
        >
          New game
        </button>

        <p>
          Pairs: {matchedPairs} / {totalPairs}
        </p>

        {hasWon && <p className="win_text">🎉You win!🎉</p>}
      </div>
      <BoardPanel cards={cards} setMatchedPairs={setMatchedPairs} />
    </>
  );
}
