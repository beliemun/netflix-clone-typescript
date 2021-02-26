import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import VideoList from "Screens/VideoList";
import MovieDetail from "Screens/MovieDetail";
import Category from "Components/Category";
import items from "./category";

const Movie: React.FunctionComponent<RouteComponentProps> = (props) => {
  const renderCategory = (): boolean => {
    let render = false;
    const {
      location: { pathname },
    } = props;
    items.forEach((e) => {
      if (render) return;
      if (e.pathname === pathname) render = true;
    });
    return render;
  };

  return (
    <>
      {renderCategory() && <Category items={items} {...props} />}
      <Switch>
        <Route path="/movie" component={VideoList} exact />
        <Route path="/movie/now-playing" component={VideoList} />
        <Route path="/movie/upcoming" component={VideoList} />
        <Route path="/movie/top-rated" component={VideoList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </>
  );
};

export default Movie;
