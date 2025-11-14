import axios from "axios";

const API_BASE = "https://swapi.dev/api";

export const fetchPeople = (page = 1, search = "") =>
  axios
    .get(`${API_BASE}/people/`, { params: { page, search } })
    .then((r) => r.data);

export const fetchResource = (url) => axios.get(url).then((r) => r.data);

// helper to get species name (may be an empty array)
export const fetchSpeciesNames = async (speciesUrls) => {
  if (!speciesUrls || speciesUrls.length === 0) return ["Human"]; // fallback
  const results = await Promise.all(
    speciesUrls.map((u) => fetchResource(u).catch(() => null))
  );
  return results.map((r) => (r && r.name ? r.name : "Unknown"));
};
