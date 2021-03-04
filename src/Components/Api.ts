import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMD_API_KEY,
    language: "us-US",
  },
});

export const movieApi = {
  popular: (page: number) => api.get("/movie/popular", { params: { page } }),
  nowPlaying: (page: number) =>
    api.get("/movie/now_playing", { params: { page } }),
  upComing: (page: number) => api.get("/movie/upcoming", { params: { page } }),
  topRated: (page: number) => api.get("/movie/top_rated", { params: { page } }),
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
  getKeywords: (movie_id: string) => api.get(`/movie/${movie_id}/keywords`),
  getMoiveCredits: (movie_id: string) => api.get(`/movie/${movie_id}/credits`),
  getMoiveReviews: (movie_id: string) => api.get(`/movie/${movie_id}/reviews`),
};

export const tvApi = {
  popular: (page: number) => api.get("/tv/popular", { params: { page } }),
  airingToday: (page: number) =>
    api.get("/tv/airing_today", { params: { page } }),
  onTv: (page: number) => api.get("/tv/on_the_air", { params: { page } }),
  topRated: (page: number) => api.get("/tv/top_rated", { params: { page } }),
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
  getGenres: () => api.get("/genre/tv/list"),
  getKeywords: (tv_id: string) => api.get(`/tv/${tv_id}/keywords`),
  getTvCredits: (tv_id: string) => api.get(`/tv/${tv_id}/credits`),
  getTvReviews: (tv_id: string) => api.get(`/tv/${tv_id}/reviews`),
};

export const peopleApi = {
  popular: (page: number) => api.get("/person/popular", { params: { page } }),
  poepleDetail: (person_id: string) => api.get(`/person/${person_id}`),
  search: (term: string) =>
    api.get("/search/person", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
