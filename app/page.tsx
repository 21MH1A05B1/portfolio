'use client';

import { useState } from 'react';

// Mood Toggle Component
function MoodToggle() {
  const [mood, setMood] = useState("🙂");
  const toggleMood = () => {
    setMood(mood === "🙂" ? "😎" : "🙂");
  };
  return (
    <div className="text-4xl mt-4 cursor-pointer" onClick={toggleMood}>
      {mood}
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, description, snippet }: { title: string, description: string, snippet: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
      <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}

// Homepage Component
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Hi, I'm Anjani 👋</h1>
        <h2 className="text-lg text-gray-700">Frontend Enthusiast & Explorer</h2>
        <p>I love crafting responsive and interactive UIs!</p>
        <MoodToggle />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>

        <ProjectCard
          title="Seamless Travel Planner"
          description="Helps users plan trips efficiently using Flutter."
          snippet={`// Flutter code snippet\nif (tripPlanner.isReady) {\n  tripPlanner.launch();\n}`}
        />

        <ProjectCard
          title="Hospitality Management"
          description="Room booking, food delivery, complaint management using Pega."
          snippet={`// Pega flow snippet\nWhen bookingConfirmed Then sendConfirmationEmail();`}
        />
      </section>
    </main>
  );
}
