import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMD_API_KEY,
    language: "us-US",
  },
});

export const movieApi = {
  popular: (page: number) =>
    api.get("/movie/popular", { params: { page: page } }),
  nowPlaying: () => api.get("/movie/now_playing"),
  upComing: () => api.get("/movie/upcoming"),
  topRated: () => api.get("/movie/top_rated"),
  movieDetail: (movie_id: string) =>
    api.get(`/movie/${movie_id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term: string) =>
    api.get("/search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  getGenres: () => api.get("/genre/movie/list"),
};

export const tvApi = {
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),
  onTv: () => api.get("/tv/on_the_air"),
  topRated: () => api.get("/tv/top_rated"),
  tvDetail: (tv_id: string) =>
    api.get(`/tv/${tv_id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term: string) =>
    api.get("/search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const peopleApi = {
  popular: () => api.get("/person/popular"),
  poepleDetail: (person_id: string) => api.get(`/person/${person_id}`),
  search: (term: string) =>
    api.get("/search/person", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
