import firebase from "firebase";

type MediaType = "movie" | "tv" | "person";

interface IUser {
  user: firebase.User | null;
}

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
  popularity: number;
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
  title: string;
  name: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  first_air_date: string;
  original_language: string;
  media_type: MediaType;
}

interface IPerson {
  id: number;
  name: string;
  known_for: Array<IKnowFor>;
  known_for_department: string;
  profile_path: string;
}

interface IPersonDetail {
  id: number;
  name: string;
  biography: string;
  profile_path: string | null;
  place_of_birth: string | null;
  gender: integer;
  birthday: string | null;
  known_for_department: string;
}

interface ICompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

interface IProductionCompany {
  iso_3166_1: string;
  name: string;
}

interface IYoutube {
  id: string;
  key: string;
  name: string;
  site: string;
  iso_639_1: string;
  iso_3166_1: string;
  type: string;
}

interface IDetailVideo {
  id: number;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  overview: string;
  title: string;
  name: string;
  genres: Array<IGenre>;
  release_date: string;
  first_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
  runtime: string;
  tagline: string;
  vote_average: number;
  videos: {
    results: Array<IYoutube>;
  };
  production_companies: Array<ICompany> | null;
  production_countries: Array<IProductionCompany>;
  budget: number;
  revenue: number;
}

interface ICredit {
  id: number;
  name: string;
  profile_path: string | null;
}

interface ICast extends ICredit {
  character: string;
}

interface ICrew extends ICredit {
  job: string;
  known_for_department: string;
}

interface IReview {
  content: string;
  created_at: string;
  author_details: {
    username: string;
    avatar_path: string;
    rating: string;
  };
}
