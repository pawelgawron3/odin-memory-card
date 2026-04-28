import { useState } from "react";

export default function Card({ image }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="card" onClick={() => setRevealed(!revealed)}>
      {!revealed ? (
        <div className="card_back">🐾</div>
      ) : (
        <div className="card_front">
          <img src={image} alt="dog" />
        </div>
      )}
    </div>
  );
}
