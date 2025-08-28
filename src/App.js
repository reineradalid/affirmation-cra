import { useState, useEffect } from "react";

const affirmations = [
  "Your supportive nature makes you unforgettable.",
    "There’s a glow in your kindness that lights up a room.",
    "Your genuine words always stay with me.",
    "The calm you carry makes life less heavy.",
    "Your positivity makes people want to be better.",
    "You hold a purity that shines through your actions.",
    "Your secure presence feels like a safe harbor.",
    "The way you encourage others is beautiful.",
    "Your kindness heals in quiet ways.",
    "Your calm spirit feels like home.",
    "You have a genuine charm that can’t be imitated.",
    "Your positive heart makes the world brighter.",
    "There’s a rare purity in how you care for people.",
    "Your supportive words mean more than you know.",
    "You bring a calm strength to every moment.",
    "Your kindness is steady and unwavering.",
    "Your genuine presence makes people feel seen.",
    "You spread positivity wherever you go.",
    "Your pure heart makes you truly remarkable.",
    "You give security just by being steady and real.",
    "Your supportive nature changes lives quietly.",
    "There’s a softness in your kindness that lingers.",
    "Your genuine smile is unforgettable.",
    "Your calmness makes storms feel smaller.",
    "You always find the positive in people.",
    "Your purity is a gift to everyone around you.",
    "Your secure heart is something rare and strong.",
    "The way you support others is inspiring.",
    "Your kindness never goes unnoticed.",
    "You bring calm even to restless hearts."
];

function App() {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(random);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-2xl font-semibold text-white">{affirmation}</h1>
      </div>
    </div>
  );
}

export default App;
