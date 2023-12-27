"use client";
import { useState } from "react";

export default function TrendingButton() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="border border-tmdbDarkBlue">
      <button
        onClick={() => handleButtonClick("hoje")}
        className={`px-4 py-2 rounded `}
      >
        Hoje
      </button>
      <button
        onClick={() => handleButtonClick("semana")}
        className={`px-4 py-2 rounded `}
      >
        Nesta Semana
      </button>
    </div>
  );
}
