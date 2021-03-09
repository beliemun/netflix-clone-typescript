import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  HomeContainer,
  MovieContainer,
  GradientCover,
  DetailContainer,
  Title,
  Info,
  Overview,
  StarsContainer,
  PlayButtonContainer,
  PlayButton,
  PlayButtonText,
  TagLine,
  YoutubeContainer,
  YoutubeCover,
} from "./style";
import { IVideo, IDetailVideo } from "types";
import { movieApi, tvApi } from "Components/Api";
import { getRandomInt, convertGenres } from "functions/common";
import Loader from "Components/Loader";
import Base from "Components/Base";
import Youtube from "react-youtube";
import Genres from "Components/Genres";
import RatingStars from "Components/RatingStars";
import VideoSlider from "Components/VideoSlider";
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
    <HomeContainer>
      {mainMovie && mainMovie.videos && mainMovie.videos.results.length > 0 && (
        <YoutubeContainer>
          <Youtube
            videoId={mainMovie.videos.results[0].key}
            opts={{
              height: "1080",
              width: "1920",
              playerVars: {
                autoplay: 1,
                showinfo: 0,
                rel: 0,
                controls: 0,
                disablekb: 1,
                fs: 0,
                loop: 1,
                playlist: mainMovie.videos.results[0].key,
                modestbranding: 1,
                start: 10,
                end: 10,
                mute: 1,
                enablejsapi: 1,
              },
            }}
          />
          <YoutubeCover />
        </YoutubeContainer>
      )}
      {mainMovie && (
        <MovieContainer
          bgUrl={
            mainMovie.poster_path
              ? `https://image.tmdb.org/t/p/original${mainMovie.backdrop_path}`
              : require("assets/no-image.jpg").default
          }
        >
          <GradientCover />
          {mainMovie.tagline.length > 0 && (
            <TagLine bgUrl={require("assets/texture.jpg").default}>
              {mainMovie.tagline.length < 36
                ? mainMovie.tagline
                : mainMovie.tagline.slice(0, 36) + "..."}
            </TagLine>
          )}
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
          <PlayButtonContainer>
            <PlayButton to={`/movie/${mainMovie.id}`}>
              <i className="fas fa-play"></i>
              <PlayButtonText>Play</PlayButtonText>
            </PlayButton>
          </PlayButtonContainer>
        </MovieContainer>
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
    </HomeContainer>
  );
};

export default Home;
