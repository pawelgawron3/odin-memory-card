import { useState } from "react";

export default function Card({ image, revealed, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className={`card_back ${revealed ? "hidden" : ""}`}>🐾</div>
      <img
        src={image}
        alt="dog"
        className={`card_img ${revealed ? "visible" : ""}`}
      />
    </div>
  );
}
