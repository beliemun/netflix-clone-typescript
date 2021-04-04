import React from "react";
import {
  Container,
  VideoPoster,
  VideoDetailContainer,
  VideoTitle,
  VideoSubTitle,
  VideoTagLine,
  VideoOverview,
  RateContainer,
  Flag,
} from "./style";
import { MediaType, IDetailVideo, IKeyword, IGenre } from "types";
import { convertGenres } from "functions/common";
import Genres from "Components/Genres";
import RatingStars from "Components/RatingStars";
import Videos from "../Videos";
import Keywords from "../Keywords";
import getFlagIcon from "country-flag-icons/unicode";

interface IProps {
  video: IDetailVideo;
  keywords: IKeyword[];
  mediaType: MediaType;
}

const Detail: React.FunctionComponent<IProps> = ({
  video,
  keywords,
  mediaType,
}) => {
  return (
    <Container>
      <VideoPoster
        bgUrl={
          video.poster_path
            ? `https://image.tmdb.org/t/p/w300${video.poster_path}`
            : require("assets/no-image.jpg").default
        }
      >
        {video.production_countries[0] && (
          <Flag>{getFlagIcon(video.production_countries[0].iso_3166_1)}</Flag>
        )}
      </VideoPoster>
      <VideoDetailContainer>
        <VideoTitle>
          {mediaType === "movie" ? video.title : video.name}
        </VideoTitle>
        <Genres genre_ids={convertGenres(video.genres)} />
        <VideoSubTitle>
          {mediaType === "movie"
            ? `${video.release_date.slice(0, 4)} • ${video.runtime}m`
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
    </Container>
  );
};

export default Detail;
