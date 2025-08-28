import { useState, useEffect } from "react";
import cat from "./img/cat.png"
import { motion } from "framer-motion";
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

// Random colors for backgrounds
const colors = ["#B5FFFC"];

// Some cat images (you can replace with your own hosted cat images)
const cats = [
cat
];

export default function App() {
  const [affirmation, setAffirmation] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    // Pick random affirmation
    const randomAff = affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(randomAff);

    // Pick random background color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);

    // Pick random cat image
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    setCatImage(randomCat);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl bg-white shadow-xl flex flex-col items-center"
      >
    <div className="relative flex items-center justify-center">
  {/* Cat image */}
  <img
    src={catImage}
    alt="Cat"
    className="rounded-2xl object-cover w-[calc(1.6*226px)] h-[calc(1.6*228px)]"
  />

  {/* Card overlay */}
  <div className="absolute bottom-11 left-1/2 -translate-x-1/2 transform w-[224px] h-[128px] flex items-center justify-center px-4 py-2 bg-transparent">
    <p className="text-center font-semibold text-gray-700">
      {affirmation}
    </p>
  </div>
</div>
      </motion.div>
    </div>
  );
}