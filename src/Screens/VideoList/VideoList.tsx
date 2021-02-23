import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { movieApi } from "Components/Api";
import { Container, GoToTopButton } from "./style";
import ApiLoader from "Components/ApiLoader";
import VideoItem from "Components/VideoItem";
import useScrollTop from "hooks/useScollTop";

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

const VideoList: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const isMovie = pathname.includes("movie");
  const [videos, setVideos] = useState<Array<IVideo>>([]);
  const [genreCodes, setGenreCodes] = useState<Array<IGenreCode>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const { elementRef, onClick } = useScrollTop();

  useEffect(() => {
    const LoadVideos = async (page: number) => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await ApiLoader(pathname, page);
        setVideos((prev) => prev.concat(results));
        const {
          data: { genres },
        } = await movieApi.getGenres();
        setGenreCodes(genres);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
        setPage(page);
      }
    };

    const checkTouchBottom = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight * 0.7 && !loading) {
        LoadVideos(page + 1);
      }
    };

    if (videos.length === 0) checkTouchBottom();
    document.addEventListener("scroll", checkTouchBottom);
    return () => document.removeEventListener("scroll", checkTouchBottom);
  }, [pathname, page, loading, videos]);

  useEffect(() => {
    setVideos([]);
    setPage(0);
  }, [pathname]);

  return (
    <Container>
      {videos.map((video: IVideo, index: number) => (
        <VideoItem
          key={video.id}
          index={index}
          video={video}
          isMovie={isMovie}
          genreCodes={genreCodes}
        />
      ))}
      <GoToTopButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </GoToTopButton>
    </Container>
  );
};

export default VideoList;
