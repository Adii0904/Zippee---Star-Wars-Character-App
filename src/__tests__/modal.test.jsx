import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import * as swapi from "../api/swapi";

test("opens modal with correct character details", async () => {
  // mock fetchPeople
  jest.spyOn(swapi, "fetchPeople").mockResolvedValue({
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        birth_year: "19BBY",
        films: ["a", "b"],
        homeworld: "https://swapi.dev/api/planets/1/",
        species: [],
        url: "https://swapi.dev/api/people/1/",
      },
    ],
  });
  jest.spyOn(swapi, "fetchResource").mockImplementation((url) => {
    if (url.includes("/planets/1"))
      return Promise.resolve({
        name: "Tatooine",
        terrain: "desert",
        climate: "arid",
        population: "200000",
      });
    return Promise.resolve({});
  });

  render(<App />);
  expect(await screen.findByText(/Luke Skywalker/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Luke Skywalker/i));
  await waitFor(() => expect(screen.getByText(/Tatooine/)).toBeInTheDocument());
  expect(screen.getByText(/Height:/)).toBeInTheDocument();
});
