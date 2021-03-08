import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Contaniner, BackDrop, BackDropCurtain, Revenue } from "./style";
import { movieApi, tvApi } from "Components/Api";
import {
  IVideo,
  IDetailVideo,
  IKeyword,
  ICast,
  ICrew,
  IReview,
  MediaType,
} from "types";
import useScrollTop from "hooks/useScollTop";
import Base from "Components/Base";
import Loader from "Components/Loader";
import Detail from "./Detail";
import Cast from "./Cast";
import Crew from "./Crew";
import Company from "./Company";
import Reviews from "./Reviews";
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
  const [keywords, setKeywords] = useState<IKeyword[]>([]);
  const [cast, setCast] = useState<ICast[]>([]);
  const [crew, setCrew] = useState<ICrew[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [similar, setSimilar] = useState<IVideo[]>([]);
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
  }, [id, mediaType]);

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

      <Contaniner>
        <Detail video={video} keywords={keywords} mediaType={mediaType} />
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
      <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </Base.ScrollUpButton>
    </>
  );
};

export default VideoDetail;
