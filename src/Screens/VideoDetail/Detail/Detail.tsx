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
} from "./style";
import { MediaType, IDetailVideo, IKeyword, IGenre } from "types";
import Genres from "Components/Genres";
import RatingStars from "Components/RatingStars";
import Videos from "../Videos";
import Keywords from "../Keywords";
import Flag from "react-country-flag";

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
  const convertGenres = (genres: IGenre[]): number[] =>
    genres.map((genre) => genre.id);

  return (
    <Container>
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
    </Container>
  );
};

export default Detail;
