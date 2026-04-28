import { useState } from "react";

export default function Card({ image, revealed, onClick }) {
  return (
    <div className="card" onClick={onClick}>
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
