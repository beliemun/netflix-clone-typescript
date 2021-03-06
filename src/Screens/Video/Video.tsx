import React, { useEffect, useState } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { ICategory } from "types";
import VideoList from "Screens/VideoList";
import VideoDetail from "Screens/VideoDetail";
import Category from "Components/Category";
import movieCategory from "./movie/category";
import tvCategory from "./tv/category";

const Video: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [category, setCategory] = useState<Array<ICategory>>([]);

  useEffect(() => {
    const {
      location: { pathname },
    } = props;
    if (pathname.includes("movie")) {
      setCategory(movieCategory);
    } else if (pathname.includes("tv")) {
      setCategory(tvCategory);
    }
  }, [category, props.location.pathname]);

  const hasVideo = (): boolean => {
    let hasVideo = false;
    const {
      location: { pathname },
    } = props;
    category.forEach((e) => {
      if (hasVideo) return;
      if (e.pathname === pathname) hasVideo = true;
    });
    return hasVideo;
  };

  return (
    <>
      {hasVideo() && <Category items={category} {...props} />}
      <Switch>
        <Route path="/movie" component={VideoList} exact />
        <Route path="/movie/now-playing" component={VideoList} />
        <Route path="/movie/upcoming" component={VideoList} />
        <Route path="/movie/top-rated" component={VideoList} />
        <Route path="/movie/:id" component={VideoDetail} />
        <Route path="/tv" component={VideoList} exact />
        <Route path="/tv/airing-today" component={VideoList} />
        <Route path="/tv/on-the-air" component={VideoList} />
        <Route path="/tv/top-rated" component={VideoList} />
        <Route path="/tv/:id" component={VideoDetail} />
      </Switch>
    </>
  );
};

export default Video;
