import React from "react";
import {
  Item,
  Poster,
  Title,
  Genres,
  PosterCover,
  HoverTitle,
  HoverYear,
} from "./style";
import RatingStars from "Components/RatingStars";

interface IGenreCode {
  id: number;
  name: string;
}

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

interface Props {
  video: IVideo;
  index: number;
  isMovie: boolean;
  genreCodes: Array<IGenreCode>;
}

const VideoItem: React.FunctionComponent<Props> = ({
  video,
  index,
  isMovie,
  genreCodes,
}) => {
  return (
    <Item index={index} to={isMovie ? `/movie/${video.id}` : `/tv/${video.id}`}>
      <Poster
        bgUrl={
          video.poster_path
            ? `https://image.tmdb.org/t/p/w500${video.poster_path}`
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
      <Genres>
        {video.genre_ids.map((video_genre_id: number, index) =>
          genreCodes.map((code: IGenreCode) =>
            code.id === video_genre_id
              ? video.genre_ids.length - 1 === index
                ? code.name
                : code.name + " • "
              : ""
          )
        )}
      </Genres>
      <RatingStars rate={video.vote_average} />
    </Item>
  );
};

export default VideoItem;
