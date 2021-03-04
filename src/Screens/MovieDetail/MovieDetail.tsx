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
  Revenue,
} from "./style";
import { movieApi } from "Components/Api";
import { IMovie, IKeyword, ICast, ICrew, IGenre, IReview } from "types";
import Base from "Components/Base";
import Loader from "Components/Loader";
import Genres from "Components/Genres";
import RatingStars from "Components/RatingStars";
import Videos from "./Videos";
import Keywords from "./Keywords";
import Cast from "./Cast";
import Crew from "./Crew";
import Company from "./Company";
import Reviews from "./Reviews";

interface IParamsProps {
  id: string;
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
  const [keywords, setKeywords] = useState<IKeyword[] | null>(null);
  const [cast, setCast] = useState<ICast[] | null>(null);
  const [crew, setCrew] = useState<ICrew[] | null>(null);
  const [reviews, setReviews] = useState<IReview[] | null>(null);

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
          data: { cast, crew },
        } = await movieApi.getMoiveCredits(id);
        setCast(cast);
        setCrew(crew);
        const {
          data: { results },
        } = await movieApi.getMoiveReviews(id);
        setReviews(results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    loadMovie();
  }, [id]);

  const convertGenres = (genres: IGenre[]): number[] =>
    genres.map((genre) => genre.id);

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
      <Base.GradientLine />
      <Crew crew={crew} />
      <Base.GradientLine />
      <Company company={movie.production_companies} />
      {movie.budget > 0 && movie.revenue > 0 && (
        <Revenue>{`Budget: $${movie.budget.toLocaleString(
          "en-EN"
        )} / Revenue: $${movie.revenue.toLocaleString("en-EN")}`}</Revenue>
      )}
      <div style={{ height: "30px" }} />
      <Base.GradientLine />
      <Reviews reviews={reviews} />
    </Contaniner>
  );
};

export default MovieDetail;
