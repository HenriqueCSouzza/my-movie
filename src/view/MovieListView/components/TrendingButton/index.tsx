"use client";
import { useState } from "react";

export default function TrendingButton() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="border-2 bg-tmdbLightBlue">
      <button
        onClick={() => handleButtonClick("hoje")}
        className={`px-4 py-2 rounded bg-indigo-500`}
      >
        Hoje
      </button>
      <button
        onClick={() => handleButtonClick("semana")}
        className={`px-4 py-2 rounded bg-slate-400`}
      >
        Nesta Semana
      </button>
    </div>
  );
}
