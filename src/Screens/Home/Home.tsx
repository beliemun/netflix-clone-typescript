import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  Container,
  MovieContainer,
  GradientCover,
  DetailContainer,
  Title,
  Info,
  Overview,
  StarsContainer,
  PlayButton,
  PlayButtonText,
} from "./style";
import { IVideo, IDetailVideo } from "types";
import { movieApi, tvApi } from "Components/Api";
import { getRandomInt, convertGenres } from "functions/common";
import Loader from "Components/Loader";
import VideoSlider from "Components/VideoSlider";
import Base from "Components/Base";
import Genres from "Components/Genres";
import RatingStars from "Components/RatingStars";
import Footer from "Components/Footer";

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IVideo[]>([]);
  const [tvShows, setTvShows] = useState<IVideo[]>([]);
  const [mainMovie, setMainMovie] = useState<IDetailVideo | null>(null);

  useEffect(() => {
    const loadMoives = async () => {
      try {
        setLoading(true);
        const {
          data: { results: movies },
        } = await movieApi.popular(1);
        setMovies(movies);
        const {
          data: { results: tvShows },
        } = await tvApi.popular(1);
        setTvShows(tvShows);
        const { data: mainMovie } = await movieApi.movieDetail(
          movies[getRandomInt(0, 10)].id
        );
        setMainMovie(mainMovie);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    loadMoives();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      {mainMovie && (
        <Container>
          <MovieContainer
            bgUrl={
              mainMovie.poster_path
                ? `https://image.tmdb.org/t/p/original${mainMovie.backdrop_path}`
                : require("assets/no-image.jpg").default
            }
          >
            <GradientCover />
            <DetailContainer>
              <Title>{mainMovie.title}</Title>
              <Genres genre_ids={convertGenres(mainMovie.genres)} />
              <Info>{`${mainMovie.release_date.slice(0, 4)}  • ${
                mainMovie.runtime
              }m`}</Info>
              <StarsContainer>
                <RatingStars rate={mainMovie.vote_average} />
              </StarsContainer>
              <Overview>{mainMovie.overview}</Overview>
            </DetailContainer>
            <PlayButton to={`/movie/${mainMovie.id}`}>
              <i className="fas fa-play"></i>
              <PlayButtonText>Play</PlayButtonText>
            </PlayButton>
          </MovieContainer>
        </Container>
      )}
      <VideoSlider
        title={"TOP 20 Movies"}
        videos={movies}
        mediaType="movie"
        link="/movie"
      />
      <Base.Height height={-40} />
      <VideoSlider
        title={"TOP 20 TV Shows"}
        videos={tvShows}
        mediaType="tv"
        link="/tv"
      />
      <Footer />
    </>
  );
};

export default Home;
