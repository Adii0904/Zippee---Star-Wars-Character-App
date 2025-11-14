import React from "react";

export default function CharacterCard({ char, onClick, speciesNames }) {
  // random picsum seeded by name
  const img = `https://picsum.photos/seed/${encodeURIComponent(
    char.name
  )}/400/300`;

  // color by species first name
  const species = (speciesNames && speciesNames[0]) || "Unknown";
  const accent = getAccent(species);

  return (
    <div
      className="rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-[1.02] transition p-0"
      onClick={() => onClick(char, speciesNames)}
      style={{ borderTop: `6px solid ${accent}` }}
    >
      <img
        src={img}
        alt={char.name}
        className="w-full h-44 object-cover animate__animated animate__fadeIn"
      />
      <div className="p-4 bg-white animate__animated  animate__bounceInDown">
        <h3 className=" text-lg font-bold  text-emerald-600">{char.name}</h3>
        <p className="text-sm text-sky-600 font-semibold">Species: {species}</p>
      </div>
    </div>
  );
}

function getAccent(species) {
  const map = {
    Human: "#0ea5a4",
    Droid: "#f97316",
    Wookiee: "#a78bfa",
    Rodian: "#34d399",
    Unknown: "#94a3b8",
  };
  return map[species] || stringToColor(species);
}

function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}
