import React from "react";
import {
  Item,
  Poster,
  Title,
  PosterCover,
  HoverTitle,
  HoverYear,
  RateContainer,
  GenresContainer,
} from "./style";
import RatingStars from "Components/RatingStars";
import Genres from "Components/Genres";
import { IVideo, MediaType } from "types";

interface IProps {
  video: IVideo;
  index: number;
  mediaType: MediaType;
}

const VideoItem: React.FunctionComponent<IProps> = ({
  video,
  index,
  mediaType,
}) => {
  return (
    <Item
      index={index}
      to={mediaType === "movie" ? `/movie/${video.id}` : `/tv/${video.id}`}
    >
      <Poster
        bgUrl={
          video.poster_path
            ? `https://image.tmdb.org/t/p/w342${video.poster_path}`
            : require("assets/no-image.jpg").default
        }
      >
        <PosterCover>
          <HoverTitle>
            {mediaType === "movie" ? video.title : video.name}
          </HoverTitle>
          <HoverYear>
            (
            {mediaType === "movie"
              ? video.release_date?.slice(0, 4)
              : video.first_air_date?.slice(0, 4)}
            )
          </HoverYear>
        </PosterCover>
      </Poster>
      <Title>{mediaType === "movie" ? video.title : video.name}</Title>
      <GenresContainer>
        <Genres genre_ids={video.genre_ids} />
      </GenresContainer>
      <RateContainer>
        <RatingStars rate={video.vote_average} />
      </RateContainer>
    </Item>
  );
};

export default VideoItem;
