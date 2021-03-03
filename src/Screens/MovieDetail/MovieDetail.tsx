import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  Contaniner,
  BackDrop,
  BackDropCurtain,
  MovieContainer,
  MoviePoster,
  MovieDetailContainer,
  MovieTitle,
  MovieSubTitle,
  MovieTagLine,
  MovieOverview,
  RateContainer,
} from "./style";
import { movieApi } from "Components/Api";
import Loader from "Components/Loader";
import Genres from "Components/Genres";
import RatingStars from "Components/RatingStars";
import Videos from "./Videos";
import Keywords from "./Keywords";
import Cast from "./Cast";
import Base from "Components/Base";

interface IParamsProps {
  id: string;
}

interface IGenre {
  id: string;
  name: string;
}

interface IKeywords {
  id: string;
  name: string;
}

interface IMovieVideo {
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
    results: Array<IMovieVideo>;
  };
}

interface ICast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const MovieDetail: React.FunctionComponent<
  RouteComponentProps<IParamsProps>
> = ({
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [keywords, setKeywords] = useState<IKeywords[] | null>(null);
  const [cast, setCast] = useState<ICast[] | null>(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        const { data } = await movieApi.movieDetail(id);
        setMovie(data);
        const {
          data: { keywords },
        } = await movieApi.getKeywords(id);
        setKeywords(keywords);
        const {
          data: { cast },
        } = await movieApi.getMoiveCredits(id);
        setCast(cast);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    loadMovie();
  }, [id]);

  const convertGenres = (genres: IGenre[]): number[] =>
    genres.map((genre) => parseInt(genre.id));

  return loading || movie === null ? (
    <Loader />
  ) : (
    <Contaniner>
      <BackDrop
        bgUrl={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
            : require("assets/no-image.jpg").default
        }
      >
        <BackDropCurtain />
      </BackDrop>
      <MovieContainer>
        <MoviePoster
          bgUrl={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : require("assets/no-image.jpg").default
          }
        />
        <MovieDetailContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <Genres genre_ids={convertGenres(movie.genres)} />
          <MovieSubTitle>
            {movie.release_date.slice(0, 4)} • {movie.runtime}m
          </MovieSubTitle>
          <RateContainer>
            <RatingStars rate={movie.vote_average} />
          </RateContainer>
          {movie.tagline.length !== 0 && (
            <MovieTagLine>"{movie.tagline}"</MovieTagLine>
          )}
          <MovieOverview>{movie.overview}</MovieOverview>
          <Videos videos={movie.videos.results} />
          <Keywords keywords={keywords} />
        </MovieDetailContainer>
      </MovieContainer>
      <Base.GradientLine />
      <Cast cast={cast} />
    </Contaniner>
  );
};

export default MovieDetail;
