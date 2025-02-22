import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ApiVideoParser from "Components/ApiVideoParser";
import useScrollTop from "hooks/useScollTop";
import Base from "Components/Base";
import { IVideo, MediaType } from "types";
import List from "./List";

const VideoList: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const mediaType: MediaType = pathname.includes("movie") ? "movie" : "tv";
  const [videos, setVideos] = useState<Array<IVideo>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const { elementRef, onClick } = useScrollTop();

  useEffect(() => {
    const LoadVideos = async (page: number) => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await ApiVideoParser(pathname, page);
        setVideos((prev) => prev.concat(results));
      } catch (e) {
        console.log(e);
      } finally {
        setPage(page);
        setLoading(false);
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
    <>
      <List videos={videos} mediaType={mediaType} />
      <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </Base.ScrollUpButton>
    </>
  );
};

export default VideoList;
