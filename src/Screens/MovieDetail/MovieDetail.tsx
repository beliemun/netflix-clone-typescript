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
} from "./style";
import { movieApi } from "Components/Api";
import Loader from "Components/Loader";
import Genres from "Components/Genres";

interface IParamsProps {
  id: string;
}

interface IGenre {
  id: string;
  name: string;
}

interface IMovieVideo {
  id: string;
  key: string;
  name: string;
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
  videos: {
    results: Array<IMovieVideo>;
  };
}

const MovieDetail: React.FunctionComponent<
  RouteComponentProps<IParamsProps>
> = ({
  match: {
    params: { id },
  },
}) => {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        const { data } = await movieApi.movieDetail(id);
        setMovie(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    loadMovie();
  }, [id]);

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
          {/* <Genres genre_ids={movie.genres} /> */}
          {console.log(movie.genres)}
          <MovieSubTitle>{movie.title}</MovieSubTitle>
          {movie.tagline.length !== 0 && (
            <MovieTagLine>"{movie.tagline}"</MovieTagLine>
          )}
          <MovieOverview>{movie.overview}</MovieOverview>
        </MovieDetailContainer>
      </MovieContainer>
    </Contaniner>
  );
};

export default MovieDetail;
