import { useEffect, useState } from "react";
import { fetchPeople } from "../api/swapi";

export default function useFetchCharacters(page, search) {
  const [data, setData] = useState({ results: [], count: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPeople(page, search)
      .then((d) => setData(d))
      .catch((err) => setError(err.message || "Fetch failed"))
      .finally(() => setLoading(false));
  }, [page, search]);

  return { data, loading, error };
}
