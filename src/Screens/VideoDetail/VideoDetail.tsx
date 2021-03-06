import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  Contaniner,
  BackDrop,
  BackDropCurtain,
  VideoContainer,
  VideoPoster,
  VideoDetailContainer,
  VideoTitle,
  VideoSubTitle,
  VideoTagLine,
  VideoOverview,
  RateContainer,
  Revenue,
} from "./style";
import { movieApi, tvApi } from "Components/Api";
import {
  IVideo,
  IDetailVideo,
  IKeyword,
  ICast,
  ICrew,
  IGenre,
  IReview,
  MediaType,
} from "types";
import useScrollTop from "hooks/useScollTop";
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
import Flag from "react-country-flag";
import VideoSlider from "Components/VideoSlider";
import Footer from "Components/Footer";

interface IParamsProps {
  id: string;
}

const VideoDetail: React.FunctionComponent<
  RouteComponentProps<IParamsProps>
> = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<IDetailVideo | null>(null);
  const [keywords, setKeywords] = useState<IKeyword[] | null>(null);
  const [cast, setCast] = useState<ICast[] | null>(null);
  const [crew, setCrew] = useState<ICrew[] | null>(null);
  const [reviews, setReviews] = useState<IReview[] | null>(null);
  const [similar, setSimilar] = useState<IVideo[] | null>(null);
  const [mediaType] = useState<MediaType>(
    pathname.includes("movie") ? "movie" : "tv"
  );
  const { elementRef, onClick } = useScrollTop();

  useEffect(() => {
    const loadVideo = async () => {
      try {
        setLoading(true);
        const { data } =
          mediaType === "movie"
            ? await movieApi.movieDetail(id)
            : await tvApi.tvDetail(id);
        setVideo(data);
        const {
          data: { keywords },
        } =
          mediaType === "movie"
            ? await movieApi.getKeywords(id)
            : await tvApi.getKeywords(id);
        setKeywords(keywords);
        const {
          data: { cast, crew },
        } =
          mediaType === "movie"
            ? await movieApi.getMoiveCredits(id)
            : await tvApi.getTvCredits(id);
        setCast(cast);
        setCrew(crew);
        const {
          data: { results: reviews },
        } =
          mediaType === "movie"
            ? await movieApi.getMoiveReviews(id)
            : await tvApi.getTvReviews(id);
        setReviews(reviews);
        const {
          data: { results: similar },
        } =
          mediaType === "movie"
            ? await movieApi.getSimilar(id)
            : await tvApi.getSimilar(id);
        setSimilar(similar);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    loadVideo();
  }, [id]);

  const convertGenres = (genres: IGenre[]): number[] =>
    genres.map((genre) => genre.id);

  return loading || video === null ? (
    <Loader />
  ) : (
    <>
      <BackDrop
        bgUrl={
          video.backdrop_path
            ? `https://image.tmdb.org/t/p/w300${video.backdrop_path}`
            : require("assets/no-image.jpg").default
        }
      >
        <BackDropCurtain />
      </BackDrop>
      <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </Base.ScrollUpButton>
      <Contaniner>
        <VideoContainer>
          <VideoPoster
            bgUrl={
              video.poster_path
                ? `https://image.tmdb.org/t/p/w300${video.poster_path}`
                : require("assets/no-image.jpg").default
            }
          />

          <VideoDetailContainer>
            <VideoTitle>
              {mediaType === "movie" ? video.title : video.name}
              {video.production_countries[0] && (
                <Flag
                  countryCode={video.production_countries[0].iso_3166_1}
                  style={{
                    fontSize: "40px",
                    lineHeight: "40px",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                />
              )}
            </VideoTitle>
            <Genres genre_ids={convertGenres(video.genres)} />
            <VideoSubTitle>
              {mediaType === "movie"
                ? `${video.release_date.slice(0, 4)} • ${video.runtime}`
                : `${video.first_air_date.slice(0, 4)} • ${
                    video.number_of_seasons
                  } Seasons • ${video.number_of_episodes} Episodes`}
            </VideoSubTitle>
            <RateContainer>
              <RatingStars rate={video.vote_average} />
            </RateContainer>
            {video.tagline.length !== 0 && (
              <VideoTagLine>"{video.tagline}"</VideoTagLine>
            )}
            <VideoOverview>{video.overview}</VideoOverview>
            <Videos videos={video.videos.results} />
            <Keywords keywords={keywords} />
          </VideoDetailContainer>
        </VideoContainer>
        <Cast
          cast={cast}
          title={mediaType === "movie" ? "Top Billed Cast" : "Series Cast"}
        />
        <Crew crew={crew} />
        <Company company={video.production_companies} />
        {video.budget > 0 && video.revenue > 0 && (
          <Revenue>{`Budget: $${video.budget.toLocaleString(
            "en-EN"
          )} / Revenue: $${video.revenue.toLocaleString("en-EN")}`}</Revenue>
        )}
        <div style={{ height: "30px" }} />
        <Reviews reviews={reviews} />
      </Contaniner>
      <VideoSlider
        title={"Similar Movies"}
        videos={similar}
        mediaType={mediaType}
      />
      <Footer />
    </>
  );
};

export default VideoDetail;
