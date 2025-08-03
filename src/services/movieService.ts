import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const myApiKey = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await axios.get<{ results: Movie[] }>(BASE_URL, {
    params: {
      query,
      language: "en-US",
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
  });

  return data.results;
};