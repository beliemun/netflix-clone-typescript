import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import VideoList from "Screens/VideoList";
import VideoDetail from "Screens/VideoDetail";
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
        <Route path="/tv" component={VideoList} exact />
        <Route path="/tv/airing-today" component={VideoList} />
        <Route path="/tv/on-the-air" component={VideoList} />
        <Route path="/tv/top-rated" component={VideoList} />
        <Route path="/tv/:id" component={VideoDetail} />
      </Switch>
    </>
  );
};

export default Movie;
