import {} from "react";

interface IVideo {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
}

interface ICategory {
  pathname: string;
  title: string;
  description: string;
}

interface ICategoryHeader {
  current: string;
  title: string;
  description: string;
}

interface __ID__NAME {
  id: number;
  name: string;
}

interface IGenre extends __ID__NAME {}
interface IKeyword extends __ID__NAME {}

interface IKnowFor {
  id: string;
  title?: string;
  name?: string;
  poster_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  original_language: string;
  media_type: "movie" | "tv";
}

interface IPerson {
  id: number;
  name: string;
  known_for: Array<IKnowFor>;
  known_for_department: string;
  profile_path: string;
}

interface ICast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface IMovieVideos {
  id: string;
  key: string;
  name: string;
  site: string;
  iso_639_1: string;
  iso_3166_1: string;
  type: string;
}

interface IMovie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  overview: string;
  title: string;
  genres: Array<IGenre>;
  release_date: string;
  runtime: string;
  tagline: string;
  vote_average: number;
  videos: {
    results: Array<IMovieVideos>;
  };
}
