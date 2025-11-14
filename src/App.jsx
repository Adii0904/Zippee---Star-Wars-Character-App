import React, { useState, useMemo } from "react";
import useFetchCharacters from "./hooks/useFetchCharacters";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { fetchSpeciesNames } from "./api/swapi";
import "animate.css";

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetchCharacters(page, search);
  const [selected, setSelected] = useState(null);
  const [speciesCache, setSpeciesCache] = useState({}); // url->names

  // prefetch species names for displayed characters
  useMemo(() => {
    (async () => {
      if (!data.results) return;
      for (const p of data.results) {
        const key = p.url;
        if (!speciesCache[key]) {
          try {
            const names = await fetchSpeciesNames(p.species || []);
            setSpeciesCache((prev) => ({ ...prev, [key]: names }));
          } catch (err) {
            console.log(err.message);
          }
        }
      }
    })();
  }, [data.results]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-6xl mx-auto mb-6 animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold text-center text-emerald-600">
          Zippee — Star Wars Characters
        </h1>
        <p className="text-sm text-center font-semibold text-sky-600">
          Frontend Take-Home Assignment Demo
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="mb-4">
          <SearchBar
            value={search}
            setValue={(v) => {
              setPage(1);
              setSearch(v);
            }}
          />
        </div>

        {loading && <p>Loading characters...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {!loading && data.results && data.results.length === 0 && (
          <p>No characters found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.results &&
            data.results.map((p) => (
              <CharacterCard
                key={p.url}
                char={p}
                speciesNames={speciesCache[p.url]}
                onClick={(person) => setSelected(person)}
              />
            ))}
        </div>

        <Pagination
          page={page}
          setPage={setPage}
          hasNext={!!data.next}
          hasPrev={!!data.previous}
        />

        <CharacterModal
          open={!!selected}
          onClose={() => setSelected(null)}
          person={selected}
        />
      </main>
    </div>
  );
}

export default App;
