 
"use client";
import { useState } from "react";

export default function MoodToggle() {
  const [mood, setMood] = useState("🙂");

  const toggleMood = () => {
    setMood(mood === "🙂" ? "😎" : "🙂");
  };

  return (
    <div className="text-4xl cursor-pointer" onClick={toggleMood}>
      {mood}
    </div>
  );
}
