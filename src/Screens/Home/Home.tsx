import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {} from "./style";
import { IVideo } from "types";
import { movieApi, tvApi } from "Components/Api";
import Loader from "Components/Loader";
import VideoSlider from "Components/VideoSlider";
import Base from "Components/Base";
import Footer from "Components/Footer";

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IVideo[]>([]);
  const [tvShows, setTvShows] = useState<IVideo[]>([]);

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
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    loadMoives();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <VideoSlider title={"Popular Movies"} videos={movies} mediaType="movie" />
      <Base.Height height={-40} />
      <VideoSlider title={"Popular TV Shows"} videos={tvShows} mediaType="tv" />
      <Footer />
    </>
  );
};

export default Home;
