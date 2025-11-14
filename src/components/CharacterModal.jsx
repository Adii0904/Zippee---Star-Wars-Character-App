import React, { useEffect, useState } from "react";
import { fetchResource, fetchSpeciesNames } from "../api/swapi";
import dayjs from "dayjs";

export default function CharacterModal({ open, onClose, person }) {
  const [homeworld, setHomeworld] = useState(null);
  const [speciesNames, setSpeciesNames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!person) return;
    let mounted = true;
    setLoading(true);
    Promise.all([
      person.homeworld
        ? fetchResource(person.homeworld).catch(() => null)
        : null,
      fetchSpeciesNames(person.species || []),
    ])
      .then(([hw, species]) => {
        if (!mounted) return;
        setHomeworld(hw);
        setSpeciesNames(species);
      })
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, [person]);

  if (!open || !person) return null;

  const heightMeters =
    person.height && person.height !== "unknown"
      ? `${(parseFloat(person.height) / 100).toFixed(2)} m`
      : "unknown";
  const mass =
    person.mass && person.mass !== "unknown" ? `${person.mass} kg` : "unknown";
  const dateAdded = dayjs().format("DD-MM-YYYY");
  const filmsCount = Array.isArray(person.films) ? person.films.length : 0;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{person.name}</h2>
          <button
            onClick={onClose}
            className="text-white px-6 bg-green-400 py-2 rounded-md hover:bg-green-600 hover:cursor-pointer"
          >
            Close
          </button>
        </div>

        {loading ? (
          <p className="mt-4">Loading details...</p>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="relative w-[280px] h-[260px] p-6 rounded-xl overflow-visible
             bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#374151]
             text-white flex flex-col justify-center items-center text-center
             hover:shadow-lg transition-all duration-500"
            >
              <p>
                <strong>Height:</strong> {heightMeters}
              </p>
              <p>
                <strong>Mass:</strong> {mass}
              </p>
              <p>
                <strong>Birth Year:</strong> {person.birth_year}
              </p>
              <p>
                <strong>Date Added:</strong> {dateAdded}
              </p>
              <p>
                <strong>Films:</strong> {filmsCount}
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-[#34d399] via-[#10b981] to-[#6ee7b7] 
             text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]
             p-6 rounded-xl flex flex-col justify-center items-center text-center 
             min-h-[260px] transition-all duration-500 hover:shadow-lg"
            >
              <h3 className="font-semibold text-lg underline mb-3 text-slate-900">
                Homeworld
              </h3>

              {homeworld ? (
                <>
                  <p>
                    <strong>Name:</strong> {homeworld.name}
                  </p>
                  <p>
                    <strong>Terrain:</strong> {homeworld.terrain}
                  </p>
                  <p>
                    <strong>Climate:</strong> {homeworld.climate}
                  </p>
                  <p>
                    <strong>Population:</strong> {homeworld.population}
                  </p>
                </>
              ) : (
                <p>No homeworld info</p>
              )}

              <div className="mt-4">
                <strong>Species:</strong>
                <ul className="list-disc list-inside">
                  {speciesNames.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
