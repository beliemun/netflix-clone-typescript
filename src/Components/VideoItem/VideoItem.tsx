import React from "react";
import {
  Item,
  Poster,
  Title,
  PosterCover,
  HoverTitle,
  HoverYear,
  Rate,
} from "./style";
import RatingStars from "Components/RatingStars";
import Genres from "Components/Genres";

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
}

interface IProps {
  video: IVideo;
  index: number;
  isMovie: boolean;
}

const VideoItem: React.FunctionComponent<IProps> = ({
  video,
  index,
  isMovie,
}) => {
  return (
    <Item index={index} to={isMovie ? `/movie/${video.id}` : `/tv/${video.id}`}>
      <Poster
        bgUrl={
          video.poster_path
            ? `https://image.tmdb.org/t/p/w342${video.poster_path}`
            : require("assets/no-image.jpg").default
        }
      >
        <PosterCover>
          <HoverTitle>{isMovie ? video.title : video.name}</HoverTitle>
          <HoverYear>
            (
            {isMovie
              ? video.release_date?.slice(0, 4)
              : video.first_air_date?.slice(0, 4)}
            )
          </HoverYear>
        </PosterCover>
      </Poster>
      <Title>{isMovie ? video.title : video.name}</Title>
      <Genres genre_ids={video.genre_ids} />
      <Rate>
        <RatingStars rate={video.vote_average} />
      </Rate>
    </Item>
  );
};

export default VideoItem;
