import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { movieApi } from "Components/Api";
import Loader from "Components/Loader";
import { Container, Item, Poster, Title, Genres, Rate } from "./style";
import { AxiosResponse } from "axios";
import ApiLoader from "Components/ApiLoader";

interface IGenreCode {
  id: number;
  name: string;
}

interface IVideo {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
}

const VideoList: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const [videos, setVideos] = useState([]);
  const [genreCodes, setGenreCodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const LoadVideos = async () => {
      setLoading(true);
      const {
        data: { results },
      } = await ApiLoader(pathname);
      setVideos(results);
      const {
        data: { genres },
      } = await movieApi.getGenres();
      setGenreCodes(genres);
      setLoading(false);
    };
    LoadVideos();
  }, [pathname]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {videos.map((video: IVideo) => (
        <Item key={video.id}>
          <Poster
            bgUrl={`https://image.tmdb.org/t/p/original${video.poster_path}`}
          />
          <Title>{video.title}</Title>
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
          <Rate>{video.vote_average}</Rate>
        </Item>
      ))}
    </Container>
  );
};

export default VideoList;
